import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import NewsHero from "../components/news/NewsHero";
import NewsTicker from "../components/news/NewsTicker";
import FeaturedStory from "../components/news/FeaturedStory";
import NewsFilterBar from "../components/news/NewsFilterBar";
import SecondaryStoryGrid from "../components/news/SecondaryStoryGrid";
import NewsCardGrid from "../components/news/NewsCardGrid";
import NewsEmptyState from "../components/news/NewsEmptyState";
import NewsAIAssistantBanner from "../components/news/NewsAIAssistantBanner";

import { useArticlesFetch } from "../hooks/articleshook";
import { MEC_NEWS_ARTICLES, MEC_CATEGORIES } from "../data/newsData";
import "../css/newsroom-v3.css";

const PAGE_SIZE = 6;

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { posts } = useArticlesFetch();

  // URL state synchronization
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || searchParams.get("q") || "";
  const initialSort = searchParams.get("sort") || "latest";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState(initialSort);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Sync state changes with URL query parameters
  useEffect(() => {
    const params = {};
    if (activeCategory && activeCategory !== "all") params.category = activeCategory;
    if (searchQuery.trim()) params.search = searchQuery.trim();
    if (sortBy && sortBy !== "latest") params.sort = sortBy;
    setSearchParams(params, { replace: true });
  }, [activeCategory, searchQuery, sortBy, setSearchParams]);

  // Merge live API posts with local authentic articles
  const allStories = useMemo(() => {
    if (posts && Array.isArray(posts) && posts.length > 0) {
      const apiStories = posts.map((p, idx) => ({
        id: p.id ? `api-${p.id}` : `api-post-${idx}`,
        slug: p.slug || `story-${p.id}`,
        title: p.title?.rendered ? p.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&") : (p.title || "MEC Story"),
        headline: p.title?.rendered ? p.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&") : (p.title || "MEC Story"),
        subtitle: p.excerpt?.rendered ? p.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) : "Official Moi Educational Centre Update",
        excerpt: p.excerpt?.rendered ? p.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 160) + '...' : "Read the full story from Moi Educational Centre.",
        category: p._embedded?.['wp:term']?.[0]?.[0]?.name?.replace(/&amp;/g, '&') || "Campus News",
        categoryType: "campus",
        date: p.date ? p.date.substring(0, 10) : "2026-08-01",
        formattedDate: p.date ? new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "Recent",
        image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || MEC_NEWS_ARTICLES[idx % MEC_NEWS_ARTICLES.length].image,
        badge: "LATEST STORY",
        badgeType: "standard",
        readTime: "3 min read",
        author: "MEC Editorial Desk",
        authorRole: "Verified School News",
        featured: false,
        priority: 4,
        tags: ["News", "Updates", "Moi Educational Centre"],
        leadParagraph: p.excerpt?.rendered ? p.excerpt.rendered.replace(/<[^>]+>/g, '') : "",
        content: [
          {
            type: "paragraph",
            text: p.content?.rendered ? p.content.rendered.replace(/<[^>]+>/g, '') : "Full story details from Moi Educational Centre."
          }
        ]
      }));

      // Filter out duplicate titles
      const existingTitles = new Set(apiStories.map((s) => s.title.toLowerCase()));
      const filteredLocal = MEC_NEWS_ARTICLES.filter((s) => !existingTitles.has(s.title.toLowerCase()));
      return [...apiStories, ...filteredLocal];
    }
    return MEC_NEWS_ARTICLES;
  }, [posts]);

  // Calculate story counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allStories.length };
    MEC_CATEGORIES.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = allStories.filter(
          (s) =>
            s.categoryType === cat.id ||
            s.category.toLowerCase().includes(cat.id.toLowerCase()) ||
            (cat.id === "sports" && s.category.toLowerCase().includes("athletic")) ||
            (cat.id === "arts" && (s.category.toLowerCase().includes("music") || s.category.toLowerCase().includes("tour"))) ||
            (cat.id === "stem" && s.category.toLowerCase().includes("robot"))
        ).length;
      }
    });
    return counts;
  }, [allStories]);

  // Filter & search stories
  const filteredStories = useMemo(() => {
    let result = [...allStories];

    // 1. Category Filter
    if (activeCategory !== "all") {
      result = result.filter((s) => {
        const catLow = s.category.toLowerCase();
        const typeLow = (s.categoryType || "").toLowerCase();
        if (typeLow === activeCategory.toLowerCase()) return true;
        if (activeCategory === "sports" && (catLow.includes("sport") || catLow.includes("athletic") || catLow.includes("aquatic"))) return true;
        if (activeCategory === "arts" && (catLow.includes("art") || catLow.includes("music") || catLow.includes("tour"))) return true;
        if (activeCategory === "academics" && (catLow.includes("academic") || catLow.includes("curriculum") || catLow.includes("cambridge") || catLow.includes("cbc"))) return true;
        if (activeCategory === "stem" && (catLow.includes("stem") || catLow.includes("robot") || catLow.includes("ai") || catLow.includes("tech"))) return true;
        if (activeCategory === "achievements" && (s.badgeType === "achievement" || catLow.includes("achievement") || catLow.includes("tour"))) return true;
        if (activeCategory === "campus" && (catLow.includes("campus") || catLow.includes("alumni") || catLow.includes("culture") || catLow.includes("safety"))) return true;
        if (activeCategory === "events" && (catLow.includes("event") || catLow.includes("announcement") || catLow.includes("career"))) return true;
        if (activeCategory === "admissions" && catLow.includes("admission")) return true;
        return catLow.includes(activeCategory.toLowerCase());
      });
    }

    // 2. Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((s) => {
        const titleMatch = (s.title || "").toLowerCase().includes(q);
        const headlineMatch = (s.headline || "").toLowerCase().includes(q);
        const excerptMatch = (s.excerpt || "").toLowerCase().includes(q);
        const catMatch = (s.category || "").toLowerCase().includes(q);
        const authorMatch = (s.author || "").toLowerCase().includes(q);
        const tagMatch = (s.tags || []).some((t) => t.toLowerCase().includes(q));
        const leadMatch = (s.leadParagraph || "").toLowerCase().includes(q);
        return titleMatch || headlineMatch || excerptMatch || catMatch || authorMatch || tagMatch || leadMatch;
      });
    }

    // 3. Sorting
    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.date || "2026-01-01") - new Date(a.date || "2026-01-01"));
    } else if (sortBy === "featured") {
      result.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    } else if (sortBy === "popular") {
      result.sort((a, b) => (parseInt(b.views) || 0) - (parseInt(a.views) || 0));
    }

    return result;
  }, [allStories, activeCategory, searchQuery, sortBy]);

  // Determine editorial visual hierarchy
  const isDefaultView = activeCategory === "all" && !searchQuery.trim();
  const featuredStory = isDefaultView ? filteredStories[0] : null;
  const secondaryStories = isDefaultView ? filteredStories.slice(1, 3) : [];
  const gridStories = isDefaultView ? filteredStories.slice(3, visibleCount + 3) : filteredStories.slice(0, visibleCount);

  const totalMatching = filteredStories.length;
  const currentlyShown = isDefaultView ? Math.min(visibleCount + 3, totalMatching) : Math.min(visibleCount, totalMatching);
  const hasMore = currentlyShown < totalMatching;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSortBy("latest");
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="newsroom-page-root">
      <SEO
        title="News & Updates — Digital Newsroom | Moi Educational Centre"
        description="Explore the latest news, student achievements, global educational tours, academic breakthroughs, and events from Moi Educational Centre Nairobi."
        keywords="MEC news, Moi Educational Centre achievements, Vienna music tour, VEX robotics, sports championship, Cambridge curriculum, CBC education Kenya"
      />

      <Navbar />

      {/* 1. Newsroom Hero */}
      <NewsHero />

      {/* 2. Breaking News Ticker */}
      <NewsTicker />

      {/* 3. Featured Story Spotlight (Shown prominently in default view) */}
      {isDefaultView && featuredStory && (
        <FeaturedStory story={featuredStory} />
      )}

      {/* 4. Controls Bar (Category Pills, Search, Sort) */}
      <NewsFilterBar
        categories={MEC_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setVisibleCount(PAGE_SIZE);
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setVisibleCount(PAGE_SIZE);
        }}
        onClearSearch={() => setSearchQuery("")}
        sortBy={sortBy}
        onSortChange={setSortBy}
        categoryCounts={categoryCounts}
      />

      {/* 5. Main Content Area */}
      <main className="newsroom-container">
        
        {/* Secondary Spotlight Row (In default view) */}
        {isDefaultView && secondaryStories.length > 0 && (
          <SecondaryStoryGrid stories={secondaryStories} />
        )}

        {/* Standard Editorial Grid Header */}
        <div className="nr-grid-section-header">
          <h2 className="nr-grid-title">
            {activeCategory !== "all"
              ? `${MEC_CATEGORIES.find((c) => c.id === activeCategory)?.label || "Category"} Stories`
              : searchQuery.trim()
              ? `Search Results for "${searchQuery}"`
              : "Latest from MEC"}
          </h2>
          <span className="nr-grid-results-count">
            Showing {currentlyShown} of {totalMatching} stories
          </span>
        </div>

        {/* Editorial Stories Grid */}
        {gridStories.length > 0 ? (
          <NewsCardGrid stories={gridStories} />
        ) : (
          !featuredStory && (
            <NewsEmptyState
              searchQuery={searchQuery}
              activeCategory={activeCategory}
              onReset={handleResetFilters}
            />
          )
        )}

        {/* Load More Pagination */}
        {hasMore && (
          <div className="nr-loadmore-wrap">
            <button type="button" className="nr-loadmore-btn" onClick={handleLoadMore}>
              <span>Load More Stories</span>
              <span>({totalMatching - currentlyShown} remaining)</span>
            </button>
            <div className="nr-loadmore-count">
              Showing {currentlyShown} of {totalMatching} total articles
            </div>
          </div>
        )}

        {/* AI News Concierge Banner */}
        <NewsAIAssistantBanner
          onSelectCategory={setActiveCategory}
          onSearchChange={setSearchQuery}
        />

      </main>

      <Footer />
    </div>
  );
};

export default News;
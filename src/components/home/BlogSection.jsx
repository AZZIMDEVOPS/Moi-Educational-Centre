import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi2";
import { useArticlesFetch } from "../../hooks/articleshook";
import { useEffect } from "react";
import "../../css/blog-magazine.css";
// Kept for backward compatibility if they have important logic
import Accreditations from "./Accreditations";
import Explorations from "./Explorations";

const BlogSection = () => {
  const { posts } = useArticlesFetch();
  const articles = localStorage.getItem("MEC Articles") ? JSON.parse(localStorage.getItem("MEC Articles")) : posts;

  useEffect(() => {
    if (posts) {
      localStorage.setItem("MEC Articles", JSON.stringify(posts));
    }
  }, [posts]);

  // Use up to 4 articles for the magazine layout (1 featured, 3 side)
  const displayArticles = articles && articles.length >= 4 ? articles.slice(0, 4) : articles?.slice(0, 4);

  return (
    <div className="blog-magazine-section">
      <div className="inner-row">
        
        {/* Existing components retained for functionality */}
        <Explorations />

        <div className="blog-magazine-content reveal">
          <div className="blog-magazine-header">
            <div className="blog-magazine-title">
              <div className="section-eyebrow">
                <span className="section-eyebrow-dot" aria-hidden="true" />
                Latest News & Events
              </div>
              <h2 className="section-heading">
                Stories from the <span>MEC Community</span>
              </h2>
            </div>
            <Link to="/news-and-updates" className="btn-outline-purple">
              View All Articles <span><BsArrowRight /></span>
            </Link>
          </div>

          {displayArticles && displayArticles.length > 0 ? (
            <div className="blog-magazine-grid">
              
              {/* Featured Article (Left) */}
              <Link to={`/news-and-updates/${displayArticles[0].slug}`} className="blog-featured-card">
                <div className="blog-card-img-wrap">
                  <img 
                    src={displayArticles[0]._embedded["wp:featuredmedia"] ? displayArticles[0]._embedded["wp:featuredmedia"][0].source_url : '/placeholder.jpg'} 
                    alt={displayArticles[0].title.rendered} 
                    loading="lazy"
                  />
                  <div className="blog-category-badge">
                    {displayArticles[0]._embedded['wp:term'][0][0].name.replace(/&amp;/g, '&')}
                  </div>
                </div>
                <div className="blog-featured-text">
                  <h3>{displayArticles[0].title.rendered}</h3>
                  <div className="blog-read-more">
                    Read Full Story <span><HiChevronRight /></span>
                  </div>
                </div>
              </Link>

              {/* Side Articles (Right) */}
              <div className="blog-side-articles">
                {displayArticles.slice(1).map((item) => (
                  <Link to={`/news-and-updates/${item.slug}`} className="blog-side-card" key={item.id}>
                    <div className="blog-side-img-wrap">
                      <img 
                        src={item._embedded["wp:featuredmedia"] ? item._embedded["wp:featuredmedia"][0].source_url : '/placeholder.jpg'} 
                        alt={item.title.rendered} 
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-side-text">
                      <span className="blog-side-category">
                        {item._embedded['wp:term'][0][0].name.replace(/&amp;/g, '&')}
                      </span>
                      <h4>{item.title.rendered}</h4>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ) : (
            <div className="loader-box">
              <div className="spin-loader"></div>
            </div>
          )}
        </div>

        <Accreditations />
      </div>
    </div>
  );
};

export default BlogSection;
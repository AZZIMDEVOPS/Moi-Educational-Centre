/**
 * Section Images Configuration
 * Organized by page and section for easy management
 */

export const sectionImages = {
  // Home Page
  home: {
    hero: {
      background: '/assets/images/hero/mec-hero-main.jpg',
      alt: 'Moi Educational Centre Campus',
    },
    about: [
      {
        url: '/assets/images/about/about-main-1.jpg',
        alt: 'Students learning in classroom',
      },
      {
        url: '/assets/images/about/about-main-2.jpg',
        alt: 'Interactive learning environment',
      },
      {
        url: '/assets/images/about/about-main-3.jpg',
        alt: 'Campus facilities',
      },
    ],
    futureReady: {
      background: '/assets/images/home/future-ready-bg.jpg',
      overlay: true,
      alt: 'Future-ready learning',
    },
    thrive: [
      {
        url: '/assets/images/home/thrive-1.jpg',
        alt: 'Student success',
      },
      {
        url: '/assets/images/home/thrive-2.jpg',
        alt: 'Collaborative learning',
      },
    ],
    community: [
      {
        url: '/assets/images/home/community-1.jpg',
        alt: 'Community engagement',
      },
      {
        url: '/assets/images/home/community-2.jpg',
        alt: 'Parent involvement',
      },
    ],
    exploreMore: {
      background: '/assets/images/home/explore-bg.jpg',
      alt: 'Explore more opportunities',
    },
    admission: {
      background: '/assets/images/home/admission-bg.jpg',
      alt: 'Admission information',
    },
    blog: [
      {
        url: '/assets/images/home/blog-1.jpg',
        alt: 'Blog featured image 1',
      },
      {
        url: '/assets/images/home/blog-2.jpg',
        alt: 'Blog featured image 2',
      },
    ],
  },

  // About Page
  about: {
    hero: {
      background: '/assets/images/about/about-hero.jpg',
      alt: 'About MEC',
    },
    leadership: {
      background: '/assets/images/about/leadership-bg.jpg',
      alt: 'Leadership team',
    },
    statements: [
      {
        url: '/assets/images/about/mission-vision.jpg',
        alt: 'Mission and Vision',
      },
      {
        url: '/assets/images/about/values-bg.jpg',
        alt: 'Our values',
      },
    ],
    vacancies: {
      background: '/assets/images/about/vacancies-bg.jpg',
      alt: 'Career opportunities',
    },
  },

  // Admissions
  admissions: {
    hero: {
      background: '/assets/images/admissions/admission-hero.jpg',
      alt: 'Admissions',
    },
    process: [
      {
        url: '/assets/images/admissions/process-1.jpg',
        alt: 'Application process',
      },
      {
        url: '/assets/images/admissions/process-2.jpg',
        alt: 'Interview process',
      },
    ],
    resources: {
      background: '/assets/images/admissions/resources-bg.jpg',
      alt: 'Resources',
    },
  },

  // Education
  education: {
    cbc: {
      background: '/assets/images/education/cbc-bg.jpg',
      alt: 'CBC Curriculum',
    },
    cambridge: {
      background: '/assets/images/education/cambridge-bg.jpg',
      alt: 'Cambridge Programme',
    },
  },

  // Events
  events: {
    hero: {
      background: '/assets/images/events/events-hero.jpg',
      alt: 'Events',
    },
    featured: [
      {
        url: '/assets/images/events/event-1.jpg',
        alt: 'Featured event 1',
      },
      {
        url: '/assets/images/events/event-2.jpg',
        alt: 'Featured event 2',
      },
    ],
  },

  // Extracurricular/Activities
  extracurricular: {
    hero: {
      background: '/assets/images/extracurricular/clubs-hero.jpg',
      alt: 'Clubs and Activities',
    },
    clubs: [
      {
        name: 'Music Academy',
        image: '/assets/images/clubs/music-academy.jpg',
        alt: 'Music Academy',
      },
      {
        name: 'Computer Robotics',
        image: '/assets/images/clubs/computer-robotics.jpg',
        alt: 'Computer Robotics',
      },
      {
        name: 'Debate Club',
        image: '/assets/images/clubs/debate-club.jpg',
        alt: 'Debate Club',
      },
      {
        name: 'Art Club',
        image: '/assets/images/clubs/art-club.jpg',
        alt: 'Art Club',
      },
      {
        name: 'Drama Club',
        image: '/assets/images/clubs/drama-club.jpg',
        alt: 'Drama Club',
      },
      {
        name: 'Dance Academy',
        image: '/assets/images/clubs/dance-academy.jpg',
        alt: 'Dance Academy',
      },
    ],
    sports: [
      {
        name: 'Athletics',
        image: '/assets/images/sports/athletics.jpg',
        alt: 'Athletics',
      },
      {
        name: 'Soccer Academy',
        image: '/assets/images/sports/soccer.jpg',
        alt: 'Soccer Academy',
      },
      {
        name: 'Swimming',
        image: '/assets/images/sports/swimming.jpg',
        alt: 'Swimming',
      },
      {
        name: 'Basketball',
        image: '/assets/images/sports/basketball.jpg',
        alt: 'Basketball',
      },
    ],
  },

  // Leadership
  leadership: {
    hero: {
      background: '/assets/images/leadership/leadership-hero.jpg',
      alt: 'Leadership',
    },
  },

  // Gallery
  gallery: {
    hero: {
      background: '/assets/images/gallery/gallery-hero.jpg',
      alt: 'Gallery',
    },
  },

  // News
  news: {
    hero: {
      background: '/assets/images/news/news-hero.jpg',
      alt: 'News and Updates',
    },
  },

  // Contact
  contact: {
    hero: {
      background: '/assets/images/contact/contact-hero.jpg',
      alt: 'Contact Us',
    },
  },

  // Parents Hub
  parentsHub: {
    hero: {
      background: '/assets/images/parents/parents-hero.jpg',
      alt: 'Parents Hub',
    },
    resources: [
      {
        url: '/assets/images/parents/resource-1.jpg',
        alt: 'Parent resource 1',
      },
      {
        url: '/assets/images/parents/resource-2.jpg',
        alt: 'Parent resource 2',
      },
    ],
  },

  // Alumni
  alumni: {
    hero: {
      background: '/assets/images/alumni/alumni-hero.jpg',
      alt: 'Alumni',
    },
  },

  // Podcast Hub
  podcastHub: {
    hero: {
      background: '/assets/images/podcast/podcast-hero.jpg',
      alt: 'Podcast Hub',
    },
  },
};

/**
 * Get image by path (e.g., 'home.hero.background')
 */
export const getImage = (path) => {
  const parts = path.split('.');
  let current = sectionImages;

  for (const part of parts) {
    if (current && typeof current === 'object') {
      current = current[part];
    } else {
      return null;
    }
  }

  return current;
};

/**
 * Get all images for a section
 */
export const getSectionImages = (section) => {
  return sectionImages[section] || {};
};

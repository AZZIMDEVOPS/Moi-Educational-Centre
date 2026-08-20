/**
 * Club Image Configuration
 * Maps club IDs to their image paths and metadata
 * 
 * Image Structure:
 * /public/assets/images/clubs/
 *   ├── hero/          (Hero/banner images)
 *   ├── gallery/       (Additional gallery images)
 *   └── thumbnails/    (Preview thumbnails)
 * 
 * Naming Convention:
 * {clubId}-{type}-{number}.webp
 * Example: music-club-hero-1.webp, football-club-gallery-2.webp
 */

export const clubImageConfig = {
    // SPORTS
    swimming: {
        hero: '/assets/swimming.jpg',
        gallery: [
            '/assets/swimming.jpg',
            '/assets/swimming2.jpg',
            '/assets/hero-poster.jpg',
        ]
    },
    hockey: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    taekwondo: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    basketball: {
        hero: '/assets/images/clubs/hero/basketball-practice-hero-1.svg',
        gallery: [
            '/assets/images/clubs/gallery/basketball-practice-gallery-1.svg',
            '/assets/images/clubs/gallery/basketball-practice-gallery-2.svg',
            '/assets/images/clubs/gallery/basketball-practice-gallery-3.svg',
        ]
    },
    'basketball-practice': {
        hero: '/assets/images/clubs/hero/basketball-practice-hero-1.svg',
        gallery: [
            '/assets/images/clubs/gallery/basketball-practice-gallery-1.svg',
            '/assets/images/clubs/gallery/basketball-practice-gallery-2.svg',
            '/assets/images/clubs/gallery/basketball-practice-gallery-3.svg',
        ]
    },
    athletics: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    tennis: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },

    // CLUBS
    'world-scholars': {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    'music-academy': {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    'computer-robotics': {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    'debate-club': {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    homescience: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    'art-club': {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    dancing: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    drama: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    scouts: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    journalism: {
        hero: '/assets/hero-poster.jpg',
        gallery: [
            '/assets/hero-poster.jpg',
            '/assets/hero-poster2.jpg',
            '/assets/school.jpg',
        ]
    },
    'legacy-hq': {
        hero: '/assets/images/clubs/hero/legacy-hq-hero-1.svg',
        gallery: [
            '/assets/images/clubs/gallery/legacy-hq-gallery-1.svg',
            '/assets/images/clubs/gallery/legacy-hq-gallery-2.svg',
            '/assets/images/clubs/gallery/legacy-hq-gallery-3.svg',
        ]
    },
};

/**
 * Get club images for a specific activity
 * @param {string} clubId - The club ID
 * @returns {object} Object with hero and gallery image paths
 */
export const getClubImages = (clubId) => {
    return clubImageConfig[clubId] || {
        hero: '/assets/hero-poster.jpg',
        gallery: []
    };
};

/**
 * Get hero image for a specific club
 * @param {string} clubId - The club ID
 * @returns {string} Path to hero image
 */
export const getClubHeroImage = (clubId) => {
    const config = clubImageConfig[clubId];
    return config?.hero || '/assets/hero-poster.jpg';
};

/**
 * Get gallery images for a specific club
 * @param {string} clubId - The club ID
 * @returns {array} Array of gallery image paths
 */
export const getClubGalleryImages = (clubId) => {
    const config = clubImageConfig[clubId];
    return config?.gallery || [];
};

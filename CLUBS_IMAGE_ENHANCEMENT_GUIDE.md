# Clubs & Activities Image Enhancement Guide

## Overview
This guide provides comprehensive instructions for implementing visually engaging, high-quality images for the Clubs/Activities pages with purple branding overlays and responsive design.

## Components Created

### 1. **ClubCard Component** (`src/components/extracurricular/ClubCard.jsx`)
A reusable card component for displaying club/activity information with image, overlay, and CTA button.

**Features:**
- Responsive image with purple overlay
- Hover effects (zoom + CTA reveal)
- Meta information display (coach, schedule)
- Lazy loading for performance
- Accessibility-compliant

**Usage:**
```jsx
import ClubCard from './components/extracurricular/ClubCard';

<ClubCard 
    image="/assets/images/clubs/hero/music-academy-hero-1.webp"
    title="Music Academy"
    description="Nurture your musical talent..."
    coach="Mr. David & The Music Team"
    schedule="Daily: 3:30 PM - 5:00 PM"
    imageAlt="Students playing musical instruments"
    onLearnMore={() => navigate('/club-page')}
/>
```

### 2. **ClubImageGallery Component** (`src/components/extracurricular/ClubImageGallery.jsx`)
A lightweight gallery component with lightbox functionality.

**Features:**
- Responsive grid layout (2, 3, or 4 columns)
- Purple overlay on images
- Lightbox modal for full-size viewing
- Zoom icon on hover
- Lazy loading

**Usage:**
```jsx
import ClubImageGallery from './components/extracurricular/ClubImageGallery';

<ClubImageGallery 
    images={[
        '/assets/images/clubs/gallery/music-1.webp',
        '/assets/images/clubs/gallery/music-2.webp',
        '/assets/images/clubs/gallery/music-3.webp'
    ]}
    clubName="Music Academy"
    gridColumns={3}
/>
```

### 3. **Updated ActivityBody Component**
Now includes integrated gallery section that automatically displays when gallery_images are available.

```jsx
// In activities.js
{
    id: "music-academy",
    title: "MEC Music Academy",
    description: "...",
    gallery_images: [
        '/assets/images/clubs/gallery/music-1.webp',
        '/assets/images/clubs/gallery/music-2.webp',
        '/assets/images/clubs/gallery/music-3.webp'
    ]
}
```

## Styling & CSS

### Stylesheet
**File:** `src/css/club-card.css`

**Key Features:**
- Purple theme overlays: `rgba(128, 0, 128, 0.25)` to `rgba(128, 0, 128, 0.3)`
- Smooth transitions: `.3s` to `.4s` ease
- Responsive breakpoints: desktop, tablet, mobile
- Hover effects: scale transforms + opacity changes
- Box shadows for depth

### Color Scheme
```css
Primary Purple: #8e44ad (--main-color)
Dark Purple Background: #2e132e (--bg-color)
Overlay Purple: rgba(128, 0, 128, 0.25-0.3)
Accent Purple: #8b00ff to #d946ef (gradient)
```

## Image Structure

### Folder Organization
```
/public/assets/images/clubs/
├── hero/
│   ├── swimming-hero-1.webp
│   ├── music-academy-hero-1.webp
│   ├── debate-club-hero-1.webp
│   └── ...
├── gallery/
│   ├── swimming-gallery-1.webp
│   ├── swimming-gallery-2.webp
│   ├── music-academy-gallery-1.webp
│   └── ...
└── thumbnails/
    ├── swimming-thumb-1.webp
    └── ...
```

### Naming Convention
- **Hero Images:** `{clubId}-hero-{number}.webp`
  - Example: `music-academy-hero-1.webp`
  
- **Gallery Images:** `{clubId}-gallery-{number}.webp`
  - Example: `debate-club-gallery-2.webp`
  
- **Thumbnails:** `{clubId}-thumb-{number}.webp`
  - Example: `art-club-thumb-1.webp`

## Image Configuration

### File: `src/data/clubImageConfig.js`
Centralized configuration mapping club IDs to image paths.

**Usage:**
```javascript
import { 
    getClubImages, 
    getClubHeroImage, 
    getClubGalleryImages 
} from '../data/clubImageConfig';

// Get all images for a club
const images = getClubImages('music-academy');
// Returns: { hero: '...', gallery: [...] }

// Get just the hero image
const heroImg = getClubHeroImage('music-academy');

// Get gallery images array
const gallery = getClubGalleryImages('music-academy');
```

## Performance Optimization

### 1. **Image Format**
- Use `.webp` format for optimal compression
- Fallback to `.jpg` for older browsers if needed
- Recommended resolution: 800x600px minimum for quality

### 2. **Lazy Loading**
All images include `loading="lazy"` attribute:
```jsx
<img 
    src={image} 
    alt={imageAlt}
    loading="lazy"
    className="club-card-image"
/>
```

### 3. **Responsive Sizing**
```css
.club-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Prevents distortion */
}
```

### 4. **CDN Recommendations**
For large deployments, consider:
- Cloudinary
- imgix
- AWS CloudFront

## Accessibility Features

### Alt Text
Every image includes descriptive alt text:
```jsx
<img 
    alt="Students participating in music academy playing various instruments"
    src={image}
/>
```

### ARIA Labels
For interactive elements:
```jsx
<button className="club-card-cta" aria-label="Learn more about Music Academy">
    Learn More
</button>
```

## Integration Examples

### Example 1: Activity Page Display
```jsx
// In SingleActivityPage.jsx
import { getClubGalleryImages } from '../data/clubImageConfig';

const activity = activities.find(a => a.id === activityId);
const galleryImages = getClubGalleryImages(activity.id);

// Pass to ActivityBody
<ActivityBody activity={activity} />
// ActivityBody will automatically show gallery if images exist
```

### Example 2: Activities Grid View
```jsx
import ClubCard from './components/extracurricular/ClubCard';
import { getClubHeroImage } from '../data/clubImageConfig';

export default function ClubsGrid({ activities }) {
    return (
        <div className="clubs-grid">
            {activities.map(activity => (
                <ClubCard
                    key={activity.id}
                    image={getClubHeroImage(activity.id)}
                    title={activity.title}
                    description={activity.description}
                    coach={activity.coach}
                    schedule={activity.schedule}
                    onLearnMore={() => navigate(`/activity/${activity.id}`)}
                />
            ))}
        </div>
    );
}
```

## Responsive Design Breakpoints

### Desktop (> 1024px)
- Gallery Grid: 3-4 columns
- Card Height: 280px
- Font Size: Full size

### Tablet (768px - 1024px)
- Gallery Grid: 2-3 columns
- Card Height: 240px
- Font Size: 95%

### Mobile (< 768px)
- Gallery Grid: 1-2 columns
- Card Height: 220px
- Font Size: 85-90%

## CSS Classes Reference

### Club Card Classes
- `.club-card` - Main container
- `.club-card-image-wrapper` - Image container
- `.club-card-overlay` - Purple overlay
- `.club-card-content` - Text content area
- `.club-card-title` - Club name
- `.club-card-meta` - Schedule/Coach info

### Gallery Classes
- `.club-image-gallery` - Gallery container
- `.gallery-grid` - Grid layout
- `.gallery-item` - Individual image
- `.gallery-item-overlay` - Purple overlay
- `.gallery-lightbox` - Full-screen modal

## Adding New Clubs

### Step 1: Add Image Configuration
```javascript
// In src/data/clubImageConfig.js
'new-club': {
    hero: '/assets/images/clubs/hero/new-club-hero-1.webp',
    gallery: [
        '/assets/images/clubs/gallery/new-club-gallery-1.webp',
        // ... more images
    ]
}
```

### Step 2: Update Activities
```javascript
// In src/data/activities.js
{
    id: "new-club",
    title: "New Club Name",
    image: "/assets/images/clubs/hero/new-club-hero-1.webp",
    gallery_images: getClubGalleryImages('new-club'),
    // ... other fields
}
```

### Step 3: Place Images
Upload images to `/public/assets/images/clubs/` following the naming convention.

## Browser Compatibility

- ✅ Chrome/Edge (88+)
- ✅ Firefox (85+)
- ✅ Safari (14+)
- ✅ Mobile Safari (14+)
- ✅ Chrome Mobile (88+)

## CSS Grid Support
All grid layouts use `CSS Grid` with `auto-fit` and `minmax()` for maximum responsiveness.

```css
.gallery-grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

## Troubleshooting

### Images Not Showing
1. Check image paths in `clubImageConfig.js`
2. Verify files exist in `/public/assets/images/clubs/`
3. Check browser console for 404 errors
4. Ensure filename matches exactly (case-sensitive)

### Purple Overlay Not Visible
- Check CSS has loaded: `../css/club-card.css`
- Verify overlay opacity: should be `0.25` - `0.3`
- Check z-index values in CSS

### Gallery Not Appearing
- Verify `gallery_images` array exists in activity object
- Check array is not empty
- Ensure images paths are correct

## Future Enhancements

1. **Image Lazy Loading**: Implement Intersection Observer API
2. **Progressive Image Loading**: Use `blur-up` technique
3. **Image Optimization Service**: Auto-convert and resize via API
4. **Lightbox Animation**: Add CSS-based animations
5. **Social Sharing**: Add share buttons in lightbox
6. **Image Filtering**: Category/tag filtering for galleries

## File Sizes & Performance Targets

- Hero Images: 100-150 KB
- Gallery Images: 80-120 KB
- Lightbox Load Time: <200ms
- Initial Page Load: <3s on 3G

## Notes for Designers

When preparing images:
1. Use 16:9 aspect ratio for hero images
2. Square aspect ratio (1:1) for gallery items
3. Ensure faces/subjects are centered
4. High contrast for text overlays
5. Consistent lighting and color temperature
6. At least 1920x1440px resolution for upscaling

---

**Last Updated:** April 2026  
**Component Version:** 1.0  
**CSS Version:** 1.0

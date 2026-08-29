# Quick Implementation Guide

## File Structure Created

```
src/
├── components/
│   └── extracurricular/
│       ├── ClubCard.jsx                 ← Reusable card component
│       ├── ClubImageGallery.jsx         ← Gallery component with lightbox
│       ├── ClubsListView.jsx            ← Example implementation
│       └── ActivityBody.jsx             ← Updated with gallery support
├── css/
│   └── club-card.css                    ← All styling (purple overlays, etc)
└── data/
    └── clubImageConfig.js               ← Image path configuration

public/
└── assets/
    └── images/
        └── clubs/
            ├── hero/                    ← Hero/banner images
            ├── gallery/                 ← Gallery images
            └── thumbnails/              ← Optional thumbnails
```

## 1-Minute Quick Start

### Step 1: Import CSS
```jsx
import "../css/club-card.css";
```

### Step 2: Import Components
```jsx
import ClubCard from './components/extracurricular/ClubCard';
import ClubImageGallery from './components/extracurricular/ClubImageGallery';
import { getClubHeroImage, getClubGalleryImages } from './data/clubImageConfig';
```

### Step 3: Use in Your Component
```jsx
// Display a single club card
<ClubCard
    image={getClubHeroImage('music-academy')}
    title="Music Academy"
    description="Professional music instruction..."
    coach="Mr. David"
    schedule="Daily: 3:30 PM - 5:00 PM"
    onLearnMore={() => navigate('/music')}
/>

// Display a gallery
<ClubImageGallery
    images={getClubGalleryImages('music-academy')}
    clubName="Music Academy"
    gridColumns={3}
/>
```

## Key Features

### 🎨 Purple Brand Overlays
- Automatically applied to all images
- Uses `rgba(128, 0, 128, 0.25) - 0.3)` for subtle effect
- Gradient overlay: `linear-gradient(135deg, rgba(128, 0, 128, 0.25), rgba(107, 30, 142, 0.3))`

### 📱 Responsive Design
- **Desktop:** 4 columns
- **Tablet:** 2-3 columns
- **Mobile:** 1-2 columns
All automatically via CSS Grid `auto-fit`

### ⚡ Performance
- Lazy loading: `loading="lazy"` on all images
- WebP format recommended
- Optimized CSS with zero JavaScript overhead

### ♿ Accessibility
- Descriptive alt text on all images
- ARIA labels on interactive elements
- Keyboard navigation support

## Configuration Reference

### Image Paths
```javascript
// src/data/clubImageConfig.js
export const clubImageConfig = {
    'music-academy': {
        hero: '/assets/images/clubs/hero/music-academy-hero-1.webp',
        gallery: [
            '/assets/images/clubs/gallery/music-academy-gallery-1.webp',
            '/assets/images/clubs/gallery/music-academy-gallery-2.webp',
            '/assets/images/clubs/gallery/music-academy-gallery-3.webp',
        ]
    },
    // Add more clubs...
};
```

### Helper Functions
```javascript
// Get all images for a club
getClubImages('music-academy')
// Returns: { hero: '...', gallery: [...] }

// Get just the hero image
getClubHeroImage('music-academy')

// Get gallery images
getClubGalleryImages('music-academy')
```

## CSS Classes Cheat Sheet

### Club Card
```
.club-card                  - Main card container
.club-card-image-wrapper    - Image container with overlay
.club-card-overlay          - Purple overlay element
.club-card-content          - Text content area
.club-card-title            - Club/activity name
.club-card-description      - Short description
.club-card-meta             - Coach/schedule info
.club-card-cta              - "Learn More" button
```

### Gallery
```
.club-image-gallery         - Gallery container
.gallery-header             - Title section
.gallery-grid               - Grid layout
.gallery-item               - Individual image
.gallery-item-overlay       - Purple overlay
.gallery-lightbox           - Full-screen modal
.lightbox-image             - Full-size image
```

## Color Scheme

```css
Primary Purple:     #8e44ad (--main-color)
Dark Purple:        #2e132e (--bg-color)
Overlay Light:      rgba(128, 0, 128, 0.25)
Overlay Dark:       rgba(128, 0, 128, 0.3)
Accent Gradient:    #8b00ff → #d946ef
```

## Real Usage Examples

### Example 1: Display All Clubs
```jsx
import ClubsListView from './components/extracurricular/ClubsListView';
import { activities } from './data/activities';

export default function ClubsPage() {
    return (
        <>
            <Navbar />
            <ClubsListView 
                activities={activities}
                title="Explore Our Clubs & Activities"
            />
            <Footer />
        </>
    );
}
```

### Example 2: Filter by Type
```jsx
// Show only sports activities
const sports = activities.filter(a => 
    a.link?.includes('sports')
);

// Show only clubs
const clubs = activities.filter(a => 
    a.link?.includes('clubs')
);

<ClubsListView activities={sports} title="Sports" />
<ClubsListView activities={clubs} title="Clubs" />
```

### Example 3: Single Activity Page
```jsx
// ActivityBody automatically includes gallery if image array exists
import ActivityBody from './components/extracurricular/ActivityBody';

export default function SingleActivityPage({ activityId }) {
    const activity = activities.find(a => a.id === activityId);
    
    // ActivityBody will show:
    // 1. Description & benefits
    // 2. Gallery (if gallery_images array exists)
    // 3. Signup form
    
    return <ActivityBody activity={activity} />;
}
```

## Customization

### Change Grid Columns
```jsx
// 2 columns - larger images
<ClubImageGallery images={images} clubName="Club" gridColumns={2} />

// 3 columns - balanced
<ClubImageGallery images={images} clubName="Club" gridColumns={3} />

// 4 columns - many images
<ClubImageGallery images={images} clubName="Club" gridColumns={4} />
```

### Adjust Overlay Opacity
In `club-card.css`, find:
```css
.club-card-overlay {
    background: linear-gradient(135deg, rgba(128, 0, 128, 0.25) 0%, rgba(107, 30, 142, 0.3) 100%);
}
```

Change the `0.25` and `0.3` values (0-1 scale):
- `0.1` - very subtle
- `0.25` - default (recommended)
- `0.5` - strong
- `0.8` - very strong

### Customize Hover Effects
Edit in `club-card.css`:
```css
.club-card:hover {
    transform: translateY(-5px);  /* Adjust lift distance */
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);  /* Adjust shadow */
}

.club-card-image:hover {
    transform: scale(1.05);  /* Adjust zoom: 1.03 to 1.1 */
}
```

## Adding New Clubs

### 3-Step Process

**Step 1:** Update config
```javascript
// In src/data/clubImageConfig.js
'new-club-id': {
    hero: '/assets/images/clubs/hero/new-club-hero-1.webp',
    gallery: [
        '/assets/images/clubs/gallery/new-club-gallery-1.webp',
        '/assets/images/clubs/gallery/new-club-gallery-2.webp',
    ]
}
```

**Step 2:** Add activity data
```javascript
// In src/data/activities.js
{
    id: "new-club-id",
    title: "New Club Name",
    image: "/assets/images/clubs/hero/new-club-hero-1.webp",
    description: "Club description...",
    // ... other fields
}
```

**Step 3:** Upload images
- Place hero image in: `/public/assets/images/clubs/hero/`
- Place gallery images in: `/public/assets/images/clubs/gallery/`
- Follow naming: `{clubId}-hero-1.webp`, `{clubId}-gallery-1.webp`

## Browser Compatibility

✅ Chrome 88+
✅ Firefox 85+
✅ Safari 14+
✅ Edge 88+
✅ Mobile browsers (iOS Safari 14+, Chrome Mobile 88+)

## Performance Tips

1. **Use WebP format** - Smaller file size, better quality
2. **Optimize images** - Use tools like TinyPNG or ImageOptim
3. **Set dimensions** - Specify width/height on images
4. **Lazy load** - Already enabled with `loading="lazy"`
5. **Use CDN** - Consider Cloudinary or imgix for serving

## Troubleshooting

### Images not showing?
1. ✅ Check CSS is imported: `import "../css/club-card.css"`
2. ✅ Check image paths in `clubImageConfig.js`
3. ✅ Verify files exist in `/public/assets/images/clubs/`
4. ✅ Check browser console for 404 errors

### Purple overlay not visible?
1. ✅ Verify CSS loaded correctly
2. ✅ Check z-index values
3. ✅ Try increasing opacity (change `0.25` to `0.4`)

### Gallery not appearing?
1. ✅ Ensure `gallery_images` array exists in activity object
2. ✅ Check array isn't empty
3. ✅ Verify image paths are correct

## File Location Reference

| File | Location |
|------|----------|
| Components | `src/components/extracurricular/` |
| CSS | `src/css/club-card.css` |
| Config | `src/data/clubImageConfig.js` |
| Images | `public/assets/images/clubs/` |
| Activities | `src/data/activities.js` |

---

**Version 1.0** | Last updated: April 2026

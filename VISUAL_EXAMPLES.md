# Visual Examples & Component Reference

## Component Structure Overview

┌─────────────────────────────────┐
│       Image Container           │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │     Hero Image            │  │
│  │  (with purple overlay)    │  │
│  │                           │  │
│  │  ♪ [LEARN MORE] (Hover)  │  │ ← Appears on hover
│  └───────────────────────────┘  │
│       (280px height)            │
├─────────────────────────────────┤
│                                 │
│  Music Academy                  │ ← Title (purple color #8e44ad)
│                                 │
│  Professional instruction in    │ ← Description (gray color)
│  various instruments including  │
│  piano, violin, and guitar...   │
│                                 │
├─────────────────────────────────┤
│  Coach: Mr. David & Team        │ ← Meta info
│  Schedule: Daily 3:30-5:00 PM   │
│                                 │
└─────────────────────────────────┘
(300-350px width, responsive)

**Visual Effects:**

- **Hover:** Card lifts up (-5px), shadow increases
- **Image Hover:** Image zooms (1.05x), CTA button fades in
- **CTA Button:** Purple gradient (#8b00ff → #d946ef), scales on hover

### 2. Image Gallery Component

#### Grid Layout (3 Columns)

```text
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Image 1  │  │ Image 2  │  │ Image 3  │
│ (overlay)│  │ (overlay)│  │ (overlay)│
│ 🔍       │  │ 🔍       │  │ 🔍       │
│ (hover)  │  │ (hover)  │  │ (hover)  │
└──────────┘  └──────────┘  └──────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│ Image 4  │  │ Image 5  │  │ Image 6  │
└──────────┘  └──────────┘  └──────────┘

Photo Gallery - Music Academy ↑ (header)

```

**Responsive:**

- **Desktop (1920px):** 4 columns
- **Tablet (1024px):** 3 columns
- **Mobile (768px):** 2 columns
- **Small Mobile (480px):** 1 column

#### Lightbox Modal

```text
┌─────────────────────────────────────────┐
│                                         │
│  [✕] Close button (top right)           │
│                                         │
│        Full-size image displayed        │
│        with zoom animation              │
│                                         │
│        (max 90vw x 90vh)                │
│                                         │
└─────────────────────────────────────────┘
     (Black semi-transparent background)

```

### 3. Purple Overlay Effect

```text
Original Image:
┌─────────────────┐
│ 🎵 Students     │
│    Playing      │
│    Instruments  │
└─────────────────┘

With Purple Overlay (rgba(128, 0, 128, 0.25)):
┌─────────────────┐
│ ♫ Students      │  ← Purple tint applied
│    Playing      │     (subtle, not overwhelming)
│    Instruments  │
└─────────────────┘

Overlay Gradient:
┌─────────────────┐
│ ♫  ← Light       │
│  Students       │     Linear gradient
│    Playing    → │     #800080 (0.25) to
│    Instruments  │     #6b1e8e (0.3)
│              ♫ →│
└─────────────────┘

```

## CSS Class Reference

### Club Card Classes

```text
.club-card
├── .club-card-image-wrapper
│   ├── img.club-card-image
│   ├── .club-card-overlay
│   └── .club-card-hover-content
│       └── button.club-card-cta
└── .club-card-content
    ├── h3.club-card-title
    ├── p.club-card-description
    └── .club-card-meta
        ├── .meta-item
        │   ├── .meta-label
        │   └── .meta-value
        └── .meta-item

```

### Gallery Classes

```text
.club-image-gallery
├── .gallery-header
│   └── h3
└── .gallery-grid (or .gallery-grid-2/3/4)
    ├── .gallery-item
    │   ├── img.gallery-item-image
    │   ├── .gallery-item-overlay
    │   └── .gallery-item-hover
    │       └── svg.gallery-zoom-icon
    └── ... (more items)

.gallery-lightbox (modal)
├── button.lightbox-close
└── img.lightbox-image

```

## Responsive Design Breakpoints

```text
Desktop (> 1024px)
┌───┬───┬───┬───┐  ← 4 columns
│   │   │   │   │
└───┴───┴───┴───┘

Tablet (768px - 1024px)
┌───────┬───────┬───────┐  ← 3 columns
│       │       │       │
└───────┴───────┴───────┘

Mobile (< 768px)
┌───────┬───────┐  ← 2 columns
│       │       │
└───────┴───────┘

Small Mobile (< 480px)
┌───────────────┐  ← 1 column
│               │
└───────────────┘

```

## Color Palette

```text
Primary Purple          #8e44ad (--main-color)
████████████            Used for: titles, highlights, borders

Dark Purple BG          #2e132e (--bg-color)
████████████            Used for: overlays, dark sections

Overlay Light Purple    rgba(128, 0, 128, 0.25)
████████████            Used for: subtle image overlays

Overlay Dark Purple     rgba(107, 30, 142, 0.3)
████████████            Used for: gradient overlays

Accent Gradient
████████████ (Purple to Pink)
# 8b00ff → #d946ef       Used for: buttons, CTAs

Light Gray Text         #888888
████████████            Used for: meta info, descriptions

Dark Gray Text          #666666 / #444444
████████████            Used for: descriptions, body text

White Background        #FFFFFF
████████████            Used for: card backgrounds, clean areas

Light Purple BG         #fdf8ff
████████████            Used for: section backgrounds

```

## Animation Timings

```text
Fast Animations        0.3s ease
├── Hover effects
├── Overlay fades
└── Button interactions

Medium Animations      0.35s ease
├── Image zoom

Smooth Animations      0.4s ease
├── Gallery item zoom
└── Lightbox transitions

Instant               0 delay
└── Hover state changes

```

## Real Rendered HTML Example

### Club Card HTML Structure
```html
<div class="club-card">
  <div class="club-card-image-wrapper">
    <img 
      src="/assets/images/clubs/hero/music-academy-hero-1.webp"
      alt="Students participating in music academy playing various instruments"
      class="club-card-image"
      loading="lazy"
    />
    <div class="club-card-overlay"></div>
    <!-- On hover, this appears: -->
    <div class="club-card-hover-content">
      <button class="club-card-cta">Learn More</button>
    </div>
  </div>
  
  <div class="club-card-content">
    <h3 class="club-card-title">Music Academy</h3>
    <p class="club-card-description">
      Professional instruction in various instruments...
    </p>
    <div class="club-card-meta">
      <div class="meta-item">
        <span class="meta-label">Coach:</span>
        <span class="meta-value">Mr. David & Team</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Schedule:</span>
        <span class="meta-value">Daily: 3:30 PM - 5:00 PM</span>
      </div>
    </div>
  </div>
</div>
```

### Gallery HTML Structure

```html
<div class="club-image-gallery">
  <div class="gallery-header">
    <h3>Photo Gallery - Music Academy</h3>
  </div>
  
  <div class="gallery-grid gallery-grid-3">
    <div class="gallery-item">
      <img 
        src="/assets/images/clubs/gallery/music-academy-gallery-1.webp"
        alt="Music academy activity 1"
        class="gallery-item-image"
        loading="lazy"
      />
      <div class="gallery-item-overlay"></div>
      <div class="gallery-item-hover">
        <svg class="gallery-zoom-icon">...</svg>
      </div>
    </div>
    <!-- More items... -->
  </div>
  
  <!-- Lightbox appears on click: -->
  <div class="gallery-lightbox">
    <button class="lightbox-close">✕</button>
    <img 
      src="/assets/images/clubs/gallery/music-academy-gallery-1.webp"
      alt="Full size gallery image"
      class="lightbox-image"
    />
  </div>
</div>
```

## CSS Overlay Visualization

### Before (No Overlay)

```css
.club-card-image {
    background: url('image.jpg');
    width: 100%;
    height: 100%;
}
```

Result: Clear, bright image

### After (With Purple Overlay)

```css
.club-card-overlay {
    position: absolute;
    background: linear-gradient(135deg, 
        rgba(128, 0, 128, 0.25),
        rgba(107, 30, 142, 0.3)
    );
}
```

Result: Subtle purple tint (brand consistency)

## Hover State Transitions

### Card Hover States

```text
Initial State
┌─────────────────┐
│   Image         │
│   (clear)       │
│                 │  Card shadow: 0 4px 15px
│                 │  Card position: normal
└─────────────────┘

Hover State (0.3s transition)
┌─────────────────┐
│   Image         │
│   (zoomed)      │
│   [Learn More]  │  Card shadow: 0 12px 35px
│                 │  Card position: translateY(-5px)
└─────────────────┘
```

## Responsive Typography

```text
Desktop (> 1024px)
Title:        font-size: 1.5rem
Description:  font-size: 0.95rem
Meta:         font-size: 0.9rem

Tablet (768px - 1024px)
Title:        font-size: 1.3rem
Description:  font-size: 0.9rem
Meta:         font-size: 0.85rem

Mobile (< 480px)
Title:        font-size: 1.1rem
Description:  font-size: 0.85rem
Meta:         font-size: 0.8rem
```

## Shadow Depths

```text
No Shadow (rest state)
0 0 0 rgba(0,0,0,0)

Subtle Shadow (card hover)
0 4px 15px rgba(0,0,0,0.08)

Medium Shadow (hover)
0 12px 35px rgba(0,0,0,0.15)

Deep Shadow (button hover)
0 6px 25px rgba(139,0,255,0.6)

Lightbox Shadow
0 10px 50px rgba(0,0,0,0.3)
```

## Accessibility Visual Indicators

```text
Focus State (Keyboard Navigation)
┌─────────────────┐
│   Button        │ ← Purple focus ring (from --main-color)
└─────────────────┘

Alt Text (Screen Reader)
"Students playing piano in music academy during daily session"
↓ Conveys: activity, participants, location, context

ARIA Labels
<button aria-label="Learn more about Music Academy">
  Learn More
</button>
```

## Performance Optimization Indicators

```text
Lazy Loading (Images)
<img src="..." loading="lazy" />
```

Result: Images load only when in viewport

```
CSS Optimization
.club-card {
  will-change: transform;  ← GPU acceleration
  transform: translate3d(0, -5px, 0);
}
```

Result: Smooth 60fps animations

## Example Usage Flow

```text
User Views Page
↓
[Clubs Grid Loads]
↓
┌─────────┬─────────┬─────────┐
│ Card 1  │ Card 2  │ Card 3  │
│ (lazy)  │ (lazy)  │ (lazy)  │
└─────────┴─────────┴─────────┘
↓
User Hovers Card
↓
┌──────────────┐
│ Card Zooms   │ ← Image: scale(1.05)
│ Lifts Up     │ ← Transform: translateY(-5px)
│ [CTA Shows]  │ ← Opacity: fade in 0.3s
└──────────────┘
↓
User Clicks "Learn More"
↓
[Navigate to Activity Page]
↓
Activity Page Shows:
├── Hero Banner
├── Description
├── Benefits List
├── Gallery (if exists)
│   ├── Grid Items
│   └── Lightbox on Click
└── Signup Form
```

---

**Visual Reference Version 1.0** | April 2026

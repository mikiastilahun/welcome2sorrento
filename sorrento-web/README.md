# Welcome2Sorrento - Sorrento Travel Guide Website

A modern, elegant, and highly visual travel guide website for Sorrento, Italy, and the surrounding Amalfi Coast region.

## Overview

Welcome2Sorrento is a comprehensive travel guide featuring stunning photography, intuitive navigation, and detailed information about Sorrento and nearby destinations. The website combines beautiful design with practical travel information to help visitors plan their perfect Italian getaway.

## Features

### 🎨 Design & User Experience

- **Visual-First Design**: Full-width hero images, high-quality photography throughout
- **Custom Typography**: Elegant serif (Playfair Display, Cormorant Garamond) and sans-serif (Inter) font pairings
- **Mediterranean Color Palette**: Azure blues, terracotta, warm yellows, olive greens, and natural whites
- **Smooth Animations**: Hover effects, fade-in animations, and smooth transitions
- **Fully Responsive**: Mobile-first design optimized for all screen sizes
- **Sticky Navigation**: Easy access to all sections from any page

### 📍 Main Sections

#### Homepage

- Hero section with captivating imagery and clear call-to-action
- Introduction to Sorrento
- Quick links to Eat, Stay, Do sections
- Featured destinations slider
- Testimonials section
- Newsletter signup
- Full footer with links and social media

#### Sorrento Section

**Main Hub**: Overview with navigation to subsections

- **Eat**: Restaurant guides with categories (fine dining, traditional, seafood, etc.), pricing, ratings, and detailed descriptions
- **Stay**: Accommodation options including luxury hotels, boutique B&Bs, and apartments with amenities and location info
- **Do**: Activities and attractions with categorization, duration, highlights, and practical tips

#### Surrounding Area

**Destinations Covered**:

- **Capri**: Blue Grotto, Faraglioni rocks, Villa Jovis, Gardens of Augustus
- **Amalfi Coast**: Positano, Amalfi, Ravello, and the dramatic coastal drive
- **Naples**: Historic center, Pompeii, Vesuvius, authentic pizza
- **Procida**: Colorful fishing villages, authentic island charm
- **Ischia**: Thermal spas, Aragonese Castle, beautiful beaches
- **Salerno**: Waterfront promenade, historic center, Paestum temples

Each destination includes:

- Stunning hero imagery
- Things to see and do
- Where to eat recommendations
- How to get there (transportation options, times, costs)
- Planning tips and insider advice

#### Blog

- Magazine-style layout
- Category filtering (Local Culture, Beaches, Travel Tips, Day Trips, Food & Drink)
- Featured post highlighting
- Individual blog post pages with:
  - Full article content with proper typography
  - Author information and publication date
  - Social sharing buttons
  - Related posts section

#### About Us

- Story behind Welcome2Sorrento
- What makes the service unique
- Detailed information about the WhatsApp booking service:
  - Restaurant reservations
  - Accommodation booking
  - Activity arrangements
  - Custom itinerary planning
  - Real-time support during trips
- Client testimonials
- How the service works

#### Contact

- Comprehensive contact form with service type selection
- Contact information (email, WhatsApp, location)
- Response time information
- Social media links
- FAQ section with common questions

### 🎯 Additional Features

- Privacy Policy page
- Terms of Service page
- Custom 404 error page with helpful navigation
- SEO-optimized meta tags throughout
- Accessibility considerations

## Technology Stack

- **Framework**: SvelteKit (Svelte 5 with Runes)
- **Styling**: Tailwind CSS with custom color variables
- **UI Components**: shadcn-svelte component library
- **Icons**: Lucide Svelte
- **Typography**: Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **Internationalization**: Paraglide.js

## Project Structure

```
src/
├── app.css                     # Global styles, custom fonts, animations
├── app.html                    # HTML template
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte   # Main navigation with mobile menu
│   │   ├── Footer.svelte       # Site footer
│   │   └── ui/                 # shadcn-svelte components
│   └── utils.ts                # Utility functions
└── routes/
    ├── +layout.svelte          # Root layout with nav/footer
    ├── +page.svelte            # Homepage
    ├── +error.svelte           # Custom error page
    ├── about/
    │   └── +page.svelte        # About & Services
    ├── blog/
    │   ├── +page.svelte        # Blog listing
    │   └── [id]/
    │       └── +page.svelte    # Individual blog post
    ├── contact/
    │   └── +page.svelte        # Contact form
    ├── sorrento/
    │   ├── +page.svelte        # Sorrento hub
    │   ├── eat/
    │   │   └── +page.svelte    # Restaurants guide
    │   ├── stay/
    │   │   └── +page.svelte    # Accommodation guide
    │   └── do/
    │       └── +page.svelte    # Activities guide
    ├── surrounding/
    │   ├── +page.svelte        # Surrounding area hub
    │   ├── capri/
    │   │   └── +page.svelte    # Capri guide
    │   ├── amalfi/
    │   │   └── +page.svelte    # Amalfi Coast guide
    │   ├── naples/
    │   │   └── +page.svelte    # Naples guide
    │   ├── procida/
    │   │   └── +page.svelte    # Procida guide
    │   ├── ischia/
    │   │   └── +page.svelte    # Ischia guide
    │   └── salerno/
    │       └── +page.svelte    # Salerno guide
    ├── privacy/
    │   └── +page.svelte        # Privacy policy
    └── terms/
        └── +page.svelte        # Terms of service
```

## Color Palette

The website uses a sophisticated Mediterranean-inspired color palette:

- **Azure Blue** (`--azure-blue`): Primary color for links, buttons, accents
- **Deep Blue** (`--deep-blue`): Darker variant for hover states
- **Terracotta** (`--terracotta`): Secondary accent, warm earth tones
- **Warm Yellow** (`--warm-yellow`): Highlights and special elements
- **Olive Green** (`--olive-green`): Natural accent color
- **Cream** (`--cream`): Soft background tones
- **Soft White** (`--soft-white`): Primary background
- **Charcoal** (`--charcoal`): Primary text color

## Key Design Patterns

### Animation Classes

- `.animate-fade-in-up`: Fade in with upward motion
- `.animate-fade-in`: Simple fade in
- `.hover-scale`: Image scale effect on hover
- `.gradient-overlay`: Dark gradient overlay for text readability

### Responsive Breakpoints

- Mobile: < 640px (default)
- Tablet: 640px (sm:)
- Desktop: 768px (md:), 1024px (lg:)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Content Management

Currently, the website uses static content defined in component files. For a production deployment, consider:

1. **Blog Posts**: Implement a CMS (like Sanity, Contentful) or use markdown files
2. **Restaurant/Hotel Data**: Move to a database or CMS for easier updates
3. **Images**: Use a CDN and image optimization service
4. **Contact Form**: Implement backend API endpoint for form submissions
5. **Newsletter**: Integrate with email service provider (Mailchimp, ConvertKit, etc.)

## Future Enhancements

- [ ] Interactive maps for restaurants, hotels, and attractions
- [ ] Search functionality
- [ ] Multi-language support (already has i18n setup)
- [ ] User reviews and ratings
- [ ] Real-time availability checking
- [ ] Booking integration with third-party services
- [ ] Weather information widget
- [ ] Trip planner tool
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Images should be optimized and served via CDN in production
- Consider lazy loading for images below the fold
- Implement caching strategies for API calls
- Use SvelteKit's server-side rendering capabilities

## License

This project is created for Welcome2Sorrento.

## Contact

For questions or support:

- Email: margheroba@email.com
- WhatsApp: Available for booking inquiries

---

Built with ❤️ by locals who love Sorrento

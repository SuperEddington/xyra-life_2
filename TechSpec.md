# XYRA - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| **Button** | CTAs, actions | Custom gold styling, sharp corners |
| **Sheet** | Cart drawer slide-in | Right-side panel, custom width |
| **Accordion** | PDP craftsmanship details | Custom styling, smooth animations |
| **Badge** | Cart item count | Gold background variant |
| **Separator** | Visual dividers | Light grey color |
| **ScrollArea** | Cart item list | Smooth scrolling |

### Custom Components to Build

| Component | Purpose | Location |
|-----------|---------|----------|
| **Navbar** | Global navigation with cart | `app/components/Navbar.tsx` |
| **CartDrawer** | Slide-in cart panel | `app/components/CartDrawer.tsx` |
| **CartItem** | Individual cart item row | `app/components/CartItem.tsx` |
| **ProductCard** | Shop grid product display | `app/components/ProductCard.tsx` |
| **ProductGallery** | PDP image gallery | `app/components/ProductGallery.tsx` |
| **AddToCartButton** | Functional add to cart | `app/components/AddToCartButton.tsx` |
| **Footer** | Global footer | `app/components/Footer.tsx` |
| **ScrollReveal** | Animation wrapper | `app/components/ScrollReveal.tsx` |

### Custom Hooks

| Hook | Purpose | Location |
|------|---------|----------|
| **useCart** | Cart state management | `app/hooks/useCart.tsx` |
| **useScrollPosition** | Track scroll for navbar | `app/hooks/useScrollPosition.ts` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Page load fade-in** | Framer Motion | AnimatePresence on layout mount | Low |
| **Scroll reveal (sections)** | Framer Motion | whileInView with viewport trigger | Medium |
| **Staggered reveals** | Framer Motion | staggerChildren in parent variants | Medium |
| **Navbar scroll effect** | CSS + Hook | Conditional classes based on scroll | Low |
| **Cart drawer slide-in** | Framer Motion | AnimatePresence + x transform | Medium |
| **Backdrop fade** | Framer Motion | opacity animation | Low |
| **Cart item add** | Framer Motion | layoutId + initial/animate | Medium |
| **Button hover lift** | CSS | transform + shadow transition | Low |
| **Link color transition** | CSS | color transition 300ms | Low |
| **Image hover scale** | CSS | transform scale 1.02 | Low |
| **Accordion expand** | Framer Motion | AnimatePresence + height auto | Medium |
| **Cart badge pulse** | Framer Motion | scale keyframes animation | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration with declarative API
- Excellent for component mount/unmount animations (AnimatePresence)
- Built-in scroll-triggered animations (whileInView)
- Layout animations for cart items
- Gesture support for future enhancements

**Use for:**
- Page transitions
- Scroll reveals
- Cart drawer
- Cart item animations
- Accordion transitions

### Secondary: CSS Transitions
**Rationale:**
- Lightweight for simple hover states
- Better performance for micro-interactions
- No JavaScript overhead

**Use for:**
- Button hovers
- Link color changes
- Image scale on hover
- Navbar background transition

---

## Project File Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── AddToCartButton.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/
│   │   ├── useCart.tsx
│   │   └── useScrollPosition.ts
│   ├── data/
│   │   └── products.ts
│   ├── types/
│   │   └── index.ts
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with providers
│   ├── globals.css
│   ├── shop/
│   │   └── page.tsx               # Shop page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx           # Dynamic PDP
│   └── about/
│       └── page.tsx               # About page
├── components/
│   └── ui/                        # shadcn components
├── public/
│   └── images/                    # Product images
├── lib/
│   └── utils.ts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Dependencies

### Core (Auto-installed with shadcn)
- next
- react
- react-dom
- typescript
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation
```bash
npm install framer-motion
```

### Fonts
- Cormorant Garamond (Google Fonts)
- Inter (Google Fonts)

---

## State Management Architecture

### Cart Context Pattern

```typescript
// Context provides:
- items: CartItem[]
- isOpen: boolean
- openCart(): void
- closeCart(): void
- addItem(product: Product): void
- removeItem(productId: string): void
- updateQuantity(productId: string, quantity: number): void
- totalItems: number
- subtotal: number
```

### Implementation Strategy
- React Context API for global cart state
- Local storage persistence (optional enhancement)
- Cart drawer controlled by context
- Navbar reads cart count from context

---

## Routing Structure

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, Philosophy, Products, Gifting |
| `/shop` | Shop | Full product grid |
| `/product/[id]` | Product Detail | Dynamic PDP for each product |
| `/about` | About | Brand story and philosophy |

### Dynamic Route Generation
- Products defined in `app/data/products.ts`
- Static params generated at build time
- Fallback: 404 for invalid product IDs

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked layouts |
| Tablet | 640-1024px | 2-column grids, adjusted spacing |
| Desktop | > 1024px | Full layouts, 3-column grids |

### Key Responsive Behaviors
- Navbar: Hamburger menu on mobile (optional)
- Product grid: 3 cols → 2 cols → 1 col
- PDP: Side-by-side → Stacked
- Cart drawer: Full width on mobile

---

## Performance Considerations

1. **Images**: Next.js Image component with optimization
2. **Animations**: GPU-accelerated (transform, opacity only)
3. **Fonts**: Preload critical fonts
4. **Code Splitting**: Dynamic imports for heavy components
5. **Reduced Motion**: Respect prefers-reduced-motion

---

## Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // For static export
  },
}
module.exports = nextConfig
```

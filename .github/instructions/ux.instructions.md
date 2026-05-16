---
description: You are helping improve the UX of a personal portfolio website based on a professional audit.Apply the changes below precisely and consistently across all files you touch.
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->


# Copilot Instructions — Portfolio UX Improvements (Manoj Verma)

You are helping improve the UX of a personal portfolio website based on a professional audit.
Apply the changes below precisely and consistently across all files you touch.

---

## 1. Remove the orphaned "Close" button

**Problem:** A stray `Close` button appears in the hero section with no clear dismiss target.

**Action:**
- Search for any button, anchor, or element with text content `Close` or class/id containing `close` in the hero section.
- Remove it entirely unless it is wired to a modal or lightbox with a corresponding open trigger.
- If a modal exists, ensure the Close button is inside the modal overlay, not the hero layout.

```html
<!-- REMOVE this if it appears floating in the hero -->
<button class="close-btn">Close</button>
<!-- or any variant: <a>Close</a>, <span class="close">Close</span> -->
```

---

## 2. Fix CTA button hierarchy in the hero

**Problem:** "Get in Touch" and "View Work" share equal visual weight — no clear primary action.

**Action:**
- Make `View Work` the **primary button** (filled, dark background).
- Make `Get in Touch` the **secondary button** (outlined, no fill).
- Place primary button first (left) in the DOM and visually.

```html
<!-- CORRECT order and styling -->
<div class="hero-cta">
  <a href="#projects" class="btn btn-primary">View Work</a>
  <a href="#connect" class="btn btn-secondary">Get in Touch</a>
</div>
```

```css
.btn-primary {
  background-color: #0f172a;
  color: #ffffff;
  border: 2px solid #0f172a;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary {
  background-color: transparent;
  color: #0f172a;
  border: 2px solid #0f172a;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary:hover {
  background-color: #0f172a;
  color: #ffffff;
}
```

---

## 3. Rebalance hero image-to-text ratio

**Problem:** Profile photo takes ~45% of the hero width, compressing the intro text.

**Action:**
- Set the hero to a two-column grid: image `35%`, text `65%`.
- Ensure text column has at least `48px` of left padding on the text side.

```css
.hero {
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 0 48px;
  align-items: center;
  min-height: 520px;
  padding: 60px 80px;
}

.hero-image {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  object-fit: cover;
}

.hero-content {
  padding-left: 0;
}
```

---

## 4. Add a value proposition sentence in the hero

**Problem:** The hero shows name and title but no hook explaining the unique value delivered.

**Action:**
- Add a `<p class="hero-tagline">` element immediately after the subtitle (role line).
- Place it before the expertise tags and before the CTA buttons.

```html
<!-- Add this between the role subtitle and the expertise tags -->
<p class="hero-tagline">
  I help enterprises ship resilient cloud systems and AI-powered workflows —
  from architecture to production.
</p>
```

```css
.hero-tagline {
  font-size: 17px;
  color: #4b5563;
  line-height: 1.65;
  margin: 12px 0 24px;
  max-width: 520px;
}
```

---

## 5. Upgrade expertise tags with colour coding

**Problem:** Pill tags are flat, low-contrast, and feel decorative.

**Action:**
- Assign a distinct colour per domain category using the mapping below.
- Replace plain bordered pills with colour-tinted pills.

```html
<!-- Replace existing flat tags with colour-coded versions -->
<div class="expertise-tags">
  <span class="tag tag-engineering">Full Stack Engineer</span>
  <span class="tag tag-architecture">Solution Architect</span>
  <span class="tag tag-cloud">Cloud Infrastructure Expert</span>
  <span class="tag tag-ai">AI Systems Pioneer</span>
</div>
```

```css
.tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 20px;
  margin: 4px 4px 4px 0;
}

.tag-engineering { background: #e0f2fe; color: #0369a1; }
.tag-architecture { background: #f3e8ff; color: #7e22ce; }
.tag-cloud        { background: #dcfce7; color: #15803d; }
.tag-ai           { background: #fff7ed; color: #c2410c; }
```

---

## 6. Add social proof strip below hero CTAs

**Problem:** No trust signals exist near the fold — no logos, stats, or testimonial.

**Action:**
- Add a `<div class="social-proof">` block below the CTA buttons inside the hero content area.
- Include years of experience, projects delivered, and employer/client name.

```html
<!-- Add after .hero-cta -->
<div class="social-proof">
  <div class="proof-item">
    <span class="proof-number">12+</span>
    <span class="proof-label">Years experience</span>
  </div>
  <div class="proof-item">
    <span class="proof-number">40+</span>
    <span class="proof-label">Projects delivered</span>
  </div>
  <div class="proof-item">
    <span class="proof-number">Lead</span>
    <span class="proof-label">@ Singapore Airlines</span>
  </div>
</div>
```

```css
.social-proof {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.proof-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.proof-number {
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
  line-height: 1;
}

.proof-label {
  font-size: 12px;
  color: #6b7280;
}
```

---

## 7. Differentiate the "What I Offer" cards

**Problem:** All three service cards look identical — no visual cue signals the lead service.

**Action:**
- Mark the first card (GenAI & Multi-Agent Systems) as featured with a distinct border and header accent.
- Add a short outcome line to each card footer.

```html
<!-- Example card structure — apply .card-featured to the primary service -->
<div class="offer-card card-featured">
  <div class="card-icon">🤖</div>
  <h3>GenAI & Multi-Agent Systems</h3>
  <ul>
    <li>Design and orchestrate complex multi-agent AI ecosystems</li>
    <li>Implement advanced prompt frameworks with security controls</li>
    <li>Enterprise-grade LLM integration</li>
  </ul>
  <p class="card-outcome">→ AI workflows your team can ship and trust</p>
</div>
```

```css
.offer-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  transition: box-shadow 0.2s;
}

.offer-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.card-featured {
  border: 2px solid #0f172a;
  position: relative;
}

.card-featured::before {
  content: "Core service";
  position: absolute;
  top: -1px;
  left: 20px;
  background: #0f172a;
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 0 0 6px 6px;
}

.card-outcome {
  font-size: 13px;
  color: #059669;
  font-weight: 500;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}
```

---

## 8. Improve navigation — active state and structure

**Problem:** Nav has only 3 items, no active page indicator, and Resume lives outside the nav flow.

**Action:**
- Add scroll-based active class to nav links via JavaScript.
- Move Resume into the nav as a styled pill button.
- Add an "About" section link if a corresponding section exists.

```html
<nav class="site-nav">
  <div class="nav-logo">MV.</div>
  <ul class="nav-links">
    <li><a href="#intro"     class="nav-link">Intro</a></li>
    <li><a href="#projects"  class="nav-link">Projects</a></li>
    <li><a href="#about"     class="nav-link">About</a></li>
    <li><a href="#connect"   class="nav-link">Connect</a></li>
  </ul>
  <a href="/resume.pdf" class="nav-resume" target="_blank" rel="noopener">Resume ↗</a>
</nav>
```

```css
.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s, color 0.2s;
}

.nav-link.active,
.nav-link:hover {
  color: #ffffff;
  border-bottom-color: #ffffff;
}

.nav-resume {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  transition: background 0.2s;
}

.nav-resume:hover {
  background: rgba(255,255,255,0.1);
}
```

```javascript
// Add to main JS — scroll spy for active nav state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => observer.observe(s));
```

---

## 9. Soften the nav-to-body colour transition

**Problem:** Hard jump from navy `#0d1b2a` nav to pure white `#ffffff` body feels jarring.

**Action:**
- Change the body/page background from pure white to a warm off-white.
- Optionally add a subtle gradient transition zone at the top of the hero.

```css
body {
  background-color: #f9f9f7; /* warm off-white instead of #ffffff */
  color: #1a1a1a;
}

.hero {
  background: linear-gradient(180deg, #f0f2f5 0%, #f9f9f7 120px);
}
```

---

## 10. Add scroll-in animations for cards and sections

**Problem:** The page is entirely static — no motion cues for quality and interactivity.

**Action:**
- Use `IntersectionObserver` to add a `visible` class on scroll entry.
- Apply CSS fade-up animation (under 300ms, respects reduced motion).

```css
@media (prefers-reduced-motion: no-preference) {
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

```javascript
// Add class="animate-on-scroll" to: .offer-card, section headings, project cards
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedEls.forEach(el => fadeObserver.observe(el));
```

Add `class="animate-on-scroll"` to each `.offer-card`, `.project-card`, and `section > h2`.

---

## Responsive / mobile rules (apply throughout)

```css
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    text-align: center;
  }

  .hero-image {
    max-width: 240px;
    margin: 0 auto 24px;
  }

  .hero-tagline {
    font-size: 15px;
  }

  .hero-cta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-proof {
    justify-content: center;
    gap: 24px;
  }

  .expertise-tags {
    justify-content: center;
  }
}
```

---

## Summary checklist for Copilot

| # | Change | Files to touch |
|---|--------|---------------|
| 1 | Remove orphaned Close button | Hero component / `index.html` |
| 2 | Fix CTA hierarchy (View Work = primary) | Hero component, `styles.css` |
| 3 | Hero grid: 35/65 image/text split | Hero component, `styles.css` |
| 4 | Add value proposition tagline | Hero component |
| 5 | Colour-coded expertise tags | Hero component, `styles.css` |
| 6 | Social proof strip (stats) | Hero component, `styles.css` |
| 7 | Featured offer card + outcome lines | Offers component, `styles.css` |
| 8 | Nav active state + Resume inside nav | Nav component, `main.js` |
| 9 | Off-white body background | `styles.css` / global |
| 10 | Scroll-in fade animations | `main.js`, `styles.css`, HTML classes |
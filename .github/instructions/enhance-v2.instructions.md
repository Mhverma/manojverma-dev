# Copilot Instructions — MV Portfolio Improvements

This file contains structured instructions for GitHub Copilot to implement
design and content improvements to the Manoj Verma portfolio site.

---

## 1. Logo / Brand Mark

**Goal:** Upgrade the plain "MV." text into a styled monogram that feels intentional.

- Keep the text "MV." — do NOT replace it with a full wordmark or image logo
- Wrap it in a styled component (e.g. `<Logo />`)
- Apply a subtle accent: color the dot (`.`) with the site's primary accent color (e.g. a warm white or brand blue)
- Optionally add a thin border or underline treatment to make it feel like a designed mark
- Font should be bold, slightly tracked (letter-spacing), and slightly larger than nav links

```jsx
// Example: Logo component
export const Logo = () => (
  <span className="logo-mark">
    MV<span className="logo-dot">.</span>
  </span>
);
```

```css
.logo-mark {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  color: #ffffff;
}
.logo-dot {
  color: #4f8ef7; /* replace with your accent color variable */
}
```

---

## 2. Page Title & SEO Meta Tags

**Goal:** Improve discoverability on Google and look professional in browser tabs.

- Change `<title>` from `"MV Portfolio"` to:
  ```
  Manoj Verma | Full Stack Engineer & Solution Architect
  ```
- Add or update these meta tags in `<head>`:

```html
<title>Manoj Verma | Full Stack Engineer & Solution Architect</title>
<meta name="description" content="Manoj Verma — Full Stack Engineer and Solution Architect at Singapore Airlines. Building resilient cloud systems and AI-powered workflows." />
<meta name="author" content="Manoj Verma" />
<meta property="og:title" content="Manoj Verma | Full Stack Engineer & Solution Architect" />
<meta property="og:description" content="Building resilient cloud systems and AI-powered workflows — from architecture to production." />
<meta property="og:url" content="https://manojverma-dev.vercel.app/" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 3. Hero Section — Tighten Spacing

**Goal:** Reduce the loose vertical gap between hero text elements on the right column.

- Reduce `gap` or `margin-bottom` between:
  - Name (`h1`) → Role (`h2`): reduce to `0.25rem`
  - Role → Current Company: reduce to `0.4rem`
  - Company → Bio paragraph: reduce to `0.75rem`
  - Bio → Core Expertise label: reduce to `1rem`
  - Expertise tags → CTA buttons: keep at `1.5rem`

```css
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 0; /* override any global gap */
}
.hero-content h1 { margin-bottom: 0.25rem; }
.hero-content .role { margin-bottom: 0.4rem; }
.hero-content .company { margin-bottom: 0.75rem; }
.hero-content .bio { margin-bottom: 1rem; }
.hero-content .expertise-tags { margin-bottom: 1.5rem; }
```

---

## 4. CTA Buttons — Fix Visual Hierarchy

**Goal:** Make "View Work" clearly the secondary action and "Get in Touch" the primary.

- **"Get in Touch"** → Primary button: filled background (white or accent color), dark text
- **"View Work"** → Secondary button: outlined style, white border, white text

```css
.btn-primary {
  background-color: #ffffff;
  color: #0a0a0a;
  border: 2px solid #ffffff;
  font-weight: 700;
}
.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-weight: 600;
}
.btn-primary:hover {
  background-color: #e5e5e5;
}
.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
```

---

## 5. Core Expertise Tags — Rename & Fix Alignment

**Goal:** Make tags sound professional, not self-promotional. Fix inconsistent wrapping.

### Rename tags:
| Current | Replace With |
|---|---|
| `AI Systems Pioneer` | `AI/ML Integration` |
| `Full Stack Engineer` | `Full Stack Development` |
| `Solution Architect` | `Solution Architecture` |
| `Cloud Infrastructure Expert` | `Cloud Infrastructure` |

### Fix alignment:
- Wrap tags in a flex container with `flex-wrap: wrap` and consistent `gap`
- Do NOT force them to be centered — left-align is fine and consistent with the rest of the content

```css
.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: flex-start;
}
.tag {
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.25);
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}
```

---

## 6. Navigation — Add "Experience" Tab

**Goal:** Give visitors a clearer site map and showcase career depth.

- Add a new nav item: **"Experience"** between "Intro" and "Projects"
- Create a new section/page `#experience` or `/experience` with:
  - Timeline of roles (current: Lead Engineer @ Singapore Airlines)
  - Each entry: Company, Role, Dates, 2–3 bullet point achievements
  - Optional: tech stack badges per role

```jsx
// Nav update
const navItems = ["Intro", "Experience", "Projects", "Connect"];
```

---

## 7. Add Tech Stack / Skills Section

**Goal:** Visually communicate technical depth for recruiters and clients.

- Add a new section below the hero titled **"Tech Stack"** or **"What I Work With"**
- Display logos/icons in a horizontal scrolling row or grid for:
  - Frontend: React, Next.js, TypeScript
  - Backend: Node.js, Python, Java
  - Cloud: AWS, GCP, Azure
  - Other: Docker, Kubernetes, Terraform, PostgreSQL

```jsx
// Suggested component structure
<section id="tech-stack">
  <h3>What I Work With</h3>
  <div className="stack-grid">
    {techItems.map(({ name, icon }) => (
      <div className="stack-item" key={name}>
        <img src={icon} alt={name} />
        <span>{name}</span>
      </div>
    ))}
  </div>
</section>
```

Use [devicons](https://devicons.github.io/devicon/) or [SimpleIcons](https://simpleicons.org/) for tech logos.

---

## 8. Add Social Proof / Metrics to Hero or About

**Goal:** Add credibility with concrete numbers.

- Add 3–4 stat cards below the bio or in a dedicated strip, e.g.:
  - `10+ Years Experience`
  - `50+ Enterprise Projects`
  - `3 Airlines & Aviation Clients`
  - `15+ Cloud Architectures Delivered`

```jsx
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3", label: "Aviation Clients" },
];

<div className="stats-row">
  {stats.map(s => (
    <div className="stat-card" key={s.label}>
      <span className="stat-value">{s.value}</span>
      <span className="stat-label">{s.label}</span>
    </div>
  ))}
</div>
```

---

## 9. Resume Button — Minor Polish

**Goal:** Make the Resume CTA in the nav feel more premium.

- Add a subtle hover state: slight glow or border-color shift
- Ensure the `↗` arrow is consistent with the font (use an actual icon or `→` if the current one looks misaligned)
- On mobile, consider collapsing it into the hamburger menu or keeping it as an icon-only button

---

## Priority Order for Implementation

1. ✅ SEO meta tags (5 min — highest ROI)
2. ✅ Rename expertise tags (2 min)
3. ✅ Logo dot accent (10 min)
4. ✅ CTA button hierarchy fix (15 min)
5. ✅ Hero spacing tightening (15 min)
6. ✅ Expertise tag alignment (10 min)
7. 🔲 Tech Stack section (1–2 hrs)
8. 🔲 Experience/Timeline section (2–3 hrs)
9. 🔲 Stats/metrics row (30 min)
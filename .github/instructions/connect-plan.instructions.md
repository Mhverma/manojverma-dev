# Connect Section — Corrected Implementation Plan

> OVERRIDE the previous connect-section-implementation.md.
> The previous implementation produced incorrect layout. Apply this file instead.

---

## What went wrong (do not repeat these mistakes)

| Issue | Root cause | Fix |
|---|---|---|
| Headline too small, left-aligned only | Missing `width: 100%` and font size too conservative | Use `clamp(72px, 12vw, 140px)` and full-width block |
| Socials floating far right | Flexbox `justify-content: space-between` pushed them apart | Change to `align-items: flex-start; gap: 48px` with no space-between |
| Black dot orphaned below headline | Dot placed as a sibling block element | Move dot inline at end of GREAT. span |
| Dead right-side whitespace | Connect row only used left portion | Make headline `width: 100%` and row `max-width: 600px` |

---

## Correct HTML structure

Replace the entire connect section with exactly this:

```html
<section id="connect" class="connect-section">

  <p class="connect-label">Get in touch</p>

  <h2 class="connect-headline">
    <span class="headline-solid">LET'S BUILD<br>SOMETHING</span>
    <span class="headline-ghost">GREAT.<span class="headline-dot" aria-hidden="true">●</span></span>
  </h2>

  <div class="connect-row">

    <div class="connect-email">
      <a href="mailto:manojkumarhverma@gmail.com" class="email-cta">
        Send me an email
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <p class="email-address">manojkumarhverma@gmail.com</p>
    </div>

    <div class="connect-socials">
      <p class="socials-label">Socials</p>
      <div class="socials-list">
        <a href="https://linkedin.com/in/YOUR_HANDLE" class="social-link"
           target="_blank" rel="noopener">
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/YOUR_HANDLE" class="social-link"
           target="_blank" rel="noopener">
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>
        <a href="https://twitter.com/YOUR_HANDLE" class="social-link"
           target="_blank" rel="noopener">
          <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter / X
        </a>
      </div>
    </div>

  </div>

</section>
```

---

## Correct CSS

Remove all previous `.connect-*` styles and replace with exactly this:

```css
/* ─── Section ─── */
.connect-section {
  padding: 72px 64px 96px;
  background-color: #f5f4f0;        /* matches the off-white body */
  overflow: hidden;
}

/* ─── Label ─── */
.connect-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 16px;
}

/* ─── Headline — CRITICAL: must span full page width ─── */
.connect-headline {
  font-size: clamp(72px, 12vw, 140px);  /* fluid — fills the viewport */
  font-weight: 900;
  font-style: italic;
  line-height: 1.0;
  letter-spacing: -0.025em;
  margin: 0 0 56px;
  width: 100%;                          /* full width — do not constrain */
  max-width: none;                      /* override any parent max-width */
}

.headline-solid {
  display: block;
  color: #0d1b2a;
}

.headline-ghost {
  display: block;
  color: transparent;
  -webkit-text-stroke: 2px #b0b8c8;
  text-stroke: 2px #b0b8c8;
  position: relative;
}

/* ─── Dot — inline inside GREAT., not a separate element ─── */
.headline-dot {
  color: #0d1b2a;
  -webkit-text-stroke: 0;              /* dot is solid, not outline */
  font-size: 0.45em;
  vertical-align: middle;
  margin-left: 4px;
  display: inline;                     /* inline — NOT block or flex */
}

/* ─── Contact row: email LEFT, socials immediately RIGHT ─── */
.connect-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;        /* both groups left-anchored */
  gap: 80px;                          /* space between email and socials */
  flex-wrap: wrap;
}

/* ─── Email block ─── */
.connect-email {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.email-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #0d1b2a;
  text-decoration: none;
  border-bottom: 1.5px solid #0d1b2a;
  padding-bottom: 3px;
  transition: opacity 0.2s ease;
  width: fit-content;
}

.email-cta:hover { opacity: 0.5; }

.email-address {
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
  letter-spacing: 0.01em;
}

/* ─── Socials block ─── */
.connect-socials {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.socials-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 12px;
}

.socials-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0d1b2a;
  text-decoration: none;
  transition: opacity 0.2s ease;
  width: fit-content;
}

.social-link:hover { opacity: 0.45; }

.social-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ─── Mobile ─── */
@media (max-width: 768px) {
  .connect-section {
    padding: 56px 24px 72px;
  }

  .connect-headline {
    font-size: clamp(52px, 14vw, 80px);
    margin-bottom: 40px;
  }

  .connect-row {
    gap: 40px;
  }

  .socials-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 24px;
  }
}
```

---

## Key rules Copilot must follow

```
// COPILOT: When editing .connect-headline —
// 1. NEVER add max-width to .connect-headline
// 2. NEVER add width less than 100% to .connect-headline
// 3. font-size MUST use clamp() — no fixed px values
// 4. .headline-dot MUST be display: inline inside .headline-ghost span
// 5. .connect-row MUST use justify-content: flex-start (NOT space-between)
// 6. socials column MUST be a sibling of email column inside .connect-row
//    (NOT positioned absolute, NOT float: right, NOT margin-left: auto)
```

---

## Visual target

The correct output should look like this:

```
GET IN TOUCH

LET'S BUILD
SOMETHING
GREAT.●

Send me an email ↗      SOCIALS
manojkumarhverma@...    LinkedIn
                        GitHub
                        Twitter / X

─────────────────────────────────────────
© 2026 MANOJ KUMAR H. VERMA.    AVAILABLE FOR INNOVATIVE PROJECTS
```

- Headline spans ~70% of viewport width
- Email and socials sit side by side, both left-anchored
- No large empty space on the right side of the page
- Dot (●) appears inline at the end of GREAT., not below it

---

## Checklist

- [ ] Headline fills at least 60% of the viewport width at 1440px
- [ ] Ghost "GREAT." has outline stroke, solid black dot inline at end
- [ ] Email CTA and socials appear side by side (not opposite ends of screen)
- [ ] No large empty white region on the right half of the page
- [ ] Socials list is vertically stacked (column), not horizontal
- [ ] Page tested at 1440px, 1024px, and 375px widths
- [ ] `justify-content: space-between` does NOT appear in `.connect-row`
- [ ] No `position: absolute` on socials
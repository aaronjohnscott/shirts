# Decipher Shirts — Landing (Under Construction)

A slick, “under construction” teaser page for **Decipher Shirts** with a glitchy hero, countdown, email capture (mailto), and a teaser grid using Unsplash imagery.

## Quick start

1. Download the ZIP from the link below and extract it.
2. Open `index.html` in a browser to preview locally.
3. Deploy to GitHub Pages:
   - Create a new repo (e.g., `decipher-shirts-landing`).
   - Add/commit the three files: `index.html`, `styles.css`, `script.js` (and this `README.md` if you like).
   - Push to GitHub.
   - In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder. Save.
   - Wait ~1 minute; your site will appear at `https://<your-username>.github.io/decipher-shirts-landing/`.

## Change the launch date

In `index.html`, near the bottom, update:

```html
<script>
  window.__LAUNCH_TS__ = new Date("2025-09-15T17:00:00-07:00").getTime();
</script>
```

Use your own date/time in ISO format.

## Swap photos

All photos are referenced with `images.unsplash.com` URLs. Replace any `src` or the **hero** background in `styles.css`:

```css
.bg.media-bg{
  background:
    linear-gradient(120deg, rgba(125,92,255,.35), rgba(0,255,213,.25)),
    url('<YOUR-UNSPLASH-URL>') center/cover no-repeat fixed;
}
```

Unsplash allows free use of photos under its license (crediting the photographer is appreciated).

## Email capture (simple)

Currently the “Notify Me” button opens a `mailto:` to **deciphershirts@gmail.com**. For a real list, connect to a service like Mailchimp, ConvertKit, Beehiiv, or a lightweight Google Form. If you want that wiring, tell me which service and I’ll hook it up.

## Customize brand

- Primary colors are `--brand` and `--brand-2` in `styles.css`.
- The logo is an inline SVG in the header; tweak the shapes/fills as you like.
- Fonts: **Bebas Neue** for headings and **Inter** for body text (loaded via Google Fonts).

## Files

- `index.html` — structure and content.
- `styles.css` — visuals, animations, and layout.
- `script.js` — countdown, scroll reveals, copy-to-clipboard, and parallax.
- `README.md` — these notes.

Enjoy!

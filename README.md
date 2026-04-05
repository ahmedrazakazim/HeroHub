<div align="center">

# ⚡ HeroHub

### *Your ultimate superhero social media experience*

![HeroHub](assets/images/title2.png)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 🦸 What is HeroHub?

**HeroHub** is a stylized superhero social media concept — a fan-made Instagram-style profile hub dedicated to your favourite DC and Marvel heroes. Browse iconic character profiles, explore their posts, watch cinematic banner videos, and experience smooth animated page transitions between heroes.

---

## 🌟 Featured Heroes

| Hero | Handle | Universe |
|------|--------|----------|
| 🦇 **Batman** | @iambatman | DC |
| 🦸 **Superman** | @TheManOfSteel | DC |
| 🩸 **Deadpool** | @NotDeadYetButClose | Marvel |
| 🕷️ **Spider-Man** | @FriendlyNeighborhoodGram | Marvel |
| 🔴 **Iron Man** | @StarkIndustriesCEO | Marvel |

---

## ✨ Features

- 🎬 **Cinematic splash screen** with smooth fade-in on first load
- ⚡ **Animated page transitions** — hero logo zooms in when you click a profile
- 🌙 **Dark mode toggle** — persistent across sessions via `localStorage`
- 📱 **Fully responsive** — works on desktop, tablet, and mobile
- 🔙 **Back button** on every hero page for clean navigation
- 🛡️ **BFCache fix** — no phantom overlay when using browser back/forward
- 🎥 **Looping banner videos** unique to each hero
- 🖼️ **Post grid** with view count overlays and play icons
- 🔢 **Follower / following stats** per character

---

## 📁 Project Structure

```
HeroHub/
├── index.html              # Main profile hub (home page)
├── batman.html             # Batman profile page
├── superman.html           # Superman profile page
├── deadpool.html           # Deadpool profile page
├── spiderman.html          # Spider-Man profile page
├── ironman.html            # Iron Man profile page
└── assets/
    ├── css/                # Stylesheets (profile.css, batman.css, ...)
    ├── js/                 # Scripts (profils.js, batman.js, ...)
    ├── images/             # Profile pics, logos, post images
    └── videos/             # Hero banner videos
```

---

## 🚀 Getting Started

No build step needed — it's pure HTML, CSS, and JavaScript.

**Option 1 — Open directly:**
```
Open index.html in any modern browser
```

**Option 2 — Serve locally (recommended for video/asset loading):**
```bash
npx serve .
# Then visit http://localhost:3000
```

---

## 🎨 Design Highlights

- Custom **Tilt Neon** + **Oswald** + **Red Hat Text** typography via Google Fonts
- Per-hero **themed colour palettes** in CSS
- `opacity` based overlay transitions (no height-collapse flicker)
- Overlay `pointer-events: none` prevents click-blocking during animations
- `100%` width overlays (not `100vw`) to avoid scrollbar sub-pixel shift

---

## 📄 License

© 2026 HeroHub. All rights reserved.

*Fan-made project. All superhero characters, names, and likenesses belong to their respective owners (DC Comics / Marvel Entertainment).*

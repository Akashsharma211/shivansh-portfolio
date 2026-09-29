# Shivansh — Personal Portfolio

A modern, responsive personal portfolio website for **Shivansh**, a B.Tech Information Technology student at **University School of Information, Communication & Technology (USICT), Delhi**.

## ✨ Key Features

- **Futuristic & Clean Aesthetic**: Dark charcoal background (`#06070a`), electric blue and violet accents, glassmorphic cards, glowing borders, and subtle cybernetic ambient constellations.
- **Hero Section**:
  - Interactive 3D Gyroscope Tech Orb with parallax tilt response and monogram core.
  - Smooth CTAs linking directly to the About and Contact sections.
  - Glowing availability badge: *"Open to learning & opportunities"*.
- **About Me**:
  - Dual-column responsive layout with custom luxury monogram profile card.
  - Three highlight cards: *Technology Enthusiast*, *Team Player*, *Always Learning*.
- **Education Section**:
  - Timeline card highlighting B.Tech in Information Technology at USICT Delhi.
  - Zero fabricated grades or achievements.
- **Skills & Strengths**:
  - Categorized into *Personal Skills*, *Technical Skills*, and *Activities*.
  - Smooth hover elevation and border glows.
- **What I Can Contribute**:
  - 4 distinct pillar cards (*Teamwork*, *Ideas & Creativity*, *Learning*, *Responsibility*).
- **Things That Excite Me**:
  - Interactive floating pill badges for interests and passions.
- **Where I Want to Grow**:
  - Vertical roadmap with numbered milestones detailing student growth objectives.
- **Let's Connect (Contact)**:
  - Clickable phone link (`tel:9868730552`).
  - Clickable mailto link (`mailto:shivansh8851514064@gmail.com`).
  - Instant one-click **Copy Email** button with clipboard feedback.
  - Clean contact cards and configurable social handles.
- **Accessibility & UX**:
  - Smooth scrolling and active section indicator in navbar.
  - Mobile responsive hamburger menu drawer.
  - Desktop subtle cursor follower glow that respects `prefers-reduced-motion` and touch devices.
  - Back-to-top button in footer.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

---

## 🎨 Customization

- **Profile Picture**: If you would like to swap the monogram "S" with a real photograph later, place your photo in `public/` and update [`src/components/About.jsx`](file:///c:/Users/ADMIN/Downloads/shivansh%20portfolio/src/components/About.jsx).
- **Social Links**: Social icons are kept hidden until provided. You can add your GitHub, LinkedIn, or Twitter links inside [`src/components/Contact.jsx`](file:///c:/Users/ADMIN/Downloads/shivansh%20portfolio/src/components/Contact.jsx) in the `socialLinks` array.

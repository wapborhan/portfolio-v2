# Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-brightgreen?style=flat-square&logo=github)](https://wapborhan.github.io/portfolio-v2/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> A modern, responsive, and interactive personal developer portfolio built with React 18, Vite, Bootstrap, and Smooth Scrollbar, featuring multi-language localization (EN / BN), dark/light mode toggle, dynamic backgrounds, and automated GitHub Pages deployment.

🔗 **Live Demo:** [https://wapborhan.github.io/portfolio-v2/](https://wapborhan.github.io/portfolio-v2/)

---

## 🌟 Highlights & Features

- **⚡ Blazing Fast Performance:** Powered by Vite 5 and React 18 for instant hot module replacement (HMR) and optimized static builds.
- **🌐 Bilingual Localization:** Full internationalization (`i18next` & `react-i18next`) with support for English and Bengali.
- **🌗 Theme Toggle:** Seamless switching between Dark Mode and Light Mode.
- **📜 Smooth Scroll Experience:** Native-feeling kinetic scrolling powered by `smooth-scrollbar-react`.
- **🖼️ Media & Interactive UI:**
  - Lightbox / Fancybox integration (`@fancyapps/ui`) for project previews.
  - Carousel & slider showcases using `swiper`.
  - Animated statistics and circular progress bars (`progressbar.js`, `react-countup`).
  - Typing animations using `react-simple-typewriter`.
- **📬 Functional Contact Form:** Form validation with Formik + Yup, integrated with EmailJS.
- **🚀 GitHub Pages Ready:** Automatic CI/CD build and deployment on push via GitHub Actions, with SPA hash-routing fallback support.

---

## 🛠️ Tech Stack

### Core Frameworks & Build Tools

- **[React 18](https://reactjs.org/)** — Component-based UI library
- **[Vite 5](https://vitejs.dev/)** — Next-generation frontend tooling
- **[React Router DOM v6](https://reactrouter.com/)** — Declarative client-side routing

### Styling & Animation

- **[Bootstrap 5](https://getbootstrap.com/)** — Responsive layout & utilities
- **[Anime.js](https://animejs.com/)** — Smooth page and element transitions
- **[React Icons](https://react-icons.github.io/react-icons/)** & **Font Awesome** — Icon sets

### Libraries & Integrations

- **[i18next](https://www.i18next.com/)** & **[react-i18next](https://react.i18next.com/)** — Multi-language localization
- **[Formik](https://formik.org/)** & **[Yup](https://github.com/jquense/yup)** — Contact form management and schema validation
- **[EmailJS](https://www.emailjs.com/)** — Direct client-side email delivery
- **[Fancybox](https://fancyapps.com/fancybox/)** — Lightbox galleries and modal popups
- **[Swiper](https://swiperjs.com/)** — Mobile-friendly touch sliders

---

## 📂 Project Structure

```text
portfolio-v2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment workflow
├── public/
│   ├── 404.html                # SPA redirect fallback for GitHub Pages
│   ├── files/                  # Downloadable assets (Resume, PDF, etc.)
│   ├── images/                 # Static images, avatars, banners
│   └── favicon.ico
├── src/
│   ├── assets/                 # Stylesheets, icons, webfonts, helper scripts
│   ├── components/             # Reusable UI components (Sidebar, Navbar, Contact, etc.)
│   ├── datas/                  # Static data and project configurations
│   ├── hooks/                  # Custom React hooks
│   ├── layout/                 # Layout wrappers (RootLayout, DashLayout)
│   ├── pages/                  # Page views (Home, About, Projects, Blog, Contact, 404)
│   ├── routes/                 # Route declarations (createHashRouter)
│   ├── translate/              # Translation files (en.json, bn.json, i18n setup)
│   ├── index.html              # Entry HTML
│   └── main.jsx               # Application entry point
├── package.json
└── vite.config.js              # Vite configuration (relative base path)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** (v18.0.0 or higher recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/wapborhan/wapborhan-react-new.git
   cd portfolio-v2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Available Scripts

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Starts the local development server at `http://localhost:3000`     |
| `npm run build`   | Compiles and bundles production-ready static assets into `dist/`   |
| `npm run preview` | Locally preview the production build                               |
| `npm run lint`    | Runs ESLint to check for code quality and syntax issues            |
| `npm run deploy`  | Builds the project and publishes the `dist/` folder via `gh-pages` |

---

## 🚢 Deployment

### 1. Automated via GitHub Actions (Recommended)

This repository includes a preconfigured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push your code to the `main` branch:
   ```bash
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every commit pushed to `main` will automatically build and publish the site.

### 2. Manual Deployment via `gh-pages`

You can also deploy manually directly from your local terminal:

```bash
npm run deploy
```

### 3. Vercel Deployment

The project is also compatible with [Vercel](https://vercel.com/):

- Connect your GitHub repository to Vercel.
- Framework preset: **Vite**.
- Build command: `npm run build`.
- Output directory: `dist`.

---

## ⚙️ Customization

- **Profile & Content Data:** Edit `src/translate/en.json` (English) and `src/translate/bn.json` (Bengali) to update personal info, skills, projects, and work history.
- **Theme & Colors:** Accent color definitions are stored under `src/assets/css/colors/`.
- **Contact Form:** Update your EmailJS Service ID, Template ID, and User ID in `src/components/Contact/ContactForm.jsx`.

---

## 👤 Author

**Borhan Uddin**

- Website: [https://wapborhan.github.io/wapborhan-react-new/](https://wapborhan.github.io/wapborhan-react-new/)
- GitHub: [@wapborhan](https://github.com/wapborhan)
- LinkedIn: [wapborhan](https://www.linkedin.com/in/wapborhan)
- Email: [borhaninfos@gmail.com](mailto:borhaninfos@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

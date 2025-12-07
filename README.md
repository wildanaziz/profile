# Wildan's Portfolio

A modern, responsive portfolio website built with React + Vite, featuring comprehensive MDX support for blog posts and portfolio projects with beautiful table rendering and enhanced modal experiences.

## Recent Major Updates (December 2025)

- **Beautiful Table Styling** - Gradient headers, hover effects, zebra striping, and rounded corners for all MDX tables
- **Blog Post Enhancement** - Added 2 comprehensive fine-tuning tutorials (1,525+ lines of technical content)
- **YouTube Integration** - Reusable YouTube component for video embedding in blog posts
- **GFM Support** - GitHub Flavored Markdown with remark-gfm for proper table parsing
- **HuggingFace & W&B Badges** - Integration with shields.io for model and experiment tracking
- **Vercel Deployment Ready** - Optimized configuration for seamless deployment

## Features

- **React + Vite** - Fast development with HMR and optimized production builds
- **MDX Support** - Write blog posts and portfolio content in Markdown with JSX
- **MDX-Driven Portfolio** - All 8 projects use MDX files as content source
- **Interactive Modals** - Full-screen floating modals with smooth animations
- **Advanced MDX Styling** - Beautiful tables, code blocks, and rich content formatting
- **Responsive Design** - Mobile-first approach, works on all devices
- **Email Integration** - Contact form with EmailJS and environment variables
- **WhatsApp Integration** - Direct messaging via WhatsApp
- **Theme System** - Centralized color management with CSS variables
- **Portfolio Section** - 8 comprehensive projects with detailed documentation
- **Blog Section** - 5 technical blog posts covering ML/AI topics
- **Category Filtering** - Filter projects by technology category
- **Rich Code Display** - Syntax highlighted code blocks with custom styling
- **YouTube Embedding** - Responsive 16:9 video component
- **GitHub Flavored Markdown** - Full support for tables, task lists, and more

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.21
- **Content**: MDX 3.0.0 with @mdx-js/rollup, @mdx-js/react
- **Markdown Plugins**: 
  - remark-frontmatter - Frontmatter parsing
  - remark-mdx-frontmatter - MDX frontmatter export
  - remark-gfm - GitHub Flavored Markdown (tables, task lists)
- **Email Service**: EmailJS 4.3.3
- **Styling**: CSS3 with CSS Variables and modern gradient effects

## Content Structure

### Portfolio Projects (8 Projects)

All portfolio projects are managed via MDX files in `/src/content/portfolio/`:

1. **Pasti Pintar EdTech Platform** - Complete educational platform with AI features (2,500+ lines)
2. **Movie Recommendation System** - Machine Learning collaborative filtering (61 lines)
3. **Energy Efficiency Building Prediction** - ML regression models (76 lines)
4. **Sentiment Analysis BCA Apps** - Deep Learning NLP with BERT (238 lines)
5. **Watering Automation System** - IoT irrigation with ESP32 (427 lines)
6. **Visioneer Paths** - Computer Vision learning platform (238 lines)
7. **KweeksNews** - News aggregation with React/Node.js (326 lines)
8. **SUMOBOT** - Autonomous robot with OpenCV (521 lines)

**Total Portfolio Documentation**: 4,387+ lines of technical content

### Blog Posts (5 Posts)

Comprehensive technical articles in `/src/content/blog/`:

1. **Fine-Tuning LLMs for Multi-Turn Conversations** - Advanced multi-turn dialogue training with Unsloth (875 lines)
2. **Fine-Tuning LLMs for Single-Turn Conversations** - Single-turn Q&A fine-tuning guide (650 lines)
3. **Roboflow, Introduction to YOLO & CUDA Installation** - Computer Vision setup guide with YouTube integration
4. **YOLO with Weights & Biases** - Model tracking and visualization
5. **Introduction to Neural Networks** - Deep Learning fundamentals

**Total Blog Content**: 1,525+ lines for fine-tuning tutorials alone

**Features**:
- Beautiful table rendering with gradient styling
- YouTube video embedding
- HuggingFace and W&B badges
- Syntax-highlighted code blocks
- Comprehensive step-by-step guides

### MDX Frontmatter Format
### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/wildanaziz/profile.git
cd profile
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure EmailJS** (Optional):
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   Or update directly in `src/utils/contactService.js`:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS (Optional):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the credentials in `src/utils/contactService.js`:
     - `PUBLIC_KEY`
     - `SERVICE_ID`
     - `TEMPLATE_ID`

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

```
profile/
├── public/
│   └── assets/
│       └── images/              # Project and blog images
├── src/
│   ├── components/              # React components
│   │   ├── Sidebar.jsx          # Profile sidebar
│   │   ├── Navbar.jsx           # Navigation tabs
│   │   ├── About.jsx            # About section
│   │   ├── Resume.jsx           # Resume/CV section
│   │   ├── Portfolio.jsx        # Portfolio with modals
│   │   ├── Blog.jsx             # Blog with MDX rendering
│   │   ├── Contact.jsx          # Contact form
│   │   └── YouTube.jsx          # YouTube embed component (NEW)
│   ├── content/
│   │   ├── portfolio/           # 8 Portfolio MDX files
│   │   │   ├── pasti-pintar.mdx
│   │   │   ├── movie-recommendation.mdx
│   │   │   ├── energy-efficiency.mdx
│   │   │   ├── sentiment-analysis-bca.mdx
│   │   │   ├── watering-automation.mdx
│   │   │   ├── visioneer-paths.mdx
│   │   │   ├── kweeks-news.mdx
│   │   │   └── sumobot.mdx
│   │   └── blog/                # 5 Blog MDX files
│   │       ├── fine-tuning-multi-turn.mdx (NEW)
│   │       ├── fine-tuning-single-turn.mdx (NEW)
│   │       ├── Roboflow, Introduction to YOLO & CUDA Installation.mdx
│   │       ├── yoloWandb.mdx
│   │       └── introduction-to-NN.mdx
│   ├── styles/
│   │   ├── global.css           # Global styles + MDX styling + Table styling
│   │   └── theme.js             # Theme configuration
│   ├── utils/
│   │   └── contactService.js    # Email & WhatsApp utilities
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── .env                         # Environment variables (create manually)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js               # Vite + MDX + GFM config
├── vercel.json                  # Vercel deployment config (NEW)
├── DEPLOYMENT.md                # Deployment guide (NEW)
├── MDX_PORTFOLIO_INTEGRATION.md
├── MODAL_FEATURES.md
└── README.md
``` │   └── blog/            # Blog MDX files
│   ├── styles/
│   │   ├── global.css       # Global styles
│   │   └── theme.js         # Theme configuration
│   ├── utils/
│   │   └── contactService.js # Email & WhatsApp utilities
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Adding Content

### Adding a Portfolio Project

1. **Create MDX file** in `src/content/portfolio/new-project.mdx`:
```markdown
---
### Adding a Blog Post

1. **Create MDX file** in `src/content/blog/new-post.mdx`:
```markdown
---
title: "Blog Post Title"
category: "Deep Learning"
date: "2025-12-07"
description: "Short description"
image: "/assets/images/blog-image.png"
author: "Your Name"
tags: ["AI", "Machine Learning"]
---

import YouTube from '../../components/YouTube.jsx';

## Customization

### Updating Colors

Edit `src/styles/theme.js` to change the color scheme:
```javascript
export const theme = {
  colors: {
    primary: '#ffdb70',      // Orange-yellow (vegas gold)
    background: '#1e1e1f',   // Dark background
    // ... customize as needed
  }
};
```

### Updating Personal Information

- **Sidebar**: Edit `src/components/Sidebar.jsx` (name, title, avatar, social links)
- **About**: Edit `src/components/About.jsx` (bio, skills)
- **Resume**: Edit `src/components/Resume.jsx` (education, experience)

### Customizing MDX Styles
## Key Features Documentation
- **Table Styling** - Beautiful gradient tables with hover effects and zebra striping
- **YouTube Integration** - Responsive video embedding component
- **Shields.io Badges** - HuggingFace and W&B integration

## Dependencies

### Core
- `react@18.3.1` - UI library
- `react-dom@18.3.1` - React DOM rendering
- `vite@5.4.21` - Build tool and dev server

### MDX & Markdown
- `@mdx-js/rollup@3.0.0` - MDX Rollup plugin
- `@mdx-js/react@3.0.0` - MDX React integration
- `remark-frontmatter` - Parse YAML frontmatter
- `remark-mdx-frontmatter` - Export frontmatter as named export
- `remark-gfm` - GitHub Flavored Markdown (tables, task lists)

### Utilities
- `@emailjs/browser@4.3.3` - Email service integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightning-fast HMR with Vite
- Optimized production builds
- CSS-only animations (no JavaScript)
- Mobile-optimized responsive design
- Lazy-loaded images in modals

## Author

**Wildan Aziz Hidayat**
- Email: danitatadanwildan@gmail.com
- GitHub: [@wildanaziz](https://github.com/wildanaziz)
- LinkedIn: [Wildan Aziz Hidayat](https://www.linkedin.com/in/wildan-aziz-hidayat/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- MDX team for seamless Markdown + JSX integration
- Unsloth team for LLM fine-tuning inspiration
- Shields.io for beautiful badges

---

**Built with ❤️ using React + Vite + MDX**

*Last Updated: December 2025*

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Add credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### WhatsApp

Edit the `phoneNumber` in `src/utils/contactService.js`:
```javascript
const phoneNumber = '6281234567890'; // Your WhatsApp number
```

## Deployment

### Quick Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel will auto-deploy if linked
```

Or use Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```
    ...newPostFrontmatter,
    content: NewPost
  },
  // ... other posts
];
```

### Using YouTube Component

```jsx
import YouTube from '../../components/YouTube.jsx';

<YouTube videoId="VIDEO_ID" title="Optional Title" />
```
description: "Project description"
techStack: ["Python", "TensorFlow"]
github: "https://github.com/..."
demo: "https://demo-url.com"
date: "2024-01-15"
---

# Project Title
Full markdown content with code examples, architecture, etc...
```

2. **Add project image** to `public/assets/images/`

3. **Import in Portfolio.jsx**:
```jsx
import NewProjectContent, { frontmatter as newProjectFrontmatter } 
  from '../content/portfolio/new-project.mdx';

const portfolioItems = [
  // ... existing items
  {
    ...newProjectFrontmatter,
    content: NewProjectContent
  }
];
```

That's it! The project will automatically appear in the portfolio with full documentation.

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/` and add it to `src/components/Blog.jsx`.

## Customization

### Updating Colors

Edit `src/styles/theme.js` to change the color scheme.

### Updating Personal Information

- Sidebar: Edit `src/components/Sidebar.jsx`
- About: Edit `src/components/About.jsx`
- Resume: Edit `src/components/Resume.jsx`

## Contact Integration

### Email (EmailJS)

Update credentials in `src/utils/contactService.js` after signing up at https://www.emailjs.com/

### WhatsApp

Edit the `phoneNumber` variable in `src/utils/contactService.js` to change the number.

## Author

**Wildan Aziz Hidayat**
- Email: danitatadanwildan@gmail.com
- GitHub: [@wildanaziz](https://github.com/wildanaziz)
- LinkedIn: [Wildan Aziz Hidayat](https://www.linkedin.com/in/wildan-aziz-hidayat/)

---

Built with ❤️ using React + Vite


# 🌿 Summer Breeze - Frontend Project


__*From Figma Design to 99/100 Performance Landing Page*__

Summer Breeze is a professional landing page for a premium garden design studio, showcasing the *complete workflow from custom Figma design to production-ready React implementation*. The project demonstrates modern web development practices with exceptional Lighthouse scores across all metrics.


## 🚀 Demo

**[View Live Project](https://summer-breeze-henna.vercel.app/)**



## 🛠️ Tech Stack

**FRONTEND:** React 19, Next.js 16, Tailwind CSS, Framer Motion, shadcn/ui  
**APIS:** Unsplash API  
**HOSTING:** Vercel
## 🎯 Core Skills 

` Figma to Code Conversion 🎨 → ⌨️`

` Modern Next.js Architecture ⚛️`

` External API Integration 🔌`

` Performance Optimization 🚀`

` UI/UX Implementation ✨`
## 🏗️ Architecture Highlights
#### Modular Component Structure
```
app/
└── page.tsx                   # Single landing page (Server Component)
components/
├── design/                    # Design components
│   ├── Decorative-Divider/
│   ├── Logo/
├── layout/                    # Layout components
│   ├── Header/
│   └── Footer/
│   └── Social-Media/
└── ui/                        # Reusable UI components
    ├── Button/
    ├── Card/
    ├── Contact-Form/
    └── Icon-Card/
    └── Image-Card/
    └── Input/
    └── Sheet/
    ...
```

#### Server Components
Unsplash API calls handled server-side for zero client bundle impact

```javascript
// CODE EXAMPLE
export async function getImageById(id: string): Promise<GardenImage> {
  try {
    const response = await fetch(process.env.URL_UNSPLASH! + `photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY!}`,
      },
    });
```

#### Key Implementation Features

* Reusable Components: Modular UI built with composable, reusable components


* Clean Architecture: Clear separation between page sections, layout, and UI primitives

* Performance-First: Strategic code splitting and image optimization

## 🏆 Performance Metrics

![Performance](https://img.shields.io/badge/Performance-98%25-success)
![Accessibility](https://img.shields.io/badge/Accessibility-100%25-success)
![Best Practices](https://img.shields.io/badge/Best_Practices-100%25-success)
![SEO](https://img.shields.io/badge/SEO-100%25-success)


## 🙏 Acknowledgments

 - [Framer Motion Animation](https://codesandbox.io/p/sandbox/framer-motion-scroll-velocity-r1dy4u?file=%2Fsrc%2FApp.tsx%3A70%2C28&from-embed)
- [Unsplash API](https://unsplash.com/documentation)


## 📄 License

This project is for portfolio purposes. All design rights reserved. Unsplash images are used according to their license terms.

Designed & Developed by `Camelia`

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
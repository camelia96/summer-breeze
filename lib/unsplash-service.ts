import { GardenImage } from "./types";

const imgRedimension = "&fm=webp&fit=crop&w=";

export async function getGardenPortfolioImages(
  total: number,
  query: string
): Promise<GardenImage[]> {
  try {
    const response = await fetch(
      process.env.URL_UNSPLASH! +
        `search/photos?page=1&per_page=${total}&query=${query}&count=10&orientation=landscape&q=80&fit=crop&fm=webp`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY!}`,
        },
      }
    );

    const data = await response.json();

    const images: GardenImage[] = data.results.map((r: any) => {
      return {
        id: r.id,
        width: r.width,
        height: r.height,
        urls: {
          full: r.urls.full+imgRedimension+"1800",
          regular: r.urls.regular+imgRedimension+"800",
          small: r.urls.small+imgRedimension+"400",
          raw: r.urls.raw+imgRedimension+"1800"
        },
        alt_description: r.alt_description,
      };
    });

    return images;
  } catch (error) {
    return [];
  }
}

export async function getImageById(id: string): Promise<GardenImage> {
  try {
    const response = await fetch(process.env.URL_UNSPLASH! + `photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY!}`,
      },
    });

    const data = await response.json();

    return {
      id: data.id,
      urls: {
        full: data.urls.full+imgRedimension+"1800",
        regular: data.urls.regular+imgRedimension+"800",
        small: data.urls.small+imgRedimension+"400",
        raw: data.urls.raw+imgRedimension+"1800",
      },
      alt_description: data.alt_description,
      width: data.width,
      height: data.height,
    };
  } catch (error) {
    throw new Error(`Failed to fetch image`);
  }
}

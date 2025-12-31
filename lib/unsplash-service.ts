import { GardenImage } from "./types";

const imgRedimension = "&fm=webp&fit=crop&auto=format&w=";

export async function getGardenPortfolioImages(
  total: number,
  query: string
): Promise<GardenImage[]> {
  try {
    const response = await fetch(
      process.env.URL_UNSPLASH! +
        `search/photos?page=1&per_page=${total}&query=${query}&count=10&orientation=landscape&w=1300&q=80&fit=crop&auto=format`,
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
          full: r.urls.full+imgRedimension,
          regular: r.urls.regular+imgRedimension+"700",
          small: r.urls.small+imgRedimension+"400",
          raw: r.urls.raw+imgRedimension
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
        full: data.urls.full+imgRedimension,
        regular: data.urls.regular+imgRedimension+"700",
        small: data.urls.small+imgRedimension+"400",
        raw: data.urls.raw+imgRedimension
      },
      alt_description: data.alt_description,
      width: data.width,
      height: data.height,
    };
  } catch (error) {
    throw new Error(`Failed to fetch image`);
  }
}

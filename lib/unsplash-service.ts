import { GardenImage } from "./types";

export async function getGardenPortfolioImages(
  total: number,
  query: string
): Promise<GardenImage[]> {
  try {
    const response = await fetch(
      process.env.URL_UNSPLASH! +
        `search/photos?page=1&per_page=${total}&query=${query}&count=10&orientation=landscape&fm=webp`,
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
          full: r.urls.full,
          regular: r.urls.regular,
          small: r.urls.small,
          raw: r.urls.raw
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
        full: data.urls.full,
        regular: data.urls.regular,
        small: data.urls.small,
        raw: data.urls.raw
      },
      alt_description: data.alt_description,
      width: data.width,
      height: data.height,
    };
  } catch (error) {
    throw new Error(`Failed to fetch image`);
  }
}

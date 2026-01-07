import DecorativeDivider from "@/components/design/decorative-divider";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contact-form";
import IconCard from "@/components/ui/icon-card";
import ImgCard from "@/components/ui/img-card";
import { briefImgs, projects, Service, services } from "@/lib/data";
import { GardenCard, GardenImage } from "@/lib/types";
import { getGardenPortfolioImages, getImageById } from "@/lib/unsplash-service";
import { redimension } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  // Hero image
  const backgroundImage = await getImageById(process.env.HERO_IMAGE!);

  // Portfolio images
  const portfolioImgs = await getGardenPortfolioImages(6, "garden+design+home+outdoor");

  const portfolioCards = portfolioImgs.map((p: GardenImage, index: number) => {

    const projectTitle = projects.find((p) => p.id == index)?.title;
    const locationTitle = projects.find((p) => p.id === index)?.location;

    return { ...p, title: projectTitle || `Garden ${index}`, location: locationTitle || `Unknown location` }
  })

  // Contact image
  const contactImage = await getImageById(process.env.CONTACT_IMAGE!)

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col justify-start items-center  bg-white ">

        {/** HERO */}
        <div className="relative w-full h-[400px] md:h-svh bg-black flex items-center " id="hero">

          {backgroundImage
            ? <Image alt={backgroundImage.alt_description} fill={true} className="object-cover scale-x-[-1] opacity-80" src={backgroundImage.urls.full} priority fetchPriority="high"/>
            : <div className="absolute inset-0 md:px-16 bg-light-green"></div>
          }

          <div className="md:h-svh relative w-full md:w-5/6 xl:w-4/6 flex flex-col items-center md:items-start justify-center gap-6 text-white p-16" >
            <h1 className="text-center md:text-left">Timeless gardens shaped by nature and refined by design</h1>
            <p className="text-center md:text-left md:w-4/6">At Summer Breeze garden design, we create landscapes that feel effortless, natural and deeply connected to the way you live.</p>
            <Button asChild aria-label="Book a consultation button">
              <Link aria-label="Book a consultation link" href={"/#contact"}>Book a consultation</Link>
            </Button>
          </div>
        </div>

        {/** ABOUT */}
        <div className="flex flex-col items-center justify-center p-10 md:p-24 text-center gap-6" id="about">
          <p  className="uppercase text-lg md:text-lg lg:text-2xl  font-normal leading-custom ">Meet the designer</p>
          <h2>A Thoughtful Approach to Living Outdoors</h2>
          <p className="md:w-3/4">Autumn is the creative mind behind Summer Breeze garden design—a boutique studio dedicated to transforming outdoor spaces into refined, livable landscapes. With a background in design, horticulture, and a deep appreciation for natural beauty, she crafts environments that feel effortless, balanced, and uniquely personal.</p>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            {briefImgs.map((b) => (
              <Image key={b.id} alt={b.alt} height={b.h} width={b.w} src={b.src}></Image>
            ))}
          </div>

        </div>

        {/** DIVIDER */}
        <DecorativeDivider />

        {/** PROJECTS */}
        <div className="md:w-10/12 p-10 md:py-20 md:px-0 text-center md:text-start flex flex-col gap-6" id="portfolio">
          <h2>Our garden Projects</h2>
          <p className="md:w-4/6">A curated collection of bespoke outdoor spaces crafted with care, intention, and an eye for timeless beauty. Each garden reflects our client’s lifestyle, the unique character of the site, and our dedication to elegant, natural design.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-10 md:gap-12 justify-between">
            {portfolioCards.map((p: GardenCard) => (<ImgCard key={p.id} card={p} />))}
          </div>
        </div>

        {/** SERVICES */}
        <div className="md:w-10/12 bg-cream flex flex-col text-center md:text-start mx-16 p-10 md:p-14 gap-10 md:gap-15" id="services">
          <div className="md:w-3/4 flex flex-col gap-6">
            <h2>Expert Services for Your Outdoor Space</h2>
            <p>Calm, considered garden design that transforms outdoor spaces into refined living environments. Each service is tailored to your site, lifestyle, and vision—delivering gardens that feel harmonious, intuitive, and naturally beautiful.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">

            {services.map((s: Service, index: number) => {
              return (<IconCard
                key={index}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />)

            })}
          </div>
          <Button className="text-center" asChild aria-label="Begin your garden journey button">
            <Link aria-label="Begin your garden journey link" href={"/#contact"}>Begin your garden journey</Link>
          </Button>
        </div>

        {/** CONTACT */}
        <div className="flex flex-col md:flex-row items-center gap-20 md:w-10/12 p-10 md:px-0 md:py-24" id="contact">
          <div className="md:w-3/6 flex flex-col gap-6">
            <h2>Contact us</h2>
            <p className="text-xs italic text-[#3f3f3f]">*Disclaimer: This is not a working form. Its only purpose is to showcase the UI. You can still submit the form but will only get a success alert.</p>
            <ContactForm />
          </div>
          <div className="relative w-full md:w-3/6 h-[250px] md:h-[500px]">
            <Image loading="lazy"   priority={false} className=" object-cover h-dvh" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={contactImage.urls.regular} alt={contactImage.alt_description} />
          </div>
        </div>
      </main>
    </div>
  );
}

import DecorativeDivider from "@/app/ui/design/decorative-divider";
import { Button } from "@/components/ui/button";
import ImgCard from "@/app/ui/img-card";
import { briefImgs, projects, services } from "@/lib/data";
import { GardenCard, GardenImage, Service } from "@/lib/types";
import { getGardenPortfolioImages, getImageById } from "@/lib/unsplash-service";
import Image from "next/image";
import Link from "next/link";
import IconCard from "@/app/ui/icon-card";
import ContactForm from "@/app/ui/contact-form";

export default async function Home() {

  // Hero image
  const backgroundImage = await getImageById(process.env.HERO_IMAGE!);

  // Portfolio images
  const portfolioImgs = await getGardenPortfolioImages(12, "garden+design+home+outdoor");

  // Portfolio Cards build
  const portfolioCards = portfolioImgs.map((p: GardenImage, index: number) => {

    const projectTitle = projects.find((p) => p.id == index)?.title;
    const locationTitle = projects.find((p) => p.id === index)?.location;
    const yearTitle = projects.find((p) => p.id === index)?.year;

    return { ...p, title: projectTitle || `Garden ${index}`, location: locationTitle || `Unknown location`, year: yearTitle || 'Unknown year' }
  })

  // Contact image
  const contactImage = await getImageById(process.env.CONTACT_IMAGE!)

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <main className="flex flex-col items-center justify-start w-full min-h-screen ">

        {/** HERO */}
        <section className="relative w-full h-[400px] md:h-[95vh] bg-black flex items-center " aria-labelledby="hero-heading" id="hero">

          {backgroundImage
            ? <>
              <Image alt={backgroundImage.alt_description} fill className="object-cover object-center scale-x-[-1] opacity-80" src={backgroundImage.urls.full} fetchPriority="high" loading="eager" />
              <div className="absolute inset-0 bg-black/20"></div>
            </>
            : <div className="absolute inset-0 md:px-16 bg-primary"></div>
          }

          <div className="relative flex flex-col items-center justify-center w-full gap-6 p-10 md:h-svh md:w-5/6 xl:w-3/6 md:items-start text-background md:pl-16" >
            <h1 id="hero-heading" className="text-center md:text-left">Timeless <span className="font-serif italic font-medium">gardens</span> shaped by <span className="font-serif italic font-medium">nature</span> and refined by <span className="font-serif italic font-medium">design</span></h1>
            <p className="text-center md:text-left md:w-4/6">At Summer Breeze garden design, we create landscapes that feel effortless, natural and deeply connected to the way you live.</p>
            <Button asChild aria-label="Book a consultation button" variant={"secondary"}>
              <Link aria-label="Book a consultation link" href={"/#contact"}>Book a consultation</Link>
            </Button>
          </div>
        </section>

        {/** ABOUT */}
        <section className="flex flex-col items-center justify-center gap-6 p-10 text-center md:p-24" id="about" aria-labelledby="about-heading">
          <p className="text-lg font-medium uppercase lg:text-2xl leading-custom ">Meet the designer</p>
          <h2 id="about-heading">A Thoughtful Approach to Living Outdoors</h2>
          <p className="md:w-3/4">Autumn is the creative mind behind Summer Breeze garden design—a boutique studio dedicated to transforming outdoor spaces into refined, livable landscapes. With a background in design, horticulture, and a deep appreciation for natural beauty, she crafts environments that feel effortless, balanced, and uniquely personal.</p>
          <div className="grid items-center justify-center grid-cols-1 gap-10 sm:grid-cols-3">
            {briefImgs.map((b) => (
              <Image key={b.id} alt={b.alt} height={b.h} width={b.w} src={b.src} loading="eager" className="w-auto h-auto"/>
            ))}
          </div>

        </section>

        {/** DIVIDER */}
        <DecorativeDivider />

        {/** PROJECTS */}
        <section className="flex flex-col gap-6 p-10 text-center md:px-16 md:py-20 md:text-start" id="portfolio" aria-labelledby="projects-heading">

          <h2 id="projects-heading">Our garden Projects</h2>
          <p className="md:w-5/6">A curated collection of bespoke outdoor spaces crafted with care, intention, and an eye for timeless beauty. Each garden reflects our client’s lifestyle, the unique character of the site, and our dedication to elegant, natural design.</p>

          <div className="grid justify-between grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioCards.map((p: GardenCard) => (<ImgCard key={p.id} card={p} />))}
          </div>
        </section>

        {/** SERVICES */}
        <section className="flex flex-col gap-10 p-8 mx-10 lg:p-16 bg-primary text-background text-start md:gap-15" id="services" aria-labelledby="services-heading">
          <div className="flex flex-col w-full gap-6">
            <h2 id="services-heading">Expert Services for Your Outdoor Space</h2>
            <p>Calm, considered garden design that transforms outdoor spaces into refined living environments. Each service is tailored to your site, lifestyle, and vision—delivering gardens that feel harmonious, intuitive, and naturally beautiful.</p>
          </div>
          <div className="grid items-start justify-between grid-cols-1 gap-10 md:grid-cols-3">

            {services.map((s: Service) => {
              return (<IconCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />)

            })}
          </div>
          <div className="w-full text-center">
            <Button className="text-center" variant={"secondary"} asChild aria-label="Begin your garden journey button">
              <Link aria-label="Begin your garden journey link" href={"/#contact"}>Begin your garden journey</Link>
            </Button>
          </div>
        </section>

        {/** CONTACT */}
        <section className="flex flex-col items-center justify-center w-full gap-6 p-10 md:flex-row md:py-20" id="contact" aria-labelledby="contact-heading">
          <div className="flex flex-col w-full md:w-3/6 ">
            <ContactForm />
          </div>
          <div className="relative w-full md:w-2/6 h-[30rem]">
            <Image loading="lazy" className="object-cover h-vh" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={contactImage.urls.regular} alt={contactImage.alt_description} />
          </div>
        </section>
      </main>
    </div>
  );
}

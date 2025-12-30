import DecorativeDivider from "@/components/design/decorative-divider";
import Logo from "@/components/design/logo";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import IconCard from "@/components/ui/icon-card";
import ImgCard from "@/components/ui/img-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { briefImgs, projects } from "@/lib/data";
import { Fence, Flower, Leaf, PencilRuler } from "lucide-react";
import Image from "next/image";
import { createApi } from "unsplash-js";

export default async function Home() {

  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,

  }).photos.get({ photoId: process.env.HERO_IMAGE! })


  const bgImg = (await unsplash).response?.urls.full;


  return (
    <div className="min-h-screen w-full ">
      <main className="flex min-h-screen w-full flex-col justify-start items-center  bg-white ">
      
        {/** HERO */}
        <div className="relative w-full h-svh">

          <div className="absolute inset-0  md:px-16 " style={{
            background: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", transform: 'scaleX(-1)',
          }}>

          </div>

          <div className="h-svh relative w-5/6 xl:w-4/6 flex flex-col justify-center gap-6 text-white p-16" >
            <h1>Timeless gardens shaped by nature and refined by design</h1>
            <p className="w-4/6">At Summer Breeze garden design, we create landscapes that feel effortless, natural and deeply connected to the way you live.</p>
            <Button>Book a consultation</Button>
          </div>
        </div>

        {/** ABOUT */}
        <div className="flex flex-col items-center justify-center p-24 text-center gap-5">
          <h3 className="uppercase">Meet the designer</h3>
          <h2>A Thoughtful Approach to Living Outdoors</h2>
          <p className="w-3/4">Autumn is the creative mind behind Summer Breeze garden design—a boutique studio dedicated to transforming outdoor spaces into refined, livable landscapes. With a background in design, horticulture, and a deep appreciation for natural beauty, she crafts environments that feel effortless, balanced, and uniquely personal.</p>
          <div className="flex gap-10 items-center justify-center">
            {briefImgs.map((b) => (
              <Image key={b.id} alt={b.alt} height={b.h} width={b.w} src={b.src}></Image>
            ))}
          </div>

        </div>

        {/** DIVIDER */}
        <DecorativeDivider />

        {/** PROJECTS */}
        <div className="w-10/12 py-20 flex flex-col gap-10">
          <h2>Our garden Projects</h2>
          <p className="w-4/6">A curated collection of bespoke outdoor spaces crafted with care, intention, and an eye for timeless beauty. Each garden reflects our client’s lifestyle, the unique character of the site, and our dedication to elegant, natural design.</p>

          <div className="grid grid-cols-2 grid-rows-3 gap-10">
            {projects.map((p) => (<ImgCard key={p.id} imgUrl={p.image.src!} />))}
          </div>
        </div>

        {/** SERVICES */}
        <div className="w-10/12 bg-cream flex flex-col mx-16 p-14 gap-20">
          <div className="w-3/4 flex flex-col gap-3.5">
            <h2>Expert Services for Your Outdoor Space</h2>
            <p>Calm, considered garden design that transforms outdoor spaces into refined living environments. Each service is tailored to your site, lifestyle, and vision—delivering gardens that feel harmonious, intuitive, and naturally beautiful.</p>
          </div>
          <div className="flex justify-between items-center">
            <IconCard icon={<Fence size={60} strokeWidth={1} className="text-light-green" />} title="Garden design" description="A comprehensive design service for residential gardens of all sizes. We begin with a detailed site study, exploring your goals, architectural context, and natural features. The result is a bespoke concept that blends structure, flow, and planting into a cohesive and timeless layout." />
            <IconCard icon={<Flower size={60} strokeWidth={1} className="text-light-green" />} title="Planting design" description="Thoughtfully composed planting schemes that evolve with the seasons. We select species that complement your space, climate, and maintenance preferences—creating layers of texture, color, and movement that deepen the character of your garden over time." />
            <IconCard icon={<PencilRuler size={60} strokeWidth={1} className="text-light-green" />} title="Design advice" description="For clients seeking guidance rather than a full design package, we offer tailored consultations. These sessions focus on refining ideas, assessing challenges, and providing expert direction to help you plan with clarity and confidence." />
          </div>
          <Button className="text-center">Begin your garden journey</Button>
        </div>

        {/** CONTACT */}
        <div className="flex items-center gap-16 w-10/12 py-24">
          <div className="w-3/6 flex flex-col gap-6">
            <h2>Contact us</h2>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="Enter your name" />
                </Field>


                <Field>
                  <FieldLabel>Surname</FieldLabel>
                  <Input placeholder="Enter your surname" />
                </Field>


                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input placeholder="Enter your email" />
                </Field>


                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea placeholder="Enter your message" />
                </Field>

                <Field orientation="horizontal">
                  <Button type="submit">Submit</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
          <div className="w-3/6">
            IMAGE
          </div>
        </div>
      </main>
    </div>
  );
}

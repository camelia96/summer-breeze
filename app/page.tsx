import DecorativeDivider from "@/components/design/decorative-divider";
import Logo from "@/components/design/logo";
import { Button } from "@/components/ui/button";
import IconCard from "@/components/ui/icon-card";
import ImgCard from "@/components/ui/img-card";
import Image from "next/image";

export default async function Home() {
  const bgImg = await fetch('https://picsum.photos/id/237/1000/1000');
  console.log(bgImg.url)
  return (
    <div className="min-h-screen w-full ">
      <main className="flex min-h-screen w-full flex-col justify-start  bg-white ">
        {/** HERO */}
        <div className=" w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center" style={{ background: `url(${bgImg.url})` }}>
          <h1>Timeless gardens shaped by nature and refined by design</h1>
          <p>At Summer Breeze garden design, we create landscapes that feel effortless, natural and deeply connected to the way you live.</p>
          <Button>Book a consultation</Button>
        </div>
      </main>
    </div>
  );
}

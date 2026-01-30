import Link from "next/link";
import Logo from "@/app/ui/design/logo";
import {  Figma, Github } from "lucide-react";
import SocialMedia from "./social-media";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col items-start justify-between gap-10 px-10 py-8 bg-secondary text-primary md:h-96 md:flex-row">
                <div className="flex flex-col gap-4 md:w-1/4">
                    <Logo />


                    <SocialMedia />
                </div>


                <div className="flex flex-col gap-3 md:w-1/4">
                    <h3 className="uppercase pb-7">About</h3>
                    <p>Boutique garden design studio crafting timeless, elegant outdoor spaces. We bring vision, nature, and lifestyle together in every project.</p>
                </div>



                <div className="flex flex-col gap-3 capitalize md:w-1/4">
                    <h3 className="uppercase pb-7">Services</h3>
                    <Link aria-label="Garden design service" href={"/#services"} className="hover:underline">Garden design</Link>
                    <Link aria-label="Planting design service" href={"/#services"} className="hover:underline">Planting design</Link>
                    <Link aria-label="Design planting service" href={"/#services"} className="hover:underline">Design Advice</Link>
                </div>



                <div className="flex flex-col gap-3 md:w-1/4">
                    <h3 className="uppercase pb-7">Contact</h3>
                    <p className="font-serif text-base italic md:text-lg lg:text-2xl">Get in touch</p>
                    <a className="underline " href="mailto:hello@summerbreeze.com">hello@summerbreeze.com</a>
                    <p>+44 123 456 789</p>
                    <p>Brighton, UK</p>
                </div>

            </div >
            <div className="flex flex-col items-center justify-center p-4 text-xs md:flex-row md:items-start">© 2025 Summer Breeze Garden Design - <span className="ml-0.5"><Link aria-label="Privacy Policy" href={"/"}> Privacy Policy</Link> | <Link aria-label="Terms & Conditions" href={"/"}>Terms & Conditions</Link></span></div>

            <div className="flex items-center justify-center gap-3 py-2 text-xs bg-primary text-background">
                <Link target="_blank" href={"https://github.com/camelia96/summer-breeze"} className="flex items-center gap-1">
                    <Github strokeWidth={1} size={20} />
                    <span>GitHub Repository</span>
                </Link>
                <Link target="_blank" href={"https://www.figma.com/proto/ePBG3EzRtqbnwy3P5pInpY/proyectos?node-id=310-2&t=1cJ4uNKHT5NUHlDI-0&scaling=min-zoom&content-scaling=fixed&page-id=305%3A2&starting-point-node-id=310%3A2"} className="flex items-center gap-1">
                    <Figma strokeWidth={1} size={20} />
                    <span>Figma Project</span>
                </Link>
            </div>
        </>
    )
}
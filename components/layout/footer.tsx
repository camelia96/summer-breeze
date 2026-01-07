import Link from "next/link";
import Logo from "@/components/design/logo";
import { Facebook, Figma, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import SocialMedia from "./social-media";

export default function Footer() {
    return (
        <>
            <div className="bg-light-green text-black flex items-start justify-between py-8 px-10 md:h-96 gap-10 flex-col md:flex-row">
                <div className="flex flex-col gap-4 w-1/4">
                    <Logo />


                    <SocialMedia />
                </div>


                <div className="flex flex-col  w-1/4 gap-3">
                    <h3 className="uppercase pb-7">About</h3>
                    <p>Boutique garden design studio crafting timeless, elegant outdoor spaces. We bring vision, nature, and lifestyle together in every project.</p>
                </div>



                <div className="flex flex-col capitalize w-1/4 gap-3">
                    <h3 className="uppercase pb-7">Services</h3>
                    <Link aria-label="Garden design service" href={"/#services"} className="hover:underline">Garden design</Link>
                    <Link aria-label="Planting design service" href={"/#services"} className="hover:underline">Planting design</Link>
                    <Link aria-label="Design planting service" href={"/#services"} className="hover:underline">Design Advice</Link>
                </div>



                <div className="flex flex-col w-1/4 gap-3">
                    <h3 className="uppercase pb-7">Contact</h3>
                    <p className="text-base md:text-lg lg:text-2xl italic font-serif">Get in touch</p>
                    <a className=" underline" href="mailto:hello@summerbreeze.com">hello@summerbreeze.com</a>
                    <p>+44 123 456 789</p>
                    <p>Brighton, UK</p>
                </div>

            </div >
            <div className="p-4 text-xs flex flex-col md:flex-row items-center md:items-start justify-center">© 2025 Summer Breeze Garden Design - <span className="ml-0.5"><Link aria-label="Privacy Policy" href={"/"}> Privacy Policy</Link> | <Link aria-label="Terms & Conditions" href={"/"}>Terms & Conditions</Link></span></div>

            <div className="flex items-center justify-center gap-3 bg-dark-green text-white py-2 text-xs">
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
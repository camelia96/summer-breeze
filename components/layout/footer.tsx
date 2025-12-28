import Link from "next/link";
import Logo from "@/components/design/logo";
import { Facebook, Instagram, Linkedin, LinkedinIcon, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <>
            <div className="bg-light-green text-white flex items-start justify-between py-8 px-10 h-96 gap-10">
                <div className="flex flex-col gap-4">
                    <Logo />


                    <div className="flex gap-2 text-dark-green items-center justify-between">
                        <Instagram strokeWidth={1.5} />
                        <Youtube strokeWidth={1.1} size={32} />
                        <Linkedin strokeWidth={1.5} />
                        <Facebook strokeWidth={1.5} />

                    </div>
                </div>


                <div className="flex flex-col  w-64 gap-3">
                    <h3 className="uppercase pb-7">About</h3>
                    <p>Boutique garden design studio crafting timeless, elegant outdoor spaces. We bring vision, nature, and lifestyle together in every project.</p>
                </div>



                <div className="flex flex-col capitalize w-64 gap-3">
                    <h3 className="uppercase pb-7">Services</h3>
                    <Link href={"#"}>Garden design</Link>
                    <Link href={"#"}>Planting design</Link>
                    <Link href={"#"}>Design Advice</Link>
                </div>



                <div className="flex flex-col w-64 gap-3">
                    <h3 className="uppercase pb-7">Contact</h3>
                    <h6>Get in touch</h6>
                    <a className=" underline" href="mailto:hello@summerbreeze.com">hello@summerbreeze.com</a>
                    <p>+44 123 456 789</p>
                    <p>Brighton, UK</p>
                </div>

            </div >
            <div className="p-2 flex justify-center">© 2025 Summer Breeze Garden Design - <Link href={"/"}>Privacy Policy</Link> | <Link href={"/"}>Terms & Conditions</Link></div>
        </>
    )
}
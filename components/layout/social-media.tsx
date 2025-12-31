import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function SocialMedia() {
    return (
        <div className="flex gap-2 text-dark-green items-center ">
            <Link target="_blank" href={"https://www.instagram.com/"}>
                <Instagram strokeWidth={1.5} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/">
                <Linkedin strokeWidth={1.5} />
            </Link>
            <Link target="_blank" href="https://www.youtube.com/">
                <Youtube strokeWidth={1.1} size={32} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/" >
                <FacebookIcon strokeWidth={1.5} />
            </Link>
        </div>
    )
}
import Link from "next/link";

export default function Logo() {
    return (
        <Link  aria-label="Logo link to Homepage" href={"/"} className="text-3xl text-primary tracking-[-7.5%] ">
            <span className="font-semibold text-[27px] ">summer</span>
            <span className="font-serif italic text-[30px]">/breeze</span>
        </Link>
    )
}
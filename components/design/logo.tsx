import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="text-3xl text-dark-green tracking-[-7.5%] ">
            <span className="font-semibold text-[27px] ">summer</span>
            <span className="font-serif italic text-[34.5px]">/breeze</span>
        </Link>
    )
}
import Logo from "@/app/ui/design/logo";
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { HeaderLink } from "@/lib/types";
import { Menu } from "lucide-react";
import SocialMedia from "./social-media";
export default function Header() {

    const headerLinks: HeaderLink[] = [
        { title: "Home", link: "/" },
        { title: "About", link: "/#about" },
        { title: "Portfolio", link: "/#portfolio" },
        { title: "Services", link: "/#services" },
        { title: "Contact", link: "/#contact" },
    ]

    return (
        <div className="flex flex-col items-center justify-between w-full gap-4 px-10 py-4 md:flex-row bg-background">
            <Logo />

            {/** Medium-upwards nav menu */}
            <NavigationMenu className="hidden text-lg md:block text-primary">
                <NavigationMenuList className="flex items-center gap-6">
                    {headerLinks.map((l, index) => (
                        <li key={l.title}>
                            {l.title.toLocaleLowerCase().includes("contact")
                                ? <Button asChild aria-label={l.title + " Button"}>
                                    <Link aria-label={l.title + " Link"} className="hover:text-cream hover:transition-all" href={l.link}>{l.title}</Link>
                                </Button>
                                : <Link aria-label={l.title + " Link"} href={l.link}>{l.title}</Link>}
                        </li>))}

                </NavigationMenuList>
            </NavigationMenu>

            {/** Smaller screens nav menu */}
            <div className="visible md:hidden ">
                <Sheet >
                    <SheetTrigger><Menu aria-label="Open menu - Mobile" /></SheetTrigger>
                    <SheetContent className="flex flex-col items-start ">
                        <SheetHeader>
                            <SheetTitle >
                            </SheetTitle>
                            <Logo />
                            <SheetDescription className="flex flex-col items-start gap-2 text-md">
                                <ul>
                                    {headerLinks.map((l, index) => (
                                        <li key={l.title}>
                                            <Link aria-label={l.title} href={l.link} >{l.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                        <SheetFooter className="flex flex-col items-end w-full gap-2">
                            <SocialMedia />
                            <SheetClose asChild className="w-full">
                                <Button variant="outline" size={"sm"} aria-label="Close">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
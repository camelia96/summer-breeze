import Logo from "@/components/design/logo";
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
        <div className="w-full px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />

            {/** Medium-upwards nav menu */}
            <NavigationMenu className="hidden md:block text-lg text-dark-green">
                <NavigationMenuList className="flex items-center gap-6">
                    {headerLinks.map((l, index) => (
                        l.title.toLocaleLowerCase().includes("contact")
                            ? <Button key={index} asChild>
                                <Link className="hover:text-cream hover:transition-all" href={l.link}>{l.title}</Link>
                            </Button>
                            : <Link key={index} href={l.link}>{l.title}</Link>))}

                </NavigationMenuList>
            </NavigationMenu>

            {/** Smaller screens nav menu */}

            <div className="visible md:hidden ">
                <Sheet >
                    <SheetTrigger><Menu/></SheetTrigger>
                    <SheetContent className="flex flex-col items-start bg-cream">
                        <SheetHeader>
                            <SheetTitle >
                            </SheetTitle>
                            <Logo />
                            <SheetDescription className="flex flex-col text-md  items-start gap-2">
                                {headerLinks.map((l, index) => (
                                    <Link key={index} href={l.link} >{l.title}</Link>
                                ))}
                            </SheetDescription>
                        </SheetHeader>
                        <SheetFooter className="w-full flex flex-col items-end gap-2">
                            <SocialMedia />
                            <SheetClose asChild className="w-full">
                                <Button variant="outline" className="bg-cream" size={"sm"} >Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
import Logo from "@/components/design/logo";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button";
export default function Header() {
    return (
        <div className="w-full px-10 py-6 flex justify-between items-center">
            <Logo />

            <NavigationMenu className="text-lg text-dark-green">
                <NavigationMenuList>
                    <NavigationMenuItem className="flex items-center gap-6">

                        <Link className="hover:text-light-green hover:transition-all" href="/">Home</Link>

                        <Link className="hover:text-light-green hover:transition-all" href="/docs">About</Link>

                        <Link className="hover:text-light-green hover:transition-all" href="/docs">Portfolio</Link>

                        <Link className="hover:text-light-green hover:transition-all" href="/docs">Services</Link>

                        <Button>Contact</Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
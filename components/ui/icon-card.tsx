import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Leaf } from "lucide-react"
import { ReactNode } from "react"

interface IconCardProps {
    icon: ReactNode,
    title: string,
    description: string,
}
export default function IconCard({icon, title, description}: IconCardProps) {
    return (
        <Card className="w-3/12">
            {icon}
            <CardHeader>
                <h3 className="uppercase text-4xl">{title}</h3>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}
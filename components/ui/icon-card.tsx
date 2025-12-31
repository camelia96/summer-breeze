import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Fence, Flower, PencilRuler } from "lucide-react";

interface IconCardProps {
    icon: string,
    title: string,
    description: string,
}
export default function IconCard({ icon, title, description }: IconCardProps) {

    // Service icons - responsive and dynamic
    const iconCardStyle = `hidden md:visible text-light-green`;
    const iconCardStyleResponsive = `visible md:hidden text-light-green`;

    const iconMap = {
        "Fence": [<Fence key={1} strokeWidth={1} size={60} className={iconCardStyle} />, <Fence key={2} strokeWidth={1} size={40} className={iconCardStyleResponsive} />],
        "Flower": [<Flower key={1} strokeWidth={1} size={60} className={iconCardStyle} />, <Flower key={2} strokeWidth={1} size={40} className={iconCardStyleResponsive} />],
        "Pencil Ruler": [<PencilRuler key={1} strokeWidth={1} size={60} className={iconCardStyle} />, <PencilRuler key={2} strokeWidth={1} size={40} className={iconCardStyleResponsive} />],
    }
    return (
        <Card className="md:w-3/12">
            {iconMap[icon as keyof typeof iconMap]}
            <CardHeader>
                <h3 className="uppercase text-2xl md:text-4xl">{title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-center md:text-start">{description}</p>
            </CardContent>
        </Card>
    )
}
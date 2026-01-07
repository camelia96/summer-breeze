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
    const stroke = .5;
    const size = 60;
    const responsiveSize = 40;

    // Service icons - responsive and dynamic
    const iconCardStyle = `hidden md:block text-dark-green`;
    const iconCardStyleResponsive = `block md:hidden text-dark-green`;

    const iconMap = {
        "Fence": [<Fence key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <Fence key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
        "Flower": [<Flower key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <Flower key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
        "Pencil Ruler": [<PencilRuler key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <PencilRuler key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
    }
    return (
        <Card className="md:w-4/12">
            {iconMap[icon as keyof typeof iconMap]}
            <CardHeader>
                <h3 className="uppercase text-2xl md:text-3xl">{title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-center md:text-start">{description}</p>
            </CardContent>
        </Card>
    )
}
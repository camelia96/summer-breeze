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
    const iconCardStyle = `hidden md:block text-secondary`;
    const iconCardStyleResponsive = `block md:hidden text-secondary`;

    const iconMap = {
        "Fence": [<Fence key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <Fence key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
        "Flower": [<Flower key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <Flower key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
        "Pencil Ruler": [<PencilRuler key={1} strokeWidth={stroke} size={size} className={iconCardStyle} />, <PencilRuler key={2} strokeWidth={stroke} size={responsiveSize} className={iconCardStyleResponsive} />],
    }
    return (
        <Card className="w-5/6 md:w-full">
            {iconMap[icon as keyof typeof iconMap]}
            <CardHeader>
                <h3 className="uppercase whitespace-nowrap">{title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-start">{description}</p>
            </CardContent>
        </Card>
    )
}
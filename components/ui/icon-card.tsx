import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function IconCard() {
    return (
        <Card className="w-[365px]">
            <Leaf size={60} strokeWidth={1} />
            <CardHeader>
                <h3 className="uppercase text-4xl">Service name</h3>
            </CardHeader>
            <CardContent>
                <p>A comprehensive design service for residential gardens of all sizes. We begin with a detailed site study, exploring your goals, architectural context, and natural features. The result is a bespoke concept that blends structure, flow, and planting into a cohesive and timeless layout.t</p>
            </CardContent>
        </Card>
    )
}
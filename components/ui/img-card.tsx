import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./button";
import { MapPin } from "lucide-react";
import { GardenCard } from "@/lib/types";
import { redimension } from "@/lib/utils";

interface ImageCardProps {
    card: GardenCard
}

export default function ImgCard(props: ImageCardProps) {
    return (
        
        <Card >
            <Image alt={props.card.alt_description} width={625} height={450} src={props.card.urls.regular} loading="lazy"  className="object-cover object-center w-full h-[250px] md:h-[500px]" />
            <CardContent>
                <p className="text-xl md:text-2xl lg:text-3xl italic">{props.card.title}</p>
                <div className="flex items-center md:gap-1">
                    <MapPin size={20} strokeWidth={1}/>
                    <p>{props.card.location}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button aria-label="View portfolio project" size={"sm"} variant={"outline"}>View project</Button>
            </CardFooter>
        </Card>
    )
}


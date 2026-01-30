import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { GardenCard } from "@/lib/types";

interface ImageCardProps {
    card: GardenCard
}

const propStyle = 'font-normal text-primary uppercase text-sm';
const valueStyle = 'font-semibold text-sm';

export default function ImgCard(props: ImageCardProps) {
    return (

        <Card >
            <Image  alt={props.card.alt_description} width={500} height={350} src={props.card.urls.regular} loading="lazy" priority={false} className="object-cover object-center w-full h-[250px] md:h-[22rem]" />
            <CardContent className="gap-2">
               <h3>{props.card.title}</h3>

                <div className="flex items-center w-full gap-8">
                    <div className="flex flex-col items-start ">
                        <p className={propStyle}>Year</p>
                        <p className={valueStyle}>{props.card.year}</p>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className={propStyle}>Location</p>
                        <p className={valueStyle}>{props.card.location}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button aria-label="View portfolio project" size={"sm"} variant={"outline"}>View project</Button>
            </CardFooter>
        </Card>
    )
}


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./button";
import { Leaf } from "lucide-react";

export default async function ImgCard() {
    const data = await fetch("https://picsum.photos/seed/picsum/625/450");
    console.log(data)
    return (
        <Card>
            <Image src={data.url} width={625} height={450} alt="Image" />

            <CardContent>
                <h4>An informal front garden</h4>
                <div className="flex items-center gap-1">
                    <Leaf />
                    <p>Residential garden</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant={"outline"}>View project</Button>
            </CardFooter>
        </Card>
    )
}
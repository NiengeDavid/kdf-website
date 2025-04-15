import Container from "../Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { IAwardDetails } from "@/types";

export default function AwardCards({
  AwardDetails,
}: {
  AwardDetails: IAwardDetails[];
}) {
  return (
    <div className="bg-bg2 w-full py-18 px-20">
      <Container className="w-full grid grid-cols-1 mx-auto justify-between md:grid-cols-3 gap-10">
        {AwardDetails.map((award, index) => (
          <Card key={index} className="bg-white border-0 px-2 py-8">
            <CardHeader className="w-full -mb-5">
              <Image
                src={award.image}
                alt={award.desc}
                width={30}
                height={30}
                className="mx-auto w-8 h-8 bg-bg2-accent p-1 rounded-full"
              />
            </CardHeader>
            <CardContent className="flex justify-center -mb-3">
              <h1 className="font-bold text-2xl leading-loose">
                {award.title}
              </h1>
            </CardContent>
            <CardFooter className="flex justify-center">
              <span className="text-lg font-normal  ">{award.desc}</span>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </div>
  );
}

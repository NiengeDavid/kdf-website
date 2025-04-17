import Container from "../Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { IContactDetails } from "@/data/contactPage";

export default function Cards() {
  return (
    <div className="bg-white w-full py-18 px-20">
      <Container className="w-full grid grid-cols-1 mx-auto justify-between md:grid-cols-3 gap-10">
        {IContactDetails?.cards.map((card, index) => (
          <Card key={index} className="bg-white border-2 shadow-md px-2 py-8">
            <CardHeader className="w-full -mb-8">
              <card.icon className="w-8 h-8 mx-auto bg-bg2-accent p-1.5 rounded-full text-center" />
            </CardHeader>
            <CardContent className="flex justify-center -mb-3">
              <h1 className="font-bold text-2xl leading-loose">{card.title}</h1>
            </CardContent>
            <CardFooter className="flex flex-col gap-2  text-center justify-center">
              <span className="text-sm font-normal">{card.desc}</span>
              <span className="text-sm font-semibold   ">{card.cta}</span>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </div>
  );
}

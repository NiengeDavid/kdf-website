import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { hero } from "@/types";
import Container from "../Container";
import Link from "next/link";

export default function CardBg({ heroDetails }: { heroDetails: hero }) {
  return (
    <Card className="w-full h-full bg-bg1 rounded-none py-16 md:py-24">
      <Container className="space-y-4 md:space-y-8">
        <CardHeader className="space-y-2 md:space-y-5">
          <CardTitle className="text-white text-start text-2xl font-bold md:text-5xl md:max-w-screen-md">
            {heroDetails.title}
          </CardTitle>
          <CardDescription className="text-white text-start font-medium md:text-2xl md:font-medium">
            {heroDetails.Description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-5">
          <Link
            href={heroDetails.btn1.link}
            className="bg-white text-primary-red text-lg font-medium border hover:bg-secondary-red hover:text-white border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {heroDetails.btn1.text}
          </Link>
          <Link
            href={heroDetails.btn2.link}
            className="bg-secondary-red text-white text-lg font-medium border hover:bg-white hover:text-black hover:border-transparent border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {heroDetails.btn2.text}
          </Link>
        </CardFooter>
      </Container>
    </Card>
  );
}

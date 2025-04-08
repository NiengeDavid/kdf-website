import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { homeDetails } from "@/data/homePage";
import Container from "../Container";
import Link from "next/link";

export default function CardBg() {
  return (
    <Card className="w-full h-full bg-bg1 rounded-none py-16 md:py-24">
      <Container className="space-y-4 md:space-y-8">
        <CardHeader className="space-y-2 md:space-y-5">
          <CardTitle className="text-white text-start text-2xl font-bold md:text-5xl md:max-w-screen-md">
            {homeDetails.hero.title}
          </CardTitle>
          <CardDescription className="text-white text-start font-medium md:text-2xl md:font-medium">
            {homeDetails.hero.Description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-5">
          <Link
            href={homeDetails.hero.btn1.link}
            className="bg-white text-primary-red text-lg font-medium border hover:bg-secondary-red hover:text-white border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {homeDetails.hero.btn1.text}
          </Link>
          <Link
            href={homeDetails.hero.btn2.link}
            className="bg-secondary-red text-white text-lg font-medium border hover:border-transparent border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {homeDetails.hero.btn2.text}
          </Link>
        </CardFooter>
      </Container>
    </Card>
  );
}

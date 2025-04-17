import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { aboutDetails } from '@/data/aboutPage';
  import Container from "../Container";
  
  export default function CardBg() {
    return (
      <Card className="w-full h-full bg-bg1 rounded-none py-16 md:py-24">
        <Container className="space-y-4 md:space-y-8">
          <CardHeader className="space-y-2 md:space-y-5">
            <CardTitle className="text-white text-start text-2xl font-bold md:text-5xl ">
              {aboutDetails.hero.title}
            </CardTitle>
            <CardDescription className="text-white text-start font-medium md:text-2xl md:font-medium">
              {aboutDetails.hero.Description}
            </CardDescription>
          </CardHeader>
        </Container>
      </Card>
    );
  }
  
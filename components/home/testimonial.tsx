import Container from "@/components/Container";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { homeDetails } from "@/data/homePage";

export default function Testimonials() {
  return (
    <section className="bg-white py-10 pb-20 mt-20 md:mt-28">
      <Container>
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            {homeDetails.testimonials?.title}
          </h2>
          <p className="text-black text-lg">{homeDetails.testimonials?.desc}</p>
        </div>

        {/* Carousel with Controls */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-6 pt-8"
        >
          <CarouselContent className="flex gap-6">
            {homeDetails.testimonials?.cards?.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 md:basis-1/2 lg:basis-1/3 bg-white shadow-xl border rounded-lg p-6"
              >
                <p className="text-black text-start text-lg mb-4">
                  {testimonial?.text}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-start">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial?.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute max-w-10 mx-auto flex justify-center items-center top-80 lg:top-76 bottom-0 left-0 right-0">
            <CarouselPrevious className="bg-primary-red hover:bg-primary-red/80 p-2 rounded-full" />
            <CarouselNext className="bg-primary-red hover:bg-primary-red/80 p-2 rounded-full" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

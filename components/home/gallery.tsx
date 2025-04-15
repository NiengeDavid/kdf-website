import { homeDetails } from "@/data/homePage";
import Container from "@/components/Container";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-white py-10 pb-20 mt-20 md:mt-28">
      <Container>
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            {homeDetails?.gallery?.title}
          </h2>
          <p className="text-black text-lg">
            {homeDetails?.gallery?.desc}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pt-8">
          {homeDetails?.gallery?.images.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-xl"
            >
              <Image
                src={item}
                alt="Image"
                width={320}
                height={215}
                className="w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

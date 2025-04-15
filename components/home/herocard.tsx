import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { IAboutCta } from "@/types";

interface HeroCardProps {
  data: {
    title: string;
    desc: string;
    desc2: string;
    btn: {
      text: string;
      link: string;
    };
    image: string;
    position: "left" | "right"; // Determines the position of the image
  };
}

export default function HeroCard({ data }: { data: IAboutCta }) {
  return (
    <div className="my-8">
      <Container>
        {/* Dynamic Grid Layout */}
        <div
          className={`w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
            data.position === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Section: Details */}
          <div className="text-center text-black md:text-start">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>
            <p className="text-[16px] mb-4">{data.desc}</p>
            <p className="text-[16px] mb-6">{data.desc2}</p>
            <Link
              href={data?.btn?.link || "#"}
              className="text-primary-red text-[16px] font-medium hover:underline"
            >
              {data?.btn?.text}
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={data.image}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

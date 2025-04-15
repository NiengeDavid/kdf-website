import Link from "next/link";
import { Button } from "../ui/button";

interface BannerProps {
  data: {
    title: string;
    desc: string;
    buttons: {
      text: string;
      link: string;
    }[];
  };
}

export default function Banner({ data }: { data: BannerProps["data"] }) {
  return (
    <div className="bg-primary-red text-white py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 md:mb-10">{data?.title}</h2>

        {/* Description */}
        <p className="text-lg mb-10 font-normal md:mb-14 md:font-semibold md:text-xl">{data?.desc}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
        <Link
            href={data.buttons[0].link}
            className="bg-white text-black text-lg font-medium border hover:bg-secondary-red hover:text-white border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {data.buttons[0].text}
          </Link>
        <Link
            href={data.buttons[1].link}
            className="bg-secondary-red text-white text-lg font-medium border hover:bg-white hover:text-black hover:border-transparent border-white px-5 md:px-8 py-2 rounded-sm"
          >
            {data.buttons[1].text}
          </Link>
        </div>
      </div>
    </div>
  );
}

import AwardCards from "@/components/home/awardCards";
import CardBg from "@/components/home/cardBg";
import Gallery from "@/components/home/gallery";
import HeroCard from "@/components/home/herocard";
import Banner from "@/components/home/redbanner";
import Testimonials from "@/components/home/testimonial";
import { homeDetails } from "@/data/homePage";

export default function HomePage() {
  return (
    <div className="mt-20 md:mt-36">
      <CardBg heroDetails={homeDetails.hero} />
      <AwardCards AwardDetails={homeDetails.award} />
      <HeroCard data={homeDetails.aboutCta}/>
      <Testimonials />
      <Gallery />
      <HeroCard data={homeDetails.sponsor}/>
      <Banner data={homeDetails.banner}/>
    </div>
  );
}

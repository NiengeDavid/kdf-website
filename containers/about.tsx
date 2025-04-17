import CardBg from "@/components/about/cardBg";
import Mission from "@/components/about/mission";
import OurStorySection from "@/components/about/story";
import OurTeam from "@/components/about/ourTeam";

export default function AboutPage() {
  return (
    <div className="mt-20 md:mt-36">
      <CardBg />
      <Mission />
      <OurStorySection />
      <OurTeam />
    </div>
  );
}
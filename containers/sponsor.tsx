import CardBg from "@/components/sponsor/cardBg";
import KDFScholarshipSection from "@/components/sponsor/kdfScholarshipSection";
import ImpactCard from "@/components/sponsor/impactCard";
import Founder from "@/components/sponsor/founder";
import FoundationAction from "@/components/sponsor/foundationAction";

export default function sponsorPage() {
  return (
    <div className="mt-20 md:mt-36">
      <CardBg/>
      <KDFScholarshipSection/>
      <ImpactCard/>  
      <Founder/>
      <FoundationAction/>
    </div>
  );
}

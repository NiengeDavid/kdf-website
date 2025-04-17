import Media from "@/components/gallery/media";
import CardBg from "@/components/home/cardBg";
import { IAboutDetails } from "@/data/aboutPage";

export default function GalleryContainer() {
  return (
    <div className="mt-20 md:mt-36">
     <CardBg heroDetails={IAboutDetails?.hero}/>
     <Media />
    </div>
  );
}

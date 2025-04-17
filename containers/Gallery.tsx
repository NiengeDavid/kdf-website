import Media from "@/components/gallery/media";
import CardBg from "@/components/home/cardBg";
import Banner from "@/components/home/redbanner";
import { IGalleryDetails } from "@/data/galleryPage";

export default function GalleryContainer() {
  return (
    <div className="mt-20 md:mt-36">
     <CardBg heroDetails={IGalleryDetails?.hero}/>
     <Media />
     <Banner data={IGalleryDetails?.banner}/>
    </div>
  );
}

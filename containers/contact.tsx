import Cards from "@/components/contactus/cards";
import ContactForm from "@/components/contactus/conactform";
import FAQs from "@/components/contactus/faqs";
import GoogleLocation from "@/components/contactus/googlelocation";
import CardBg from "@/components/home/cardBg";
import { IContactDetails } from "@/data/contactPage";

export default function ContactPage() {
  return (
    <div className="mt-20 md:mt-36">
      <CardBg heroDetails={IContactDetails?.hero} />
      <Cards />
      <ContactForm />
      <GoogleLocation />
      <FAQs />
    </div>
  );
}

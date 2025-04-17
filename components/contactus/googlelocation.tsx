import { IContactDetails } from "@/data/contactPage";
import Container from "../Container";

export default function GoogleLocation() {
  return (
    <div className="bg-white py-10 md:py-28">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">
            {IContactDetails.location?.title}
          </h1>
          {/* Description */}
          <p className="text-gray-600 mb-18">
            {IContactDetails.location?.desc}
          </p>
          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8353376299374!2d7.6700161115563965!3d8.987295189601152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e050b1646ed8d%3A0xcc84f2752c2115f!2sMewar%20International%20University!5e0!3m2!1sen!2sng!4v1744899050451!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { IContactDetails } from "@/data/contactPage";
import Container from "../Container";

export default function FAQs() {
  return (
    <div className="bg-bg2 py-10 md:py-28">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">
            {IContactDetails.faqs?.title}
          </h1>
          {/* Description */}
          <p className="text-gray-600 mb-6 md:mb-18">{IContactDetails.faqs?.desc}</p>

          {/* FAQ Cards */}
          <div className="space-y-4 md:space-y-8">
            {IContactDetails.faqs?.cards.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-left"
              >
                {/* Question */}
                <h2 className="text-primary-red font-bold text-lg mb-2">
                  {faq.question}
                </h2>
                {/* Answer */}
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

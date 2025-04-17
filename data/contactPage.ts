import { Phone, MapPin, MailIcon } from "lucide-react";

export const IContactDetails = {
  hero: {
    title: "Contact",
    Description:
      "Have questions about our community initiatives? We're here to help.",
  },
  cards: [
    {
      title: "Phone",
      desc: "Call us directly at:",
      cta: "+234-123456789",
      icon: Phone,
    },
    {
      title: "Email",
      desc: "Email us directly at:",
      cta: "demomail@email.com",
      icon: MapPin,
    },
    {
      title: "Location",
      desc: "Locate us directly at:",
      cta: "Mewar International University Km21, Kuchikau, Aubja-Keffi Expressway.",
      icon: MailIcon,
    },
  ],
  form: {
    title: "Send us a message",
    desc: "Fill out the form below and we'll get back to you as soon as possible.",
  },
  location: {
    title: "Find Us",
    desc: "Visit our office to learn more about our community development initiatives.",
  },
  faqs: {
    title: "Frequently Asked Question",
    desc: "Find quick answers to common questions about contacting us.",
    cards: [
      {
        question: "Is the Scholarship fully founded?",
        answer:
          "Yes, The scholarship covers 100% of the tuition while The scholarship only covers 100% of your tuition fee while accommodation, feeding, sports and other students necessities are not covered in the scholarship package.",
      },
      {
        question: "Is there a need for application fee?",
        answer:
          "No. The scholarship application does not require any sort of application fee whatsoever. Its a free application that opens up oppurtunities for studnts.",
      },
      {
        question: "Who is our Pioneer President (1st)",
        answer: "Master Jimoh LUkman Braimah",
      },
    ],
  },
};

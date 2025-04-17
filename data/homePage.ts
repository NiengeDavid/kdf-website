import { IHomeDetails } from "@/types";

export const homeDetails: IHomeDetails = {
  hero: {
    title: "Sharing Our Journey at Mewar International University",
    Description:
      "Sharing our Journey of impact as a Beneficiary of the Kwankwasiyya Development Foundation at Mewar International University.",
    btn1: {
      text: "Explore Gallery",
      link: "/gallery",
    },
    btn2: {
      text: "Learn More",
      link: "/about",
    },
  },
  award: [
    {
      title: "148+",
      desc: "Scholarship Awarded",
      image: "/assets/cap-outline.png",
    },
    {
      title: "36",
      desc: "States Covered",
      image: "/assets/location-line.png",
    },
    {
      title: "50M+",
      desc: "Fund spent",
      image: "/assets/money.png",
    },
  ],

  aboutCta: {
    title: "About KDF Scholarship Foundation",
    desc: "The Kwankwasiyya Development Foundation (KDF) Scholarship Foundation is dedicated to providing educational opportunities to talented and deserving students who face financial barriers.",
    desc2:
      "Our mission is to empower the next generation of leaders through education, fostering academic excellence and community development.",
    btn: {
      text: "Learn More About Us",
      link: "/about",
    },
    image: "/assets/hero-image.png",
    position: "right",
  },

  testimonials: {
    title: "Success Stories",
    desc: "Hear from our scholarship recipients about how KDF has impacted their educational journey.",
    cards: [
      {
        text: "The KDF Scholarship changed my life. I'm now pursuing my dream of becoming a doctor, which wouldn't have been possible without their support.",
        avatar: "/assets/avatar.png", // Replace with actual avatar image path
        name: "Ahmed Ibrahim",
        desc: "Medical Student",
      },
      {
        text: "I am grateful for the support and encouragement I received from the foundation.",
        avatar: "/assets/avatar.png", // Replace with actual avatar image path
        name: "Jane Smith",
        desc: "Engineering Student",
      },
      {
        text: "The foundation's support has been instrumental in my academic success.",
        avatar: "/assets/avatar.png", // Replace with actual avatar image path
        name: "Ali Khan",
        desc: "Law Student",
      },
    ],
  },

  gallery: {
    title: "From Our Gallery",
    desc: "A visual journey through our foundation's (MIU-KDF) work and impact across Mewar University",
    images: [
      "/assets/gallery/one.png",
      "/assets/gallery/two.png",
      "/assets/gallery/three.png",
    ],
  },

  sponsor: {
    title: "Our Sponsor",
    desc: "We're grateful for the support of the organizations that make our scholarship programs possible. Special appreciation to Eng. Dr. Rabiu Musa Kwankwanso for giving us this oppurtunity. We're grateful for the support of the organizations that make our scholarship programs possible. Special appreciation to Eng. Dr. Rabiu Musa Kwankwanso for giving us this oppurtunity.",
    image: "/assets/hero-image-2.png",
    position: "left",
  },

  banner: {
    title: "Be Part of Our Journey",
    desc: "Share with us your exciting moments at Mewar International University as a student or your encounter with a KDF student at MIU",
    buttons: [
      {
        text: "Get Involved",
        link: "/contact",
      },
      {
        text: "View Our Work",
        link: "/gallery",
      },
    ],
  }
};

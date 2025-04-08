import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  location: string;
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Supporting students through scholarships and educational opportunities.",
  quickLinks: [
    {
      text: "About Us",
      url: "/about",
      children: [
        {
          text: "Sponsors",
          url: "/sponsors",
        },
        {
          text: "Beneficiaries",
          url: "/beneficiaries",
        },
      ],
    },
    {
      text: "Gallery",
      url: "/gallery",
    },
    {
      text: "Contact",
      url: "/contact",
    },
    {
      text: "FAQs",
      url: "/faqs",
    },
  ],
  location: "KM 21 Abuja-Keffi Exprssway, Nasarawa State, Nigeria",
  email: "info@kdfscholarship.com",
  telephone: "+234 8123456789",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};

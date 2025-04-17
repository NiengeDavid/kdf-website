import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About Us",
    url: "/about",
    children: [
      {
        text: "Sponsors",
        url: "/sponsors",
      },
      // {
      //   text: "Beneficiaries",
      //   url: "/beneficiaries",
      // },
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
  // {
  //   text: "FAQs",
  //   url: "/faqs",
  // },
];

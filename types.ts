export interface IMenuItem {
  text: string;
  url: string;
  children?: IMenuItem[]; // Optional property for dropdowns
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}

export interface IHomeDetails {
  hero: hero;
  award: IAwardDetails[];
  aboutCta: IAboutCta;
  testimonials: ITestimonial;
  gallery: IHomeGallery;
  sponsor: IAboutCta;
  banner: IHomeBanner;
}

export interface hero {
  title: string;
  Description: string;
  btn1?: {
    text: string;
    link: string;
  };
  btn2?: {
    text: string;
    link: string;
  };
}

export interface IAwardDetails {
  title: string;
  desc: string;
  image: string;
}
export interface IAboutCta {
  title: string;
  desc: string;
  desc2?: string;
  btn?: {
    text: string;
    link: string;
  };
  image: string;
  position?: string;
}

interface ITestimonial {
  title: string;
  desc: string;
  cards: ICard[];
}

interface ICard {
  text: string;
  avatar: string;
  name: string;
  desc: string;
}

interface IHomeGallery {
  title: string;
  desc: string;
  images: string[];
}

export interface IHomeBanner {
  title: string;
  desc: string;
  buttons: IButton[]
}

interface IButton {
  text: string;
    link: string;
}
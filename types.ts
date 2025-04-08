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

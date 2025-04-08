export interface IMenuItem {
  text: string;
  url: string;
  children?: IMenuItem[]; // Optional property for dropdowns
}

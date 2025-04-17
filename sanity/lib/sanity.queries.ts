export const galleryQuery = `
  *[_type == "gallery"] {
    _id,
    image {
      asset -> {
        url
      }
    },
    name,
    department -> {
        name
    },
    year
  }
`;

export interface Gallery {
  _id: string;
  name?: string;
  image?: any;
  department: any;
  year?: string;
}

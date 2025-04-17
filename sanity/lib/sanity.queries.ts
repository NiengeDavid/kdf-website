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

export const highlightVideoQuery = `
  *[_type == "highlightVideo"] {
    _id,
    title,
    video {
      asset -> {
        url
      }
    },
    date,
    location
  }
`;

export interface HighlightVideo {
  _id: string;
  title: string;
  video: {
    asset: {
      url: string;
    };
  };
  date: string;
  location: string;
}

export interface Gallery {
  _id: string;
  name?: string;
  image?: any;
  department: any;
  year?: string;
}

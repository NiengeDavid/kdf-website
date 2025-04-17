export const galleryQuery = `
  *[_type == "gallery"] {
    _id,
    image {
      asset -> {
        url
      }
    },
    name,
    department,
    year
  }
`;
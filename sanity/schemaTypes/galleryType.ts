import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: ImageIcon,
  fields: [
    // Image field
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enable image cropping
      },
    }),

    // Title or description of the image
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    // Reference to department
    defineField({
      name: "department",
      title: "Department",
      type: "reference",
      to: [{ type: "department" }],
    }),

    // Reference to faculty
    defineField({
      name: "faculty",
      title: "Faculty",
      type: "reference",
      to: [{ type: "faculty" }],
    }),

    // Year field
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "The year associated with this gallery item (e.g., 2025).",
    }),
  ],
});

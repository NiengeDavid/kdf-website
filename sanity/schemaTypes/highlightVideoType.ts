import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const highlightVideoType = defineType({
  name: "highlightVideo",
  title: "Highlight Video",
  type: "document",
  icon: PlayIcon,
  fields: [
    // Title field
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),

    // Video field
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*", // Restrict to video files
      },
      validation: (Rule) => Rule.required(),
    }),

    // Date field
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    // Location field
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    }),
  ],
});
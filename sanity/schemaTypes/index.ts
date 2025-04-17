import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { departmentType } from "./departmentType";
import { facultyType } from "./facultyType";
import { galleryType } from "./galleryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    departmentType,
    facultyType,
    galleryType,
  ],
};

import type { TinaField } from "tinacms";
export function blog_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
  ] as TinaField[];
}
export function project_templateFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "source",
      label: "source",
    },
    {
      type: "string",
      name: "website",
      label: "website",
    },
    {
      type: "string",
      name: "technologies",
      label: "technologies",
      list: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}

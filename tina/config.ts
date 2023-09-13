import { defineConfig } from "tinacms";
import { blog_templateFields } from "./templates";
import { project_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "54347dca-876d-4d6a-ba5b-7f99fc5f648d", // Get this from tina.io
  token: "4edc30533cfb7cb1eb9b13b3901be9556b12e7c5", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "src/website/blog",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "src/website/projects",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...project_templateFields(),
        ],
      },
    ],
  },
});

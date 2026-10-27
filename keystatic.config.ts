// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'cosmo/nickcosmo',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
        cover: fields.image({
          label: "Cover Image",
          directory: "src/content/projects",
          publicPath: "/src/content/projects/",
        }),
      },
    }),
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*/",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/content/pages",
              publicPath: "/src/content/pages/",
            },
          },
        }),
      },
    }),
  },
});
export const youtubeBlock = {
  name: "youtube_block",
  label: "YouTube Video",
  type: "object",
  ui: {
    itemProps: (item: any) => ({
      label: item?.title || "YouTube Video",
    }),
  },
  fields: [
    {
      name: "title",
      label: "Video Title",
      type: "string",
    },
    {
      name: "videoId",
      label: "YouTube Video ID",
      type: "string",
      description: "Paste only the YouTube ID (e.g., dQw4w9WgXcQ)",
    },
  ],
};

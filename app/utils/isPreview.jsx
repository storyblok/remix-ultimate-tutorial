const isServer = typeof window === "undefined";
const isPreview = () => {
  let isPreviewValue = isServer
    ? process.env.STORYBLOK_IS_PREVIEW
    : window.env.STORYBLOK_IS_PREVIEW;

  return isPreviewValue === "yes";
};
export { isPreview };

import { storyblokEditable } from "@storyblok/react";

const Post = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      <h1>{blok.headline}</h1>
      <p>{blok.teaser}</p>
    </main>
  );
};

export default Post;

import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2> {blok.headline} </h2>
    </div>
  );
};

export default Teaser;
import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2> {blok.name} </h2>
    </div>
  );
};

export default Feature;
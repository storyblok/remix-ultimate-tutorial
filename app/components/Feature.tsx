import { storyblokEditable } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    name: string;
  }
}

const Feature = ({ blok }: Blok) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.name}</h2>
    </div>
  );
};
export default Feature;
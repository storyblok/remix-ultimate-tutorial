import { storyblokEditable } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    headline: string;
  }
}

const Teaser = ({ blok }: Blok) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.headline}</h2>
    </div>
  );
};
export default Teaser;
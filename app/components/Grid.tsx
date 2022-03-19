import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    columns: [
      {
        _uid: string;
      }
    ]
  }
}

const Grid = ({ blok }: Blok) => (
  <ul {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);
export default Grid;
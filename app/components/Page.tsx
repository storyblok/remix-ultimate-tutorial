import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    body: [
      {
        _uid: string
      }
    ]
  }
}

const Page = ({ blok }: Blok) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
};
export default Page;
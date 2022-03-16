import { json, useLoaderData } from "remix";
import { getStory } from "~/story";

import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import Layout from "../components/Layout";

export const loader = async ({ params }) => {
  return json(await getStory(params.slug));
};

export default function Page() {
  const story = useLoaderData();

  const newStory = useStoryblokState(story);

  return (
    <Layout>
      <StoryblokComponent blok={newStory.content} />
    </Layout>
  );
}

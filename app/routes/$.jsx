import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page() {
  let story = useLoaderData();
  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
};

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  // Nested folder routing example:
  // let blogSlug = params["*"] === "blog/" ? "blog/home" : null;

  let sbParams = {
    version: "draft"
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  // Or `cdn/stories/${blogSlug ? blogSlug : slug}` if you follow the example above
  return json(data?.story);
};

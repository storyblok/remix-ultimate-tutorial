import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  let blogSlug = params["*"] === "blog/" ? "blog/home" : null;

  let sbParams = {
    version: "draft",
  };

  let { data } = await getStoryblokApi()
    .get(`cdn/stories/${blogSlug ? blogSlug : slug}`, sbParams)
    .catch((e) => {
      console.log("e", e);
      return { data: null };
    });

  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ story: data?.story });
};

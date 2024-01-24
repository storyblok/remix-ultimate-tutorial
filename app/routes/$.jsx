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

export const loader = async ({ params, preview = false }) => {
  let slug = params["*"] ?? "home";
  let blogSlug = params["*"] === "blog/" ? "blog/home" : null;

  let sbParams = {
    version: "draft",
    resolve_relations: ["popular-articles.articles"],
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await getStoryblokApi().get(
    `cdn/stories/${blogSlug ? blogSlug : slug}`,
    sbParams
  );
  let { data: articles } = await getStoryblokApi().get(`cdn/stories`, {
    version: "draft", // or 'published'
    starts_with: "blog/",
    is_startpage: 0,
  });
  return json({ story: data?.story, articles: articles?.stories }, preview);
};

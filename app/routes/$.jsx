import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"],
  });

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
    resolve_relations: ["popular-articles.articles"],
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

  let { data: articles } = await getStoryblokApi().get(`cdn/stories`, {
    version: "draft", // or 'published'
    starts_with: "blog/",
    is_startpage: 0,
  });
  return json({ story: data?.story, articles: articles?.stories }, preview);
};

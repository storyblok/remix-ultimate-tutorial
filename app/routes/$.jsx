import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { languages } from "../utils/langs";

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

export const loader = async ({ params, request, preview = false }) => {
  let slug = params["*"] ?? "home";
  let blogSlug = params["*"] === "blog/" ? "blog/home" : null;

  // Extract the language from the URL
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  let lang = pathParts[1];

  // If the language is not one of the supported languages, it's 'en' and the first part of the URL is part of the slug

  if (!languages.includes(lang)) {
    lang = "en";
  } else {
    // Remove the language part from the slug
    if (pathParts[0] === "") {
      pathParts.shift(); // Remove the first empty string from the array
    }
    pathParts.shift(); // Remove the language part from the array
  }

  slug = pathParts.join("/") || slug;
  slug = slug === "/" || slug === lang ? "home" : slug;

  slug = blogSlug ? blogSlug : slug;

  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  let sbParams = {
    version: "draft",
    resolve_relations: ["popular-articles.articles"],
    language: lang,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  let { data: articles } = await getStoryblokApi().get(`cdn/stories`, {
    version: "draft", // or 'published'
    starts_with: "blog/",
    is_startpage: 0,
  });
  return json({ story: data?.story, articles: articles?.stories }, preview);
};

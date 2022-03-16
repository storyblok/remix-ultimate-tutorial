import { getStoryblokApi } from "@storyblok/react";

export async function getStory(slug) {
  slug = slug ?? "home";

  let params = {
    version: "draft",
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, params);

  return data?.story;
}

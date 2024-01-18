import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { json } from "@remix-run/node";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Layout from "./components/Layout";
import MenuLink from "./components/MenuLink";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  menu_link: MenuLink,
};

storyblokInit({
  accessToken: "U4mv54ozRXmfv2EraUpiTwtt",
  use: [apiPlugin],
  components,
});

export const links = () => [{ rel: "stylesheet", href: stylesheet }];
export const loader = async () => {
  const { data } = await getStoryblokApi().get("cdn/stories/config", {
    version: "draft",
    resolve_links: "url",
  });

  return json({
    headerMenu: data.story.content.header_menu,
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

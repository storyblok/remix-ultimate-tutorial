import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Article from "./components/Article";
import AllArticles from "./components/AllArticles";
import PopularArticles from "./components/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  article: Article,
  "all-articles": AllArticles,
  "popular-articles": PopularArticles,
};

storyblokInit({
  accessToken: "MX4ACP2TErhMWLJh8QIFlwtt",
  use: [apiPlugin],
  components,
});

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

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
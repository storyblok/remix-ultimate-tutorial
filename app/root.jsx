import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Teaser from "./components/Teaser";
import Page from "./components/Page";
import Post from "./components/Post";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  post: Post,
};

import styles from "./styles/app.css";

storyblokInit({
  accessToken: "4hK4f9QPB5QjLdkuqhbRDQtt",
  // accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  // for spaces located in the US:
  // apiOptions: {
  //   region: "us",
  // },
  use: [apiPlugin],
  components,
});

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

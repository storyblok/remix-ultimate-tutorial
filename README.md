# Remix Storyblok Boilerplate

This repository is a Remix [Storyblok](https://www.storyblok.com) starter template used in following [5 minute tutorial](https://www.storyblok.com/tp/headless-cms-remix).

## Requirements

To use this project you need a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com). It's free.

## How to get started?

Read the [Remix tutorial](https://www.storyblok.com/tp/headless-cms-remix) about connecting Storyblok with Remix.

### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/storyblok-remix-boilerplate.git
```

### 2. Install all dependecies

```sh
npm install
```

### 3. Adding the Access token

Create a new empty Space and exchange the preview token of your new space with the `accessToken` in `app/root.jsx`.

### 4. Run your project

Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### 5. Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

#### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

#### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## Resources

- [Remix Docs](https://remix.run/docs)
- [Storyblok Tutorial]()

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react12 = require("@remix-run/react"), import_react13 = require("@storyblok/react");

// app/components/Feature.jsx
var import_react2 = require("@storyblok/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), import_react3 = require("react"), Feature = ({ blok }) => /* @__PURE__ */ (0, import_react3.createElement)("div", { ...(0, import_react2.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: [
  " ",
  blok.name,
  " "
] }, void 0, !0, {
  fileName: "app/components/Feature.jsx",
  lineNumber: 6,
  columnNumber: 7
}, this)), Feature_default = Feature;

// app/components/Grid.jsx
var import_react4 = require("@storyblok/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), import_react5 = require("react"), Grid = ({ blok }) => /* @__PURE__ */ (0, import_react5.createElement)("ul", { ...(0, import_react4.storyblokEditable)(blok), key: blok._uid }, blok.columns.map((blok2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.StoryblokComponent, { blok: blok2 }, void 0, !1, {
  fileName: "app/components/Grid.jsx",
  lineNumber: 7,
  columnNumber: 9
}, this) }, blok2._uid, !1, {
  fileName: "app/components/Grid.jsx",
  lineNumber: 6,
  columnNumber: 7
}, this))), Grid_default = Grid;

// app/components/Teaser.jsx
var import_react6 = require("@storyblok/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), import_react7 = require("react"), Teaser = ({ blok }) => /* @__PURE__ */ (0, import_react7.createElement)("div", { ...(0, import_react6.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: [
  " ",
  blok.headline,
  " "
] }, void 0, !0, {
  fileName: "app/components/Teaser.jsx",
  lineNumber: 6,
  columnNumber: 7
}, this)), Teaser_default = Teaser;

// app/components/Page.jsx
var import_react8 = require("@storyblok/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), import_react9 = require("react"), Page = ({ blok }) => /* @__PURE__ */ (0, import_react9.createElement)("main", { ...(0, import_react8.storyblokEditable)(blok), key: blok._uid }, blok.body.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
  fileName: "app/components/Page.jsx",
  lineNumber: 6,
  columnNumber: 7
}, this))), Page_default = Page;

// app/components/Post.jsx
var import_react10 = require("@storyblok/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), import_react11 = require("react"), Post = ({ blok }) => /* @__PURE__ */ (0, import_react11.createElement)("main", { ...(0, import_react10.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
  fileName: "app/components/Post.jsx",
  lineNumber: 6,
  columnNumber: 7
}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: blok.teaser }, void 0, !1, {
  fileName: "app/components/Post.jsx",
  lineNumber: 7,
  columnNumber: 7
}, this)), Post_default = Post;

// app/styles/app.css
var app_default = "/build/_assets/app-VETKUVVU.css";

// app/root.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), components = {
  feature: Feature_default,
  grid: Grid_default,
  teaser: Teaser_default,
  page: Page_default,
  post: Post_default
};
(0, import_react13.storyblokInit)({
  accessToken: "18RhRN8uADJ8eVGLo4Borgtt",
  use: [import_react13.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Page2,
  loader: () => loader
});

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Page2,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("@storyblok/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Page2() {
  let story = (0, import_react14.useLoaderData)();
  return story = (0, import_react15.useStoryblokState)(story), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react15.StoryblokComponent, { blok: story.content }, void 0, !1, {
    fileName: "app/routes/$.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
var loader = async ({ params }) => {
  let slug = params["*"] ?? "home", sbParams = {
    version: "draft"
  }, { data } = await (0, import_react15.getStoryblokApi)().get(`cdn/stories/${slug}`, sbParams);
  return (0, import_node.json)(data == null ? void 0 : data.story);
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8b3c3eed", entry: { module: "/build/entry.client-HHZ6PIFN.js", imports: ["/build/_shared/chunk-YRR6G3SJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2W7EOQDT.js", imports: ["/build/_shared/chunk-MSJAWJYL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-BY2A7KOF.js", imports: ["/build/_shared/chunk-24L4RX7O.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3W2WZGIF.js", imports: ["/build/_shared/chunk-24L4RX7O.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8B3C3EED.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

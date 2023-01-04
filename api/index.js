var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// route:/Users/alexaspalato/Downloads/storyblok-remix-boilerplate/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react7 = require("@remix-run/react");
var import_react8 = require("@storyblok/react");

// app/components/Feature.jsx
var import_react2 = require("@storyblok/react");
var Feature = ({ blok }) => {
  return /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, (0, import_react2.storyblokEditable)(blok)), {
    key: blok._uid
  }), /* @__PURE__ */ React.createElement("h2", null, " ", blok.name, " "));
};
var Feature_default = Feature;

// app/components/Grid.jsx
var import_react3 = require("@storyblok/react");
var Grid = ({ blok }) => /* @__PURE__ */ React.createElement("ul", __spreadProps(__spreadValues({}, (0, import_react3.storyblokEditable)(blok)), {
  key: blok._uid
}), blok.columns.map((blok2) => /* @__PURE__ */ React.createElement("li", {
  key: blok2._uid
}, /* @__PURE__ */ React.createElement(import_react3.StoryblokComponent, {
  blok: blok2
}))));
var Grid_default = Grid;

// app/components/Teaser.jsx
var import_react4 = require("@storyblok/react");
var Teaser = ({ blok }) => {
  return /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, (0, import_react4.storyblokEditable)(blok)), {
    key: blok._uid
  }), /* @__PURE__ */ React.createElement("h2", null, " ", blok.headline, " "));
};
var Teaser_default = Teaser;

// app/components/Page.jsx
var import_react5 = require("@storyblok/react");
var Page = ({ blok }) => /* @__PURE__ */ React.createElement("main", __spreadProps(__spreadValues({}, (0, import_react5.storyblokEditable)(blok)), {
  key: blok._uid
}), blok.body.map((nestedBlok) => /* @__PURE__ */ React.createElement(import_react5.StoryblokComponent, {
  blok: nestedBlok,
  key: nestedBlok._uid
})));
var Page_default = Page;

// app/components/Post.jsx
var import_react6 = require("@storyblok/react");
var Post = ({ blok }) => {
  return /* @__PURE__ */ React.createElement("main", __spreadProps(__spreadValues({}, (0, import_react6.storyblokEditable)(blok)), {
    key: blok._uid
  }), /* @__PURE__ */ React.createElement("h1", null, blok.headline), /* @__PURE__ */ React.createElement("p", null, blok.teaser));
};
var Post_default = Post;

// app/styles/app.css
var app_default = "/build/_assets/app-5ABBHUVW.css";

// route:/Users/alexaspalato/Downloads/storyblok-remix-boilerplate/app/root.jsx
var components = {
  feature: Feature_default,
  grid: Grid_default,
  teaser: Teaser_default,
  page: Page_default,
  post: Post_default
};
(0, import_react8.storyblokInit)({
  accessToken: "4hK4f9QPB5QjLdkuqhbRDQtt",
  use: [import_react8.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react7.Meta, null), /* @__PURE__ */ React.createElement(import_react7.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react7.Outlet, null), /* @__PURE__ */ React.createElement(import_react7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react7.Scripts, null), /* @__PURE__ */ React.createElement(import_react7.LiveReload, null)));
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// route:/Users/alexaspalato/Downloads/storyblok-remix-boilerplate/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Page2,
  loader: () => loader
});

// app/routes/$.jsx
var import_node = require("@remix-run/node");
var import_react9 = require("@remix-run/react");
var import_react10 = require("@storyblok/react");
function Page2() {
  let story = (0, import_react9.useLoaderData)();
  story = (0, import_react10.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react10.StoryblokComponent, {
    blok: story.content
  });
}
var loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  let sbParams = {
    version: "draft"
  };
  let { data } = await (0, import_react10.getStoryblokApi)().get(`cdn/stories/${slug}`, sbParams);
  return (0, import_node.json)(data == null ? void 0 : data.story);
};

// route:/Users/alexaspalato/Downloads/storyblok-remix-boilerplate/app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Page3,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var import_react11 = require("@remix-run/react");
var import_react12 = require("@storyblok/react");
function Page3() {
  let story = (0, import_react11.useLoaderData)();
  story = (0, import_react12.useStoryblokState)(story);
  return /* @__PURE__ */ React.createElement(import_react12.StoryblokComponent, {
    blok: story.content
  });
}
var loader2 = async ({ params }) => {
  let slug = params["*"] ?? "home";
  let sbParams = {
    version: "draft"
  };
  let { data } = await (0, import_react12.getStoryblokApi)().get(`cdn/stories/${slug}`, sbParams);
  return (0, import_node2.json)(data == null ? void 0 : data.story);
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "5abbf530", "entry": { "module": "/build/entry.client-YJECOPLX.js", "imports": ["/build/_shared/chunk-JXXG7R47.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CXG42QIF.js", "imports": ["/build/_shared/chunk-R5DCY2M2.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$-ABQZZVCT.js", "imports": ["/build/_shared/chunk-DEEIKTE4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-GLFRRXPV.js", "imports": ["/build/_shared/chunk-DEEIKTE4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5ABBF530.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
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
    index: true,
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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL2FsZXhhc3BhbGF0by9Eb3dubG9hZHMvc3RvcnlibG9rLXJlbWl4LWJvaWxlcnBsYXRlL2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GZWF0dXJlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9HcmlkLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UZWFzZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhZ2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QuanN4IiwgInJvdXRlOi9Vc2Vycy9hbGV4YXNwYWxhdG8vRG93bmxvYWRzL3N0b3J5Ymxvay1yZW1peC1ib2lsZXJwbGF0ZS9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvcm91dGVzLyQuanN4IiwgInJvdXRlOi9Vc2Vycy9hbGV4YXNwYWxhdG8vRG93bmxvYWRzL3N0b3J5Ymxvay1yZW1peC1ib2lsZXJwbGF0ZS9hcHAvcm91dGVzLyQuanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHsgc3RvcnlibG9rSW5pdCwgYXBpUGx1Z2luIH0gZnJvbSBcIkBzdG9yeWJsb2svcmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gXCIuL2NvbXBvbmVudHMvRmVhdHVyZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgVGVhc2VyIGZyb20gXCIuL2NvbXBvbmVudHMvVGVhc2VyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL2NvbXBvbmVudHMvUG9zdFwiO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBmZWF0dXJlOiBGZWF0dXJlLFxuICBncmlkOiBHcmlkLFxuICB0ZWFzZXI6IFRlYXNlcixcbiAgcGFnZTogUGFnZSxcbiAgcG9zdDogUG9zdCxcbn07XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuc3RvcnlibG9rSW5pdCh7XG4gIGFjY2Vzc1Rva2VuOiBcIjRoSzRmOVFQQjVRakxka3VxaGJSRFF0dFwiLFxuICAvLyBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuU1RPUllCTE9LX1BSRVZJRVdfVE9LRU4sXG4gIC8vIGZvciBzcGFjZXMgbG9jYXRlZCBpbiB0aGUgVVM6XG4gIC8vIGFwaU9wdGlvbnM6IHtcbiAgLy8gICByZWdpb246IFwidXNcIixcbiAgLy8gfSxcbiAgdXNlOiBbYXBpUGx1Z2luXSxcbiAgY29tcG9uZW50cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG4iLCAiaW1wb3J0IHsgc3RvcnlibG9rRWRpdGFibGUgfSBmcm9tIFwiQHN0b3J5Ymxvay9yZWFjdFwiO1xuXG5jb25zdCBGZWF0dXJlID0gKHsgYmxvayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4uc3RvcnlibG9rRWRpdGFibGUoYmxvayl9IGtleT17Ymxvay5fdWlkfT5cbiAgICAgIDxoMj4ge2Jsb2submFtZX0gPC9oMj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XG4iLCAiaW1wb3J0IHsgc3RvcnlibG9rRWRpdGFibGUsIFN0b3J5Ymxva0NvbXBvbmVudCB9IGZyb20gXCJAc3RvcnlibG9rL3JlYWN0XCI7XG5cbmNvbnN0IEdyaWQgPSAoeyBibG9rIH0pID0+IChcbiAgPHVsIHsuLi5zdG9yeWJsb2tFZGl0YWJsZShibG9rKX0ga2V5PXtibG9rLl91aWR9PlxuICAgIHtibG9rLmNvbHVtbnMubWFwKChibG9rKSA9PiAoXG4gICAgICA8bGkga2V5PXtibG9rLl91aWR9PlxuICAgICAgICA8U3RvcnlibG9rQ29tcG9uZW50IGJsb2s9e2Jsb2t9IC8+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICA8L3VsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsICJpbXBvcnQgeyBzdG9yeWJsb2tFZGl0YWJsZSB9IGZyb20gXCJAc3RvcnlibG9rL3JlYWN0XCI7XG5cbmNvbnN0IFRlYXNlciA9ICh7IGJsb2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnN0b3J5Ymxva0VkaXRhYmxlKGJsb2spfSBrZXk9e2Jsb2suX3VpZH0+XG4gICAgICA8aDI+IHtibG9rLmhlYWRsaW5lfSA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhc2VyO1xuIiwgImltcG9ydCB7IHN0b3J5Ymxva0VkaXRhYmxlLCBTdG9yeWJsb2tDb21wb25lbnQgfSBmcm9tIFwiQHN0b3J5Ymxvay9yZWFjdFwiO1xuXG5jb25zdCBQYWdlID0gKHsgYmxvayB9KSA9PiAoXG4gIDxtYWluIHsuLi5zdG9yeWJsb2tFZGl0YWJsZShibG9rKX0ga2V5PXtibG9rLl91aWR9PlxuICAgIHtibG9rLmJvZHkubWFwKChuZXN0ZWRCbG9rKSA9PiAoXG4gICAgICA8U3RvcnlibG9rQ29tcG9uZW50IGJsb2s9e25lc3RlZEJsb2t9IGtleT17bmVzdGVkQmxvay5fdWlkfSAvPlxuICAgICkpfVxuICA8L21haW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgImltcG9ydCB7IHN0b3J5Ymxva0VkaXRhYmxlIH0gZnJvbSBcIkBzdG9yeWJsb2svcmVhY3RcIjtcblxuY29uc3QgUG9zdCA9ICh7IGJsb2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIHsuLi5zdG9yeWJsb2tFZGl0YWJsZShibG9rKX0ga2V5PXtibG9rLl91aWR9PlxuICAgICAgPGgxPntibG9rLmhlYWRsaW5lfTwvaDE+XG4gICAgICA8cD57Ymxvay50ZWFzZXJ9PC9wPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCAiZXhwb3J0IHsgZGVmYXVsdCwgbG9hZGVyIH0gZnJvbSBcIi4vJFwiO1xuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgZ2V0U3RvcnlibG9rQXBpLFxuICB1c2VTdG9yeWJsb2tTdGF0ZSxcbiAgU3RvcnlibG9rQ29tcG9uZW50LFxufSBmcm9tIFwiQHN0b3J5Ymxvay9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBsZXQgc3RvcnkgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHN0b3J5ID0gdXNlU3RvcnlibG9rU3RhdGUoc3RvcnkpO1xuXG4gIHJldHVybiA8U3RvcnlibG9rQ29tcG9uZW50IGJsb2s9e3N0b3J5LmNvbnRlbnR9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGxldCBzbHVnID0gcGFyYW1zW1wiKlwiXSA/PyBcImhvbWVcIjtcbiAgLy8gTmVzdGVkIGZvbGRlciByb3V0aW5nIGV4YW1wbGU6XG4gIC8vIGxldCBibG9nU2x1ZyA9IHBhcmFtc1tcIipcIl0gPT09IFwiYmxvZy9cIiA/IFwiYmxvZy9ob21lXCIgOiBudWxsO1xuXG4gIGxldCBzYlBhcmFtcyA9IHtcbiAgICB2ZXJzaW9uOiBcImRyYWZ0XCJcbiAgfTtcblxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBnZXRTdG9yeWJsb2tBcGkoKS5nZXQoYGNkbi9zdG9yaWVzLyR7c2x1Z31gLCBzYlBhcmFtcyk7XG4gIC8vIE9yIGBjZG4vc3Rvcmllcy8ke2Jsb2dTbHVnID8gYmxvZ1NsdWcgOiBzbHVnfWAgaWYgeW91IGZvbGxvdyB0aGUgZXhhbXBsZSBhYm92ZVxuICByZXR1cm4ganNvbihkYXRhPy5zdG9yeSk7XG59O1xuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgZ2V0U3RvcnlibG9rQXBpLFxuICB1c2VTdG9yeWJsb2tTdGF0ZSxcbiAgU3RvcnlibG9rQ29tcG9uZW50LFxufSBmcm9tIFwiQHN0b3J5Ymxvay9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBsZXQgc3RvcnkgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHN0b3J5ID0gdXNlU3RvcnlibG9rU3RhdGUoc3RvcnkpO1xuXG4gIHJldHVybiA8U3RvcnlibG9rQ29tcG9uZW50IGJsb2s9e3N0b3J5LmNvbnRlbnR9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGxldCBzbHVnID0gcGFyYW1zW1wiKlwiXSA/PyBcImhvbWVcIjtcbiAgLy8gTmVzdGVkIGZvbGRlciByb3V0aW5nIGV4YW1wbGU6XG4gIC8vIGxldCBibG9nU2x1ZyA9IHBhcmFtc1tcIipcIl0gPT09IFwiYmxvZy9cIiA/IFwiYmxvZy9ob21lXCIgOiBudWxsO1xuXG4gIGxldCBzYlBhcmFtcyA9IHtcbiAgICB2ZXJzaW9uOiBcImRyYWZ0XCJcbiAgfTtcblxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBnZXRTdG9yeWJsb2tBcGkoKS5nZXQoYGNkbi9zdG9yaWVzLyR7c2x1Z31gLCBzYlBhcmFtcyk7XG4gIC8vIE9yIGBjZG4vc3Rvcmllcy8ke2Jsb2dTbHVnID8gYmxvZ1NsdWcgOiBzbHVnfWAgaWYgeW91IGZvbGxvdyB0aGUgZXhhbXBsZSBhYm92ZVxuICByZXR1cm4ganNvbihkYXRhPy5zdG9yeSk7XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzVhYmJmNTMwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1ZSkVDT1BMWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSlhYRzdSNDcuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUNYRzQyUUlGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SNURDWTJNMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvJCc6eydpZCc6J3JvdXRlcy8kJywncGFyZW50SWQnOidyb290JywncGF0aCc6JyonLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvJC1BQlFaWlZDVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUtURTQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtR0xGUlJYUFYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlLVEU0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01QUJCRjUzMC5qcyd9OyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvYWxleGFzcGFsYXRvL0Rvd25sb2Fkcy9zdG9yeWJsb2stcmVtaXgtYm9pbGVycGxhdGUvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FsZXhhc3BhbGF0by9Eb3dubG9hZHMvc3RvcnlibG9rLXJlbWl4LWJvaWxlcnBsYXRlL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYWxleGFzcGFsYXRvL0Rvd25sb2Fkcy9zdG9yeWJsb2stcmVtaXgtYm9pbGVycGxhdGUvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FsZXhhc3BhbGF0by9Eb3dubG9hZHMvc3RvcnlibG9rLXJlbWl4LWJvaWxlcnBsYXRlL2FwcC9yb3V0ZXMvJC5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzLyRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzLyRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfVxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0NBLFlBQXVCOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNEI7QUFDNUIsb0JBQStCO0FB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

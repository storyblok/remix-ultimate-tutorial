import { useLocation } from "@remix-run/react";

//You can have the languages in an utils file so it can be reused.
let languages = ["en", "es"];
const useCurrentLanguage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentLanguage =
    languages.find((lang) => currentPath.startsWith(`/${lang}`)) || "en";
  return { currentPath, currentLanguage };
};

function getTransLink(slug, language) {
  return language === "en" ? slug : `/${language}${slug}`;
}

export { getTransLink, languages, useCurrentLanguage };

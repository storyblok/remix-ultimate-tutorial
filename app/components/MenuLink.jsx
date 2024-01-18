import { NavLink } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
NavLink;
const MenuLink = ({ blok }) => {
  return (
    <NavLink
      to={blok.link.cached_url}
      prefetch="intent"
      className="text-base font-medium text-gray-500 hover:text-gray-900"
      {...storyblokEditable(blok)}
    >
      {blok.link.story.name}
    </NavLink>
  );
};
export default MenuLink;

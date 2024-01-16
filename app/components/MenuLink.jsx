import { NavLink } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";
NavLink;
const MenuLink = ({ blok }) => (
  <NavLink
    href={blok.link.cached_url}
    prefetch="intent"
    {...storyblokEditable(blok)}
  >
    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
      {blok.name}
    </a>
  </NavLink>
);
export default MenuLink;

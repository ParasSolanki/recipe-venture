import * as ROUTES from "../constants/routes";
import FacebookIcon from "../icons/social/FacebookIcon";
import TwitterIcon from "../icons/social/TwitterIcon";
import LinkedInIcon from "../icons/social/LinkedInIcon";
import InstagramIcon from "../icons/social/InstagramIcon";
import PinterestIcon from "../icons/social/PinterestIcon";

export const links = [
  {
    id: 1,
    name: "Home",
    href: ROUTES.HOME,
    title: "Home",
  },
  {
    id: 2,
    name: "Recipes",
    href: ROUTES.RECIPES,
    title: "Recipes",
  },
  {
    id: 3,
    name: "Cuisines",
    href: ROUTES.CUISINES,
    title: "Cuisines",
  },
  {
    id: 4,
    name: "About Us",
    href: ROUTES.ABOUT_US,
    title: "About Us",
  },
  {
    id: 5,
    name: "Privacy Policy",
    href: ROUTES.PRIVACY,
    title: "Privacy Policy",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/recipeventure",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://www.twitter.com/RecipeVenture",
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/recipeventure",
    icon: <InstagramIcon />,
  },
  {
    id: 4,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/recipeventure",
    icon: <LinkedInIcon />,
  },
  {
    id: 5,
    name: "Pinterest",
    href: "https://in.pinterest.com/recipeventure",
    icon: <PinterestIcon />,
  },
];

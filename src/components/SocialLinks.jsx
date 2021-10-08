import React from "react";
import FacebookIcon from "../icons/social/FacebookIcon";
import LinkedInIcon from "../icons/social/LinkedInIcon";
import MailIcon from "../icons/social/MailIcon";
import TwitterIcon from "../icons/social/TwitterIcon";
import * as PATHS from "../constants/paths";

export default function SocialLinks({ recipe }) {
  const { name, slug } = recipe;
  const url = encodeURIComponent(`${PATHS.URL}/${slug}`);
  const facebookURL = `https://www.facebook.com/sharer.php?u=${url}`;
  const twitterURL = `https://twitter.com/intent/tweet?url=${url}&text=${name}`;
  const linkedinURL = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${name.replace(
    / /g,
    "%20"
  )}`;
  const mailURL = `mailto:?subject=${name}&body=Check%20out%20this%20recipe%20on%20${url}`;

  return (
    <div className="fixed w-full left-0 bottom-0 z-50 flex flex-row flex-shrink-0 items-center justify-between lg:w-auto lg:block lg:bottom-1/3 2xl:bottom-1/2">
      <a
        href={facebookURL}
        title="Facebook"
        tabIndex="0"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(59, 89, 152)" }}
      >
        <span className="sr-only">Share on facebook</span>
        <span className="text-lg">
          <FacebookIcon />
        </span>
      </a>
      <a
        href={twitterURL}
        title="Twitter"
        tabIndex="0"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(29, 161, 242)" }}
      >
        <span className="sr-only">Share on twitter</span>

        <span className="text-lg">
          <TwitterIcon />
        </span>
      </a>
      <a
        href={linkedinURL}
        title="LinkedIn"
        tabIndex="0"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(0, 119, 181)" }}
      >
        <span className="sr-only">Share on linkedin</span>

        <span className="text-lg">
          <LinkedInIcon />
        </span>
      </a>
      <a
        href={mailURL}
        title="Email"
        tabIndex="0"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        className="text-white w-full py-3 flex justify-center items-center cursor-pointer lg:w-16 lg:hover:w-20 transition-all"
        style={{ backgroundColor: "rgb(132, 132, 132)" }}
      >
        <span className="sr-only">Share via email</span>

        <span className="text-lg">
          <MailIcon />
        </span>
      </a>
    </div>
  );
}

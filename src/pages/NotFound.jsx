import React from "react";
import { Helmet } from "react-helmet";
import NotFoundPage from "../modules/errors/404Page";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <Helmet>
          <title>404 | Not Found</title>
          <meta
            name="description"
            content="Find the best recipes for you."
          ></meta>
          <meta property="og:title" content="Recipe Venture"></meta>
          <meta
            property="og:description"
            content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
          ></meta>
          <meta
            property="og:image"
            content="https://recipe-venture.com/images/logo-img.jpg"
          ></meta>
          <meta property="og:url" content="https://recipe-venture.com/"></meta>
          <meta name="twitter:title" content="Recipe Venture"></meta>
          <meta
            name="twitter:description"
            content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
          ></meta>
          <meta
            name="twitter:image"
            content="https://recipe-venture.com/images/logo-img.jpg"
          ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta property="og:site_name" content="Recipe Venture"></meta>
          <meta name="twitter:image:alt" content="Recipe Venture"></meta>
        </Helmet>
      </Helmet>
      <NotFoundPage />
    </>
  );
}

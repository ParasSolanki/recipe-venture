import { Helmet } from "react-helmet";
import PrivacyPage from "../modules/PrivacyPage";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Recipe Venture</title>
        <meta
          name="description"
          content="Find the best recipes for you."
        ></meta>
        <meta
          property="og:title"
          content="Privacy Policy | Recipe Venture"
        ></meta>
        <meta
          property="og:description"
          content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
        ></meta>
        <meta
          property="og:image"
          content="https://recipe-venture.com/images/banner.jpg"
        ></meta>
        <meta
          property="og:url"
          content="https://recipe-venture.com/privacy"
        ></meta>
        <meta
          name="twitter:title"
          content="Privacy Policy | Recipe Venture"
        ></meta>
        <meta
          name="twitter:description"
          content="We offers a mixture of traditional and modern recipes, ranging
                  from a succulent steak to a classic ‘Mexican’."
        ></meta>
        <meta
          name="twitter:image"
          content="https://recipe-venture.com/images/banner.jpg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:site_name" content="Recipe Venture"></meta>
        <meta name="twitter:image:alt" content="Privacy Policy"></meta>
      </Helmet>
      <PrivacyPage />
    </>
  );
}

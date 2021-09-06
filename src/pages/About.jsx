import React, { useEffect } from "react";
import AboutPage from "../modules/AboutPage";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Recipe Venture";
  }, []);
  return <AboutPage />;
}

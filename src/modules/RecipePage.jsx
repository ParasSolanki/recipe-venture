import React from "react";
import AppLayout from "./layouts/AppLayout";
import RecipeArticle from "../components/RecipeArticle";
import SocialLinks from "../components/SocialLinks";

export default function RecipePage({ recipe }) {
  return (
    <AppLayout>
      <section className="py-20">
        <SocialLinks recipe={recipe} />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <RecipeArticle recipe={recipe} />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

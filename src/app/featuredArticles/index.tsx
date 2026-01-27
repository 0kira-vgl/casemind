import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import { FeaturedArticleCard } from "@/components/featuredArticleCard";

export function FeaturedArticles() {
  return (
    <section className="border-t-system-muted border-t px-26 py-14">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-medium">Artigos em Destaque</h1>
          <p className="text-system-muted-color text-2xl">
            Os melhores conteúdos selecionados para você
          </p>
        </div>

        <Button
          variant="link"
          className="text-system-primary item-center text-base"
        >
          Ver todos
          <GoArrowRight className="inline-block" />
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
      </div>
    </section>
  );
}

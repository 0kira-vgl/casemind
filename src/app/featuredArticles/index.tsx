import { GoArrowRight } from "react-icons/go";
import { FeaturedArticleCard } from "@/components/featuredArticleCard";
import Link from "next/link";

export function FeaturedArticles() {
  return (
    <section className="border-t-system-muted border-t px-10 py-14 lg:px-26">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-medium lg:text-4xl">
            Artigos em Destaque
          </h1>
          <p className="text-system-muted-color text-xl lg:text-2xl">
            Os melhores conteúdos selecionados para você
          </p>
        </div>

        <Link
          href="/allArticles"
          className="text-system-primary item-center flex pt-3 text-base hover:cursor-pointer hover:underline lg:pt-0"
        >
          Ver todos
          <GoArrowRight className="size-6 px-1" />
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-y-4 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
        <FeaturedArticleCard />
      </div>
    </section>
  );
}

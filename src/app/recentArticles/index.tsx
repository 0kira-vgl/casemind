import { RecentArticlesCard } from "@/components/recentArticlesCard";

export function RecentArticles() {
  return (
    <section className="px-10 py-14 lg:px-26">
      <div>
        <h1 className="text-4xl font-medium">Artigos Recentes</h1>
        <p className="text-system-muted-color text-xl lg:text-2xl">
          Conteúdo recente da comunidade
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-y-4 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
      </div>
    </section>
  );
}

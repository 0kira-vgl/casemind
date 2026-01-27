import { RecentArticlesCard } from "@/components/recentArticlesCard";

export function RecentArticles() {
  return (
    <section className="px-26 py-14">
      <div>
        <h1 className="text-4xl font-medium">Artigos Recentes</h1>
        <p className="text-system-muted-color text-2xl">
          Conteúdo recente da comunidade
        </p>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
        <RecentArticlesCard />
      </div>
    </section>
  );
}

import { CiClock2 } from "react-icons/ci";

export function RecentArticlesCard() {
  return (
    <div className="border-system-border bg-system-card group hover:border-system-primary border p-5 transition-all duration-300 ease-out">
      <div className="lg:px-5">
        <span className="bg-system-border px-2 py-0.5 text-xs">
          Desenvolvimento web
        </span>

        <div className="mt-2">
          <h1 className="group-hover:text-system-primary line-clamp-2 text-xl font-bold transition-all duration-300 ease-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            saepe maxime, tenetur praesentium possimus culpa sed nam aut
            dolorum, eum nisi quo ad inventore qui earum molestiae sunt aliquid?
            Esse!
          </h1>

          <p className="mt-2 line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            laborum repellendus dolore sequi, aliquam totam quae est dolores
            architecto id velit quasi, molestiae illum quis quos voluptatum
            facere debitis voluptates?
          </p>
        </div>

        <div className="text-system-muted-color mt-5 flex justify-between">
          <span>John Doe</span>

          <span className="text-system-muted-color flex items-center justify-center gap-1.5 text-xs font-medium">
            <CiClock2 />4 out 2025
          </span>
        </div>
      </div>
    </div>
  );
}

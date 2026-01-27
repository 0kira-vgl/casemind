import Image from "next/image";
import Lorem from "@/assets/lorem.png";
import { CiClock2 } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

export function FeaturedArticleCard() {
  return (
    <div className="border-system-border bg-system-card group hover:border-system-primary border p-5 transition-all duration-300 ease-out">
      <Image src={Lorem} alt="article thumbnail" />

      <div className="px-5">
        <div className="mt-8 flex items-center justify-between">
          <span className="bg-system-border px-2 py-0.5 text-xs">
            Desenvolvimento web
          </span>
          <span className="text-system-muted-color flex items-center justify-center gap-1.5 text-xs font-medium">
            <CiClock2 />4 out 2025
          </span>
        </div>

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

          <div className="flex gap-5">
            <span className="flex items-center justify-center gap-1">
              <CiClock2 />
              6min
            </span>
            <span className="flex items-center justify-center gap-1">
              <PiEye />
              122
            </span>
            <span className="flex items-center justify-center gap-1">
              <CiHeart />1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

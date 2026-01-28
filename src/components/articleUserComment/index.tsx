import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Avatar from "@/assets/john.png";

export function ArticleUserComment() {
  return (
    <div className="border-system-muted flex h-37 flex-col border px-6">
      <div className="flex py-5">
        <Image src={Avatar} alt="Avatar" className="size-16" />

        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col pl-5">
            <h1 className="text-sm font-medium">John Doe</h1>

            <span className="text-system-muted-color flex items-center justify-center gap-x-3 text-sm">
              20/06/2026
            </span>
          </div>

          <span className="flex items-center gap-x-2">
            <CiHeart className="size-4" /> 1
          </span>
        </div>
      </div>

      <p className="text-sm">
        Excelente artigo! Muito bem explicado sobre as tendências de IA.
      </p>
    </div>
  );
}

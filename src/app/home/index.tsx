import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Home() {
  return (
    <section className="w-full px-10 py-45.5 lg:px-10">
      <div className="flex flex-col items-center">
        <div className="text-center lg:max-w-sm">
          <h1 className="text-4xl leading-tight font-bold">
            Explore o Futuro da <br />
            <span className="text-system-primary">Tecnologia</span>
          </h1>
        </div>

        <div className="mt-6 text-center lg:max-w-lg">
          <p className="text-system-muted-color text-2xl font-bold">
            Artigos sobre IA, desenvolvimento, <br className="hidden lg:flex" />
            DevOps e as últimas tendências <br className="hidden lg:flex" />
            tecnológicas
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col gap-4 lg:max-w-md">
          <Button className="flex py-5">
            <Link href="/allArticles" className="w-full">
              Explorar Artigos
            </Link>
          </Button>

          <Button className="border-system-muted hover:bg-system-primary border bg-transparent py-5 text-zinc-50 transition-all duration-300 ease-out hover:text-black">
            Começar a Escrever
          </Button>
        </div>
      </div>
    </section>
  );
}

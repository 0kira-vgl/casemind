import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <section className="w-full px-4 pt-32 pb-24">
      <div className="flex flex-col items-center">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl leading-tight font-bold">
            Explore o Futuro da <br />
            <span className="text-system-primary">Tecnologia</span>
          </h1>
        </div>

        <div className="mt-6 max-w-lg text-center">
          <p className="text-system-muted-color text-2xl font-bold">
            Artigos sobre IA, desenvolvimento, <br />
            DevOps e as últimas tendências <br />
            tecnológicas
          </p>
        </div>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4">
          <Button className="py-5">Explorar Artigos</Button>

          <Button className="border-system-muted hover:bg-system-primary border bg-transparent py-5 text-zinc-50 transition-all hover:text-black">
            Começar a Escrever
          </Button>
        </div>
      </div>
    </section>
  );
}

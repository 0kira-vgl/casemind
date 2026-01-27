import { Button } from "@/components/ui/button";
import { MdOutlineMailOutline } from "react-icons/md";

export function Newsletter() {
  return (
    <section className="bg-system-card border-system-muted flex flex-col items-center justify-center border-y px-10 py-10 lg:px-0">
      <div className="bg-system-background border-system-muted mb-2.5 border p-2">
        <MdOutlineMailOutline className="size-9 text-zinc-400" />
      </div>

      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">Newsletter Semanal</h1>

        <p className="text-base">
          Receba os melhores artigos de tecnologia diretamente no seu email.{" "}
          <br className="hidden lg:flex" /> Sem spam, apenas conteúdo de
          qualidade.
        </p>

        <div className="flex items-center justify-center gap-2">
          <div className="bg-system-background border-system-muted w-64 border">
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
            />
          </div>

          <Button className="py-5">inscrever</Button>
        </div>

        <span className="text-xs">
          Mais de 10.000 desenvolvedores já recebem nossa newsletter
        </span>
      </div>
    </section>
  );
}

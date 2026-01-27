import { Button } from "@/components/ui/button";

export function ShareKnowledge() {
  return (
    <section className="border-system-muted flex flex-col items-center justify-center border-b px-10 py-26 lg:px-10">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold">Compartilhe Seu Conhecimento</h1>

        <p className="text-system-muted-color text-sm">
          Junte-se à nossa comunidade de escritores e compartilhe suas
          experiências e <br className="hidden lg:flex" /> conhecimentos em
          tecnologia
        </p>

        <Button className="py-5">Criar Conta Gratuita</Button>
      </div>
    </section>
  );
}

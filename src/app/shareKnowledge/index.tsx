import { Button } from "@/components/ui/button";

export function ShareKnowledge() {
  return (
    <section className="border-system-muted flex flex-col items-center justify-center border-b py-26">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold">Compartilhe Seu Conhecimento</h1>

        <p className="text-system-muted-color text-sm">
          Junte-se à nossa comunidade de escritores e compartilhe suas
          experiências e <br /> conhecimentos em tecnologia
        </p>

        <Button className="py-5">Criar Conta Gratuita</Button>
      </div>
    </section>
  );
}

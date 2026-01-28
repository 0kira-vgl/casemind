import Logo from "@/assets/icon.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";
import { Footer } from "../../footer";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center py-16">
        <Image src={Logo} alt="MindCaseLogo" className="size-20" />

        <div className="mb-5 text-center">
          <h1 className="text-3xl leading-10 font-bold">
            Entrar na Plataforma
          </h1>
          <span className="text-system-muted-color text-lg">
            Acesse sua conta para gerenciar seus artigos
          </span>
        </div>

        <div className="border-system-muted w-96 space-y-4.5 border bg-transparent p-7">
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="font-medium">
                Senha
              </label>
              <Link
                href="."
                className="text-system-muted-color text-xs font-light hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                id="password"
                type="password"
                placeholder="*********"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
          <Button className="w-full">
            <CiLogin />
            Entrar
          </Button>

          <div className="bg-system-muted h-px w-full" />

          <div className="text-center">
            <span className="text-system-muted-color text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/signUp"
                className="cursor-pointer font-medium text-zinc-50 hover:underline"
              >
                Criar conta
              </Link>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

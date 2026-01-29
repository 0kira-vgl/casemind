"use client";

import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";
import { Footer } from "../../footer";
import { Header } from "@/components/header";
import Link from "next/link";
import { useRequest } from "alova/client";
import { createUser } from "@/services/users-service";
import { UserProps } from "@/types/user-types";
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { send: submitForm } = useRequest(
    (data: UserProps) => createUser(data),
    {
      immediate: false,
    },
  );

  const submitClintForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (password !== passwordConfirm) {
        throw new Error("Senha coicidem");
      }

      const user = {
        name,
        email,
        password,
      };

      await submitForm(user);
      // toast sus
    } catch (error) {
      // toast err
    }
  };

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

        <form
          onSubmit={submitClintForm}
          className="border-system-muted w-96 space-y-4.5 border bg-transparent p-7"
        >
          <div>
            <label htmlFor="name" className="font-medium">
              Nome
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="font-medium">
              Senha
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="font-medium">
              Confirmar senha
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                id="confirmPassword"
                type="password"
                placeholder="*********"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            <CiLogin />
            Criar
          </Button>

          <div className="bg-system-muted h-px w-full" />

          <div className="text-center">
            <span className="text-system-muted-color text-sm">
              Já tem uma conta?{" "}
              <Link
                href="/signIn"
                className="cursor-pointer font-medium text-zinc-50 hover:underline"
              >
                Fazer login
              </Link>
            </span>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

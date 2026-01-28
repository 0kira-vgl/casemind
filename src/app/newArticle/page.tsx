"use client";

import { Header } from "@/components/header";
import { Footer } from "../footer";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function NewArticle() {
  const router = useRouter();

  return (
    <>
      <Header />

      <div className="px-80">
        <div className="pt-16 pb-9">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-4 pb-5 font-semibold"
          >
            <IoArrowBackOutline className="size-5" />
            Voltar para Dashboard
          </button>

          <div className="bg-system-muted h-px w-full" />
        </div>
        <div>
          <h1 className="text-3xl font-medium lg:text-4xl">
            Criar Novo Artigo
          </h1>
          <p className="text-system-muted-color text-xl lg:text-2xl">
            Compartilhe seu conhecimento com a comunidade
          </p>
        </div>
        <div className="border-system-muted border p-10">
          <div>
            <label htmlFor="title" className="font-medium">
              Título do Artigo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                id="title"
                placeholder="Título do Artigo"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="font-medium">
              Resumo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <textarea
                id="resume"
                placeholder="Resumo do Artigo"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Categoria</label>

            <Select>
              <SelectTrigger className="border-system-muted bg-system-card rounded-none text-zinc-50 outline-none lg:w-64">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="bg-system-background text-zinc-50">
                <SelectItem value="devW">Desenvolvimento web</SelectItem>
                <SelectItem value="devM">Desenvolvimento mobile</SelectItem>
                <SelectItem value="devU">UI/UX</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="img" className="font-medium">
              Imagem de Capa
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                id="img"
                placeholder="Imagem de Capa"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="font-medium">
              Tags
            </label>
            <div className="flex w-full">
              <div className="bg-system-card border-system-muted mt-1.5 border">
                <input
                  id="tags"
                  placeholder="Tags"
                  className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
                />
              </div>
              <button> Adicionar</button>
            </div>
          </div>

          <div>
            <label htmlFor="content" className="font-medium">
              Conteúdo do Artigo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <textarea
                id="content"
                placeholder="Conteúdo do Artigo"
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <Button className="w-full py-6">Publicar Artigo</Button>
          <button className="border-system-muted bg-system-card flex items-center border px-4 py-2">
            Cancelar
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

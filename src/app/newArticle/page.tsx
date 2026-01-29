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
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function NewArticle() {
  const router = useRouter();

  const [resume, setResume] = useState("");
  const [article, setArticle] = useState("");

  const resumeMaxLength = 120;
  const articleMaxLength = 8000;

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const readingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = countWords(text);
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  return (
    <>
      <Header />

      <div className="px-80">
        <div className="pt-16">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-4 pb-5 font-semibold"
          >
            <IoArrowBackOutline className="size-5" />
            Voltar para Dashboard
          </button>

          <div className="bg-system-muted h-px w-full" />
        </div>
        <div className="py-9">
          <h1 className="text-3xl font-medium lg:text-4xl">
            Criar Novo Artigo
          </h1>
          <p className="text-system-muted-color text-xl lg:text-2xl">
            Compartilhe seu conhecimento com a comunidade
          </p>
        </div>
        <form className="border-system-muted space-y-6 border p-10">
          <div>
            <label htmlFor="title" className="font-medium">
              Título do Artigo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
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
                required
                id="resume"
                placeholder="Resumo do Artigo"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                maxLength={resumeMaxLength}
                className="h-24 w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
            <span className="text-system-muted-color text-xs font-light">
              {resume.length}/{resumeMaxLength} caracteres
            </span>
          </div>

          <div>
            <div className="mb-1.5">
              <label className="font-medium">Categoria</label>
            </div>

            <Select>
              <SelectTrigger className="border-system-muted bg-system-card rounded-none text-zinc-50 outline-none lg:w-64">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="bg-system-card border-none text-zinc-50">
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
                required
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
            <div className="mt-1.5 flex w-full gap-2">
              <input
                required
                id="tags"
                placeholder="Tags"
                className="border-system-muted bg-system-card flex-1 border px-2.5 py-2 outline-none"
              />
              <button className="border-system-muted cursor-pointer border px-4 py-2 text-sm">
                Adicionar
              </button>
            </div>
            <div className="border-system-muted mt-1.5 flex w-fit items-center border px-2 py-0.5">
              <span className="flex items-center gap-1.5 text-xs">
                Typescript
                <IoIosClose className="size-5 cursor-pointer" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="content" className="font-medium">
              Conteúdo do Artigo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <textarea
                required
                id="content"
                placeholder="Conteúdo do Artigo"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                maxLength={articleMaxLength}
                className="h-52 w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
            <span className="text-system-muted-color text-xs font-light">
              {article.length}/{articleMaxLength} caracteres •{" "}
              {countWords(article)} palavras • {readingTime(article)} minuto
              {readingTime(article) > 1 ? "s" : ""} de leitura
            </span>
          </div>
        </form>

        <div className="mt-6 flex w-full gap-2 pt-5 pb-16">
          <Button className="h-12 flex-1">Publicar Artigo</Button>
          <button className="border-system-muted bg-system-card h-12 cursor-pointer border px-4 text-sm">
            Cancelar
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

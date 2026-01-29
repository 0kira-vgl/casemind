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
import { FormEvent, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useRequest } from "alova/client";
import {
  createNewArticles,
  ArticlesProps,
} from "@/services/new-article-service";
import { convertFileToBase64 } from "@/utils/convert-to-base64";
import Link from "next/link";

export default function EditArticle() {
  const { send } = useRequest(
    (data: ArticlesProps) => createNewArticles(data),
    { immediate: false },
  );
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image_base64, setImage_base64] = useState<File | null>(null);

  const descriptionMaxLength = 120;
  const contentMaxLength = 8000;

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const readingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = countWords(text);
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image_base64) return;

    const imageBase64 = await convertFileToBase64(image_base64);

    try {
      const data = {
        content,
        image_base64: imageBase64,
        description,
        title,
      } satisfies ArticlesProps;

      await send(data);
      router.push("/allArticles");
    } catch (error) {
      alert("erro");
    }
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
          <h1 className="text-3xl font-medium lg:text-4xl">Editar Artigo</h1>
          <p className="text-system-muted-color text-xl lg:text-2xl">
            Atualize as informações do seu artigo
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-system-muted mb-16 space-y-6 border p-10"
        >
          <div>
            <label htmlFor="title" className="font-medium">
              Título do Artigo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                id="title"
                placeholder="Título do Artigo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="font-medium">
              Resumo
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <textarea
                required
                id="description"
                placeholder="Resumo do Artigo"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={descriptionMaxLength}
                className="h-24 w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
            <span className="text-system-muted-color text-xs font-light">
              {description.length}/{descriptionMaxLength} caracteres
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
            <label htmlFor="image_base64" className="font-medium">
              Imagem de Capa
            </label>
            <div className="bg-system-card border-system-muted mt-1.5 border">
              <input
                required
                type="file"
                id="image_base64"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setImage_base64(file);
                }}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={contentMaxLength}
                className="h-52 w-full py-2 pr-2 pl-2.5 text-left outline-none"
              />
            </div>
            <span className="text-system-muted-color text-xs font-light">
              {content.length}/{contentMaxLength} caracteres •{" "}
              {countWords(content)} palavras • {readingTime(content)} minuto
              {readingTime(content) > 1 ? "s" : ""} de leitura
            </span>
          </div>

          <div className="mt-6 flex w-full gap-2 pt-5">
            <Button className="h-12 flex-1">Publicar Artigo</Button>
            <Link href="/dashboard" className="flex">
              <button className="border-system-muted bg-system-card h-12 cursor-pointer border px-4 text-sm">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

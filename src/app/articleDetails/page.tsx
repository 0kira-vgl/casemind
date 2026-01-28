"use client";

import { Header } from "@/components/header";
import { Footer } from "../footer";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import Avatar from "@/assets/john.png";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import Lorem from "@/assets/lorem.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArticleUserComment } from "@/components/articleUserComment";

export default function ArticleDetails() {
  const router = useRouter();

  return (
    <>
      <Header />

      <div className="lg:px-24">
        <div className="py-10 lg:py-16">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-4 px-10 pb-6 text-sm font-semibold lg:px-0 lg:text-base"
          >
            <IoArrowBackOutline className="size-5" />
            Voltar aos Artigos
          </button>

          <div className="bg-system-muted h-px w-full" />
        </div>

        <div className="px-10 lg:px-72">
          <span className="bg-system-accent px-2 py-0.5 text-xs font-medium text-black lg:text-base">
            Desenvolvimento web
          </span>

          <div className="space-y-5 pt-10 pb-3 lg:space-y-10 lg:pt-20">
            <h1 className="line-clamp-2 text-2xl wrap-break-word lg:text-6xl">
              O Futuro da Inteligência Artificial em 2025
            </h1>

            <p className="text-system-muted-color line-clamp-3 text-base font-medium wrap-break-word lg:line-clamp-2 lg:text-2xl">
              Explorando as tendências e inovações que moldarão o futuro da IA
              nos próximos anos.
            </p>
          </div>

          <div className="bg-system-border h-px w-full" />

          <div className="flex py-6">
            <Image src={Avatar} alt="Avatar" className="size-16" />

            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col pl-5">
                <h1 className="text-sm font-medium lg:text-base">John Doe</h1>

                <span className="text-system-muted-color flex items-center justify-center gap-x-3">
                  <span className="text-sm lg:text-base">20/01/2026</span> •{" "}
                  <span className="hidden items-center gap-1 lg:flex">
                    <CiClock2 />
                    6min
                  </span>
                </span>
              </div>

              <div className="text-system-muted-color space-y-2 lg:flex lg:gap-x-5">
                <CiHeart className="size-4 lg:size-6" />
                <CiBookmark className="size-4 lg:size-6" />
                <CiShare2 className="size-4 lg:size-6" />
              </div>
            </div>
          </div>

          <div className="bg-system-border h-px w-full" />

          <div className="mt-4 hidden gap-x-5 lg:flex">
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <CiHeart className="size-4" />
              {""} 1 Curtidas
            </span>
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <IoEyeOutline className="size-4" />
              {""} 122 Vizualizações
            </span>
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <BiComment className="size-4" />
              {""} 2 Comentários
            </span>
          </div>

          <div className="mt-4 flex justify-between gap-x-5 lg:hidden">
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <CiHeart className="size-4" />
              {""} 1
            </span>
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <IoEyeOutline className="size-4" />
              {""} 122
            </span>
            <span className="text-system-muted-color flex items-center gap-x-0.5 text-sm">
              <BiComment className="size-4" />
              {""} 2
            </span>
          </div>

          <div className="mt-8 w-full lg:mt-14">
            <div className="mb-8">
              <Image
                src={Lorem}
                alt="Artigo Thumbnail"
                className="aspect-video lg:h-118.25 lg:w-180"
              />
            </div>

            <p className="pb-10 text-justify wrap-break-word lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              porro recusandae similique neque, veniam, modi eligendi voluptates
              aperiam architecto eum ipsam? Possimus, dolor nemo? Rerum ipsum
              recusandae perspiciatis! Libero, a. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias placeat, quas laboriosam,
              reprehenderit accusantium amet obcaecati soluta a saepe repellat
              nulla. A deleniti quam consequuntur voluptate perferendis enim
              nulla veritatis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos ullam, assumenda, provident officia
              rerum magnam ipsa repellat fugit consequuntur suscipit, sapiente
              impedit! Similique, fuga. Pariatur vero rerum ullam quos alias.
            </p>
          </div>

          <div className="bg-system-border h-px w-full" />

          <div className="flex flex-col gap-x-5 gap-y-2 py-8 lg:block lg:gap-y-0">
            <span className="bg-system-card rounded-full px-2 py-0.5 text-center text-sm font-medium lg:text-start">
              Desenvolvimento web
            </span>

            <span className="bg-system-card rounded-full px-2 py-0.5 text-center text-sm font-medium lg:text-start">
              Inteligência Artificial
            </span>

            <span className="bg-system-card rounded-full px-2 py-0.5 text-center text-sm font-medium lg:text-start">
              Desenvolvimento backend
            </span>
          </div>

          <div className="bg-system-border h-px w-full" />

          <div className="pt-10">
            <span className="font-semibold">Comentários (2)</span>

            <div className="border-system-muted mt-4 mb-6 flex h-37 flex-col items-center justify-center gap-2 border">
              <span className="text-system-muted-color">
                Fazer login para comentar
              </span>
              <Link href="/signIn">
                <Button className="px-10">Fazer login</Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6 pb-20">
            <ArticleUserComment />
            <ArticleUserComment />
            <ArticleUserComment />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

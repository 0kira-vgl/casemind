import { Header } from "@/components/header";
import { Footer } from "../footer";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import Lorem from "@/assets/lorem.png";
import Marie from "@/assets/marie.png";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

export default function dashboard() {
  return (
    <>
      <Header />

      <div className="px-10 pt-14 pb-14 lg:px-26">
        <div className="flex items-center justify-between pb-10">
          <div>
            <h1 className="text-3xl font-medium lg:text-4xl">Dashboard</h1>
            <p className="text-system-muted-color text-xl lg:text-2xl">
              Bem-vindo de volta, John Doe!
            </p>
          </div>

          <div className="flex gap-x-3">
            <button className="border-system-muted bg-system-card flex cursor-pointer items-center gap-2 border px-4 py-2">
              <GoGear className="size-5" />
              Configurações
            </button>
            <Link href="/newArticle">
              <Button className="py-5.5">
                <FiPlus className="size-5" />
                Novo Artigo
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4 pb-10">
          <div className="border-system-muted border px-4 pt-4 pb-1.5">
            <div className="text-system-muted-color flex items-center justify-between pb-5 text-lg">
              <span className="font-light">Total de Artigos</span>

              <HiOutlineDocumentText className="size-5" />
            </div>
            <span className="text-[32px]">2</span>
          </div>

          <div className="border-system-muted border px-4 pt-4 pb-1.5">
            <div className="text-system-muted-color flex items-center justify-between pb-5 text-lg">
              <span className="font-light">Engajamento</span>

              <GoComment className="size-5" />
            </div>
            <span className="text-[32px]">4</span>
          </div>

          <div className="border-system-muted border px-4 pt-4 pb-1.5">
            <div className="text-system-muted-color flex items-center justify-between pb-5 text-lg">
              <span className="font-light">Curtidas</span>

              <CiHeart className="size-5" />
            </div>
            <span className="text-[32px]">20</span>
          </div>

          <div className="border-system-muted border px-4 pt-4 pb-1.5">
            <div className="text-system-muted-color flex items-center justify-between pb-5 text-lg">
              <span className="font-light">Tempo médio de leitura</span>

              <IoIosTrendingUp className="size-5" />
            </div>
            <span className="text-[32px]">8min</span>
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-x-10">
          <div className="border-system-muted border">
            <h2 className="px-6 py-5 text-xl">Meus Artigos</h2>
            <div className="bg-system-muted h-px w-full" />

            <div>
              <div className="border-system-muted flex border-b px-7 py-5">
                <Image src={Lorem} alt="Articlhe Thumb" className="h-28 w-40" />

                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col space-y-1.5 pr-3 pl-5">
                    <h1 className="line-clamp-1 text-base font-semibold">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Est autem maiores reprehenderit totam mollitia consectetur
                      eligendi perferendis! Facere itaque quae sapiente
                      molestias voluptas, id eveniet consequatur, velit
                      blanditiis a inventore.
                    </h1>

                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit itaque harum quis sit veniam mollitia enim natus
                      libero placeat consectetur commodi alias quae unde
                      nesciunt minima, eos eveniet rem at.
                    </p>

                    <div className="text-system-muted-color flex items-center gap-x-4 text-sm">
                      <span>20/01/2026</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <GoComment /> 2
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <CiHeart /> 1
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <button className="border-system-muted bg-system-card flex items-center gap-2 border px-4 py-2">
                      <FiEdit />
                      Editar
                    </button>

                    <button className="border-system-muted bg-system-card text-system-destructive flex items-center gap-2 border px-4 py-2">
                      <AiOutlineDelete />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border-system-muted border">
              <h2 className="px-6 py-5 text-xl">Atividades Recente</h2>
              <div className="bg-system-muted h-px w-full" />

              <div>
                <div className="border-system-muted flex border-b px-7 py-5">
                  <Image src={Marie} alt="Articlhe Thumb" className="size-14" />

                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col pl-5">
                      <div>
                        <span className="text-sm font-semibold">
                          Marie Smith{" "}
                        </span>{" "}
                        <span className="text-system-muted-color text-sm font-light">
                          comentou em{" "}
                        </span>
                      </div>
                      <span className="line-clamp-1 text-xs font-semibold">
                        O Futuro da Inteligência Artificial em 2025
                      </span>
                      <span className="text-system-muted-color flex items-center gap-2 text-xs">
                        <GoComment />5 min atrás
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-system-muted flex border-b px-7 py-5">
                  <Image src={Marie} alt="Articlhe Thumb" className="size-14" />

                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col pl-5">
                      <div>
                        <span className="text-sm font-semibold">
                          Marie Smith{" "}
                        </span>{" "}
                        <span className="text-system-muted-color text-sm font-light">
                          comentou em{" "}
                        </span>
                      </div>
                      <span className="line-clamp-1 text-xs font-semibold">
                        O Futuro da Inteligência Artificial em 2025
                      </span>
                      <span className="text-system-muted-color flex items-center gap-2 text-xs">
                        <GoComment />5 min atrás
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-system-muted flex border-b px-7 py-5">
                  <Image src={Marie} alt="Articlhe Thumb" className="size-14" />

                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col pl-5">
                      <div>
                        <span className="text-sm font-semibold">
                          Marie Smith{" "}
                        </span>{" "}
                        <span className="text-system-muted-color text-sm font-light">
                          comentou em{" "}
                        </span>
                      </div>
                      <span className="line-clamp-1 text-xs font-semibold">
                        O Futuro da Inteligência Artificial em 2025
                      </span>
                      <span className="text-system-muted-color flex items-center gap-2 text-xs">
                        <GoComment />5 min atrás
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

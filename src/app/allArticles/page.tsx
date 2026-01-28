import { Header } from "@/components/header";
import { Footer } from "../footer";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FeaturedArticleList } from "@/components/featuredArticleList";
import { FeaturedArticleCard } from "@/components/featuredArticleCard";

export default function AllArticles() {
  return (
    <>
      <Header />

      <div className="px-10 py-12 lg:px-24">
        <div>
          <h1 className="text-3xl font-medium lg:text-4xl">Todos os Artigos</h1>
          <p className="text-system-muted-color text-xl lg:text-2xl">
            Explore nossa coleção completa de artigos técnicos
          </p>
        </div>

        <div className="mt-12 mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="border-system-muted mt-1.5 mb-3 flex items-center border bg-transparent px-4 lg:mb-0">
            <CiSearch />
            <input
              placeholder="Buscar artigos..."
              className="py-2 pr-2 pl-2.5 text-left outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <Select>
              <SelectTrigger className="border-system-muted w-full rounded-none text-zinc-50 outline-none lg:w-64">
                <CiFilter className="size-4" />
                <SelectValue placeholder="Tipo de artigo" />
              </SelectTrigger>
              <SelectContent className="bg-system-background text-zinc-50">
                <SelectItem value="devW">Desenvolvimento web</SelectItem>
                <SelectItem value="devM">Desenvolvimento mobile</SelectItem>
                <SelectItem value="devU">UI/UX</SelectItem>
              </SelectContent>
            </Select>

            <div className="ml-5 hidden gap-2.5 lg:flex">
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-system-muted border-system-muted bg-transparent"
              >
                <IoGridSharp className="text-system-muted-color size-6" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-system-muted border-system-muted bg-transparent"
              >
                <FaThList className="text-system-muted-color size-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden space-y-4 lg:block">
          <FeaturedArticleList />
          <FeaturedArticleList />
          <FeaturedArticleList />
        </div>

        <div className="mt-5 flex flex-col gap-y-4 lg:mt-10 lg:grid lg:hidden lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
          <FeaturedArticleCard />
          <FeaturedArticleCard />
          <FeaturedArticleCard />
          <FeaturedArticleCard />
          <FeaturedArticleCard />
        </div>
      </div>

      <Footer />
    </>
  );
}

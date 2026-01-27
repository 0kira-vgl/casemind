import Logo from "@/assets/icon.svg";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-system-card px-10 py-16">
      <div className="flex justify-between">
        <div>
          <Image className="size-14" src={Logo} alt="MindCaseLogo" />

          <span className="text-system-muted-color text-sm">
            Seu portal de tecnologia com artigos, tutoriais <br /> e novidades
            do mundo tech.
          </span>
        </div>

        <div className="flex justify-center gap-x-20">
          <nav className="flex flex-col gap-y-2">
            <span className="text-base font-semibold">Navegação</span>
            <a className="text-system-muted-color cursor-pointer hover:underline">
              Home
            </a>
            <a className="text-system-muted-color cursor-pointer hover:underline">
              Artigos
            </a>
            <a className="text-system-muted-color cursor-pointer hover:underline">
              Dashboard
            </a>
          </nav>

          <div>
            <span className="text-base font-semibold">Redes Sociais</span>
            <div className="text-system-muted-color mt-2 flex gap-x-6">
              <a className="cursor-pointer">
                <FaLinkedinIn className="size-5" />
              </a>
              <a className="cursor-pointer">
                <FaGithub className="size-5" />
              </a>
              <a className="cursor-pointer">
                <FaTwitter className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-system-border my-9 h-px w-full" />

      <span className="text-system-muted-color flex items-center justify-center text-center text-xs font-light">
        © 2025 TechBlog. Todos os direitos reservados.
      </span>
    </footer>
  );
}

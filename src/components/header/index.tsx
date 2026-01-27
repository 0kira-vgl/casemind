import Image from "next/image";
import Logo from "@/assets/icon.svg";
import { Button } from "../ui/button";
import { FiMoon } from "react-icons/fi";

export function Header() {
  return (
    <div className="border-b-system-muted flex h-24 items-center justify-between border-b px-10 py-5">
      <div>
        <Image src={Logo} alt="Image Logo" className="size-20" />
      </div>

      <div className="flex">
        <Button variant="link" className="text-base text-zinc-50">
          Home
        </Button>
        <Button variant="link" className="text-base text-zinc-50">
          Artigos
        </Button>

        <div className="bg-system-muted mx-5 my-1 flex w-px items-center justify-center" />

        <Button variant="default" className="mr-5 bg-transparent">
          <FiMoon />
        </Button>

        <Button variant="link" className="text-base text-zinc-50">
          Entrar
        </Button>

        <Button>Cadastrar</Button>
      </div>
    </div>
  );
}

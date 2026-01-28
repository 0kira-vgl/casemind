import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Button } from "../ui/button";
import { FiMoon } from "react-icons/fi";
import Link from "next/link";

export function Header() {
  return (
    <div className="border-b-system-muted hidden h-24 items-center justify-between border-b px-10 py-5 lg:flex">
      <Link href="/">
        <Image src={Logo} alt="Image Logo" className="size-20" />
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/" className="cursor-pointer text-base hover:underline">
          Home
        </Link>
        <Link href="/" className="cursor-pointer text-base hover:underline">
          Artigos
        </Link>

        <div className="bg-system-muted ml-5 flex h-5 w-px items-center justify-center" />

        <div>
          <Button variant="default" className="mr-3 ml-0.5 bg-transparent">
            <FiMoon />
          </Button>

          <Link
            href="/signIn"
            className="cursor-pointer pr-5 text-base hover:underline"
          >
            Entrar
          </Link>
        </div>

        <Link href="/signUp">
          <Button className="cursor-pointer py-5">Cadastrar</Button>
        </Link>
      </div>
    </div>
  );
}

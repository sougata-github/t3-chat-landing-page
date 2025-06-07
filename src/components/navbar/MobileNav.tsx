import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Drawer modal={false}>
      <DrawerTrigger asChild className="max-md:flex hidden">
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pb-5">
        <DrawerHeader className="w-full flex-row justify-between">
          <DrawerTitle>
            <Link href="#" className="flex items-center gap-1.5">
              <Image
                quality={100}
                unoptimized
                height={32}
                width={32}
                src="/t3-chat-logo.png"
                alt="logo"
              />
              <span className="text-xl font-bold">T3.Chat</span>
            </Link>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <ul className="my-2 px-5 flex flex-col items-start">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="px-2 py-4 border-1 first:rounded-t-lg last:rounded-b-lg border-muted-foreground/20 even:border-y-0 w-full text-sm text-muted-foreground hover:text-white transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <DrawerFooter>
          <Button className="text-sm rounded-full w-full mt-4" asChild>
            <Link href="https://t3.chat/chat">Try for free</Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;

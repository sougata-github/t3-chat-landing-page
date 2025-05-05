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
import Link from "next/link";

import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="max-md:flex hidden">
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pb-5">
        <DrawerHeader className="w-full flex-row justify-between">
          <DrawerTitle>
            <Link href="/" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ff3e78"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle-icon lucide-message-circle -mt-0.5"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span className="text-xl font-bold">T3.Chat</span>
            </Link>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="outline" size="icon">
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
          <Button
            className="text-sm rounded-full w-full mt-4"
            asChild
            variant="outline"
          >
            <Link href="/">Try for free</Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;

import { useState } from "react";
import MenuIcon from "@/components/MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { links } from "@/lib/utils";

interface MobileNavProps {
  pathname: string;
}

export default function MobileNav({ pathname }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <MenuIcon className="size-8 text-cyan-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#1a1a1a] border-[#1a1a1a]">
        <SheetDescription about="navigation links" />
        <SheetTitle />
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8 mt-32">
          {links.map((link) => {
            return (
              <a
                href={link.path}
                key={link.name}
                onClick={() => setOpen(false)}
                className={`${
                  link.path === pathname &&
                  "text-cyan-400 border-b-2 border-cyan-400"
                } capitalize font-bold hover:text-cyan-400 transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

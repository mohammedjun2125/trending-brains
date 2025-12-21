"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomLogo } from "./CustomLogo";
import { programs } from "@/lib/programs";
import * as React from "react";
import { cn } from "@/lib/utils";
import { generateWhatsappLink } from "@/lib/config";
import { Input } from "@/components/ui/input";

const techPrograms = programs.filter(p => p.slug !== 'women-empowerment-initiative' && (p.slug.includes('development') || p.slug.includes('design') || p.slug.includes('marketing')));
const leadershipPrograms = programs.filter(p => p.slug.includes('leadership'));

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const enrollLink = generateWhatsappLink("Hello! I'm interested in enrolling in one of your programs.");

  const navLinks = [
    { href: "/women-empowerment", label: "Women Empowerment" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <CustomLogo />
            <span className="font-bold font-headline sm:inline-block text-lg">
              Trending Brains
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground/60 transition-colors hover:text-foreground/80 flex items-center gap-1 outline-none">
              Programs
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/programs">All Programs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="/women-empowerment">Women Empowerment</Link>
              </DropdownMenuItem>
              
              {techPrograms.length > 0 && <DropdownMenuTrigger asChild>
                  <h3 className="text-sm font-semibold px-2 py-1.5">Tech Courses</h3>
              </DropdownMenuTrigger>}
              {techPrograms.map(p => (
                <DropdownMenuItem key={p.slug} asChild>
                  <Link href={`/programs/${p.slug}`}>{p.title}</Link>
                </DropdownMenuItem>
              ))}

              {leadershipPrograms.length > 0 && <DropdownMenuTrigger asChild>
                  <h3 className="text-sm font-semibold px-2 py-1.5">Leadership</h3>
              </DropdownMenuTrigger>}
              {leadershipPrograms.map(p => (
                <DropdownMenuItem key={p.slug} asChild>
                  <Link href={`/programs/${p.slug}`}>{p.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className={cn("hidden md:flex items-center gap-2", { 'hidden': isSearchOpen })}>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button asChild>
              <Link href={enrollLink} target="_blank">Enroll Now</Link>
            </Button>
          </div>
          
          <div className={cn("hidden md:flex items-center gap-2", { 'flex': isSearchOpen, 'hidden': !isSearchOpen })}>
              <Input type="search" placeholder="Search courses..." className="w-64" />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
              </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col pt-8">
                  <SheetClose asChild>
                      <Link href="/programs" className="block px-4 py-2 text-lg text-foreground/80 hover:text-foreground">
                          All Programs
                      </Link>
                  </SheetClose>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-lg text-foreground/80 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                   <div className="px-4 pt-4">
                     <Button asChild className="w-full">
                        <Link href={enrollLink} target="_blank">Enroll Now</Link>
                     </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Navbar className="bg-transparent">
      <NavbarBrand>
        <Link href="/" className="flex gap-x-2">
          <Image src="/favicon.svg" alt="icon" width={24} height={24} />
          <p className="font-bold text-white ">URL Shortener</p>
        </Link>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <Link target="_blank" href="https://github.com/vcntttt/url-shortener">
          <Image src="/githubIcon.svg" alt="github" width={24} height={24} />
        </Link>
      </NavbarContent>
    </Navbar>
  );
}

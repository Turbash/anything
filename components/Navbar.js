"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ThemeBtn";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">SiegeBlog</div>
        </Link>
        <div className="md:flex space-x-4 hidden items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">SiegeBlog</SheetTitle>
              </SheetHeader>
              <SheetDescription />
              Something will go here i guess
              <SheetDescription />
              <div className="gap-6 flex flex-col items-center">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <div>
                  <Button className="mx-1 text-xs" variant="outline">
                    Login
                  </Button>
                  <Button className="mx-1 text-xs" variant="outline">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

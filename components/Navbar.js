import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">SiegeBlog</div>
        <div className="md:flex space-x-4 hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">
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
                strokeWidth={2}
                d="M4 6h26M4 12h16m-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

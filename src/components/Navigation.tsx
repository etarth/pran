"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({
  setContactModalOpen,
}: {
  setContactModalOpen: (open: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-24 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-50 h-16">
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="text-black text-xl font-bold transition-colors cursor-pointer"
        >
          Pran
        </Link>
        <div className="text-sm font-medium text-gray-500 mt-1">
          ปราณโอสถละมุน
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <Link
          href="/product"
          className={`hover:text-black text-sm transition-colors cursor-pointer ${
            pathname === "/product"
              ? "text-black font-medium"
              : "text-gray-500"
          }`}
        >
          Product
        </Link>
        <Link
          href="/about-us"
          className={`hover:text-black text-sm transition-colors cursor-pointer ${
            pathname === "/about-us"
              ? "text-black font-medium"
              : "text-gray-500"
          }`}
        >
          About Us
        </Link>
        <button
          onClick={() => setContactModalOpen(true)}
          className="bg-accent text-white bg-black text-sm px-6 py-1.5 rounded-md hover:opacity-90 hover:cursor-pointer"
        >
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

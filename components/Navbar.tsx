"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./DropDownMenu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
}

export default function Navbar({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
}: NavbarProps) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <header>
      <nav className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link href="/" className="cursor-pointer ">
            <Image
              priority
              src="/logo/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <ul className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 t0 bg-neutral-400 bg-opacity-50">
          <li onClick={scrollToWebsiteDesign} className="hover:text-gray-50">Website Design</li>
          <li onClick={scrollToGraphicDesign} className="hover:text-gray-50">Graphic Design</li>
          <li onClick={scrollToShopifyStores} className="hover:text-gray-50">Shopify Stores</li>
          <li onClick={scrollToBrands} className="hover:text-gray-50">Brands</li>

          <li>
            <Link href="/pricing" className="hover:text-gray-50">
              Pricing
            </Link>
          </li>
        </ul>
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-white cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer 
              items-center justify-center rounded-md border 
              border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none 
              focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

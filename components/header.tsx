"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3, HiChevronDown } from "react-icons/hi2";
import Image from "next/image";

import Container from "@/components/Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menuText: string) => {
    setDropdownOpen(dropdownOpen === menuText ? null : menuText);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full shadow">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={siteDetails.siteLogo}
              alt={siteDetails.siteName}
              width={65}
              height={65}
              className="w-full h-full"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text} className="relative">
                <div className="flex items-center gap-2">
                  <Link
                    href={item.url}
                    className="text-foreground font-medium hover:text-bg1-accent transition-colors"
                  >
                    {item.text}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleDropdown(item.text)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <HiChevronDown
                        className={`w-5 h-5 transition-transform ${
                          dropdownOpen === item.text ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {/* Dropdown for items with children */}
                {item.children && dropdownOpen === item.text && (
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2">
                    {item.children.map((child) => (
                      <li key={child.text}>
                        <Link
                          href={child.url}
                          className="block px-4 py-2 text-foreground hover:bg-gray-100 hover:text-bg1-accent transition-colors"
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/gallery"
              className="text-black bg-transparent hover:bg-primary-red hover:text-white border border-bg1-accent px-4 py-2 rounded-sm transition-colors"
            >
              Explore Gallery
            </Link>

            <Link
              href="/contact"
              className="text-white bg-primary-red hover:bg-transparent border border-bg1-accent hover:text-black px-4 py-2 rounded-sm transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary-red text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text} className="relative">
                <Link
                  href={item.url}
                  className="text-foreground hover:text-bg1-accent block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
                {/* Dropdown for items with children */}
                {item.children && (
                  <button
                    onClick={() => toggleDropdown(item.text)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {dropdownOpen === item.text ? "▲" : "▼"}
                  </button>
                )}
                {item.children && dropdownOpen === item.text && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.text}>
                        <Link
                          href={child.url}
                          className="text-foreground hover:text-bg1-accent block"
                          onClick={toggleMenu}
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div className="flex space-x-6">
              <Link
                href="/gallery"
                className="text-black bg-transparent hover:bg-primary-red hover:text-white border border-bg1-accent px-4 py-2 rounded-sm transition-colors"
              >
                Explore Gallery
              </Link>

              <Link
                href="/contact"
                className="text-white bg-primary-red hover:bg-transparent border border-bg1-accent hover:text-black px-4 py-2 rounded-sm transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </ul>
        </div>
      </Transition>
    </header>
  );
}

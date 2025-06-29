"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = ({
  setContactModalOpen,
}: {
  setContactModalOpen: (open: boolean) => void;
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleContactClick = () => {
    setContactModalOpen(true);
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center w-full px-6 md:px-24 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-50 h-16">
        {/* Logo Section */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
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
            className="bg-black text-white text-sm px-6 py-1.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Join Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md text-black"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Full Screen Mobile Menu */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/60 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full flex flex-col">
                {/* Top Bar with Logo and Close Button */}
                <div className="flex justify-end items-center px-6 py-4 h-16">
                  <button
                    type="button"
                    className="rounded-md p-2 text-black hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Centered Menu Items */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                  <div className="flex flex-col space-y-8 mb-12">
                    <Link
                      href="/"
                      className={`text-xl transition-colors cursor-pointer py-2 ${
                        pathname === "/"
                          ? "text-black font-semibold"
                          : "text-gray-600 hover:text-black"
                      }`}
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link
                      href="/product"
                      className={`text-xl transition-colors cursor-pointer py-2 ${
                        pathname === "/product"
                          ? "text-black font-semibold"
                          : "text-gray-600 hover:text-black"
                      }`}
                      onClick={handleLinkClick}
                    >
                      Product
                    </Link>
                    <Link
                      href="/about-us"
                      className={`text-xl transition-colors cursor-pointer py-2 ${
                        pathname === "/about-us"
                          ? "text-black font-semibold"
                          : "text-gray-600 hover:text-black"
                      }`}
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                  </div>

                  {/* Join Us Button */}
                  <button
                    onClick={handleContactClick}
                    className="bg-black text-white text-md px-8 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  >
                    Join Us
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navigation;

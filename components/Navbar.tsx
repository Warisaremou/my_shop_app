import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  BellAlertIcon,
  BellIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";
import Categories from "./Categories";
import BottomNav from "./BottomNav";

function Navbar({ children }: any) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const list = [
    {
      name: "Qui sommes-nous ?",
      path: "about",
    },
    {
      name: "Aide",
      path: "help",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "Vend tes articles",
      path: "sell-product",
    },
  ];

  const menuList = [
    {
      name: "cart",
      path: "/cart",
    },
    {
      name: "profile",
      path: "/profile",
    },
  ];

  return (
    <>
      <nav className="nav-bar">
        <div className="nav bg-blue-color py-2 text-white">
          <select name="language" className="search-input" defaultValue="Fr">
            <option>Fr</option>
            <option>En</option>
          </select>
          <div></div>
          <div className="flex items-center gap-4">
            <Link
              href="register"
              className="border-r-2 border-gray-300 pr-4 hover:text-blue-900 duration-100"
            >
              S&apos;inscrire
            </Link>
            <Link href="login" className="hover:text-blue-900 duration-100">
              Se connecter
            </Link>
          </div>
        </div>
        <div className="px-2 md:px-8 flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-10 py-2">
          <h1 className="text-blue-color text-xl md:text-[20px] font-caudex font-bold">
            <Link href="/">MY-SHOP</Link>
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative text-white focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 fill-gray-500" aria-hidden="true" />
              </div>
              <input className="input" placeholder="Rechercher un produit" type="search" />
            </div>
            {list.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className={clsx(
                  "text-sm px-3",
                  menu.path == "sell-product"
                    ? "bg-blue-color py-2 ml-2 md:ml-4 text-white rounded-md"
                    : "border-r-2 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:text-blue-color"
                )}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="nav-item">
            <Link className="hidden md:block" href="/notification" onClick={() => setIsRead(!isRead)}>
              {isRead ? (
                <BellIcon className="menu-icon" />
              ) : (
                <BellAlertIcon className="menu-icon" />
              )}
            </Link>
            <Link href="/cart" className="hidden md:block">
              <ShoppingBagIcon className="menu-icon" />
            </Link>
            <Link href="/profile" className="hidden md:block">
              <UserCircleIcon className="menu-icon" />
            </Link>
            <div>
              {currentTheme === "dark" ? (
                <SunIcon className="icon icon-white" onClick={() => setTheme("light")} />
              ) : (
                <MoonIcon className="icon icon-gray" onClick={() => setTheme("dark")} />
              )}
            </div>
          </div>
        </div>
        <div className="nav py-2 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-40">
          <h1 className="flex gap-2 cursor-pointer" onClick={() => setOpen(true)}>
            <Squares2X2Icon className="w-6" /> Tous les produits
          </h1>
          <div>
            <span className="pr-2">category</span>
            <span className="pr-2">category</span>
          </div>
        </div>
      </nav>
      <Categories open={open} setOpen={setOpen} />

      {/* Bottom navigation show only mobile */}

      <BottomNav />

      <main className="pt-10 px-3">{children}</main>
    </>
  );
}

export default Navbar;

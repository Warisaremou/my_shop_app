import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const menuList = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="nav-bar">
      <h1 className="text-blue-color md:text-[20px] font-caudex font-bold">
        <span className="text-black dark:text-white">waris</span>.aremou
      </h1>
      <div className="nav-item">
        <ul className="absolute md:relative -bottom-full md:top-auto left-0 right-0 w-full">
          {menuList.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className="text-sm md:pr-3 hover:text-blue-color"
            >
              {menu.name}
            </Link>
          ))}
        </ul>
        <div>
          {currentTheme === "dark" ? (
            <SunIcon className="icon icon-white" onClick={() => setTheme("light")} />
          ) : (
            <MoonIcon className="icon icon-gray" onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

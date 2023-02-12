import {
  BellIcon,
  CubeIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function BottomNav() {
  const bottomMenu = [
    {
      name: "Acceuil",
      path: "/",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "Produits",
      path: "/sell-product",
      icon: CubeIcon,
      current: false,
    },
    {
      name: "Notifications",
      path: "/notification",
      icon: BellIcon,
      current: false,
    },
    {
      name: "Panier",
      path: "/cart",
      icon: ShoppingBagIcon,
      current: false,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserCircleIcon,
      current: false,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto md:hidden bg-gray-50 dark:bg-gray-800">
      <nav className="flex justify-between items-center py-2 px-4">
        {bottomMenu.map(({ icon: Icon, ...menu }) => {
          return (
            <Link key={menu.name} href={menu.path} className="flex flex-col items-center">
              <Icon className="bottom-icon" />
              <span className="text-[10px] font-medium text-blue-color">{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default BottomNav;

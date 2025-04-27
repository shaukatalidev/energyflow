"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Hamburger from "@/components/Hamburger";

import { UserMenuButton } from "./UserMenuButton";
import { Home, Info, LogIn, LogOut, LucideIcon, Store } from "lucide-react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  mobile?: boolean;
  icon?: LucideIcon;
  color?: string;
}

const useCurrentUser = () => {
  return {
    id: 8239581294,
    name: "John Doe",
    email: "john@gmail.com",
  };
};
const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  mobile,
  icon: Icon,
  color,
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      <p
        className={`${
          mobile ? "text-3xl" : "text-lg"
        } text-mainColor font-semibold`}
      >
        {Icon && (
          <Icon size={40} className={`${color} inline-block mr-8 text-lg`} />
        )}
        {title}
      </p>
      <span
        className={`
        h-[2px] 
          inline-block bg-mainColor
          absolute 
          left-0 
          -bottom-0.5 
          group-hover:w-full 
          transition-[width] 
          ease
          duration-300
          ${pathname === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const mobileRoutes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "About Us",
    icon: Info,
    href: "/about",
    color: "text-violet-500",
  },

  {
    label: "Our Store",
    icon: Store,
    href: "/store",
    color: "text-lime-500",
  },
];
const Navbar = () => {
  const user = useCurrentUser();

  return (
    <div className="w-full mx-auto max-w-screen-2xl  flex lg:flex-row flex-col ">
      <div className="lg:w-[30%]  hidden w-full mx-auto  lg:flex justify-center items-center">
        <div className="w-[100px] h-[50px] md:w-[200px] md:h-[100px] relative">
          <a href="/">
            <Image
              src="/MainLogo3.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              sizes="100"
              alt={"logo"}
            />
          </a>
        </div>
        <div className="w-1 hidden sm:block rounded-xl h-3/4 ml-[2px] mr-1 bg-mainColor/50" />
        <h1 className="text-sm hidden sm:block xl:text-lg font-semibold text-mainColor">
          Sail your Business Ship,
          <br />
          With our enerZy Sip
        </h1>
      </div>
      <div className="lg:hidden w-full items-center my-1 flex">
        <div className="sm:w-[35%] w-[30%]  flex  mx-auto justify-center items-center">
          <div className="w-[100px] ml-2 block lg:hidden h-[50px] md:w-[200px] md:h-[100px] relative">
            <Image
              src="/MainLogo3.png"
              fill
              style={{
                objectFit: "contain",
              }}
              sizes="100"
              alt={"logo"}
            />
          </div>
          <h1 className="text-sm hidden sm:block lg:hidden xl:text-lg font-semibold text-mainColor">
            Sail your Business Ship,
            <br />
            With our enerZy Sip
          </h1>
        </div>

        <div className="pr-4">
          <Hamburger>
            {mobileRoutes.map((route) => (
              <CustomLink
                key={route.href}
                mobile
                title={route.label}
                href={route.href}
                className="mr-4"
                icon={route.icon}
                color={route.color}
              />
            ))}
            {user?.id ? (
              <Button className="p-0 text-emrald-500">
                <p className={`text-3xl text-mainColor font-semibold`}>
                  <LogOut
                    size={40}
                    className={`text-emerald-500 inline-block mr-8 text-lg`}
                  />
                  Log out
                </p>
              </Button>
            ) : (
              <CustomLink
                title="Sign In"
                mobile
                href={"/auth/login"}
                className="mr-4"
                icon={LogIn}
                color="text-emerald-500"
              />
            )}
          </Hamburger>
        </div>
      </div>
      <nav className="lg:w-[70%] hidden w-full mx-auto lg:flex lg:justify-between justify-around items-center">
        <div className="w-full gap-2 flex justify-around items-center">
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About Us" href="/about" className="mx-4" />
          <CustomLink title="Our Store" href="/store" className="ml-4" />

          <UserMenuButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

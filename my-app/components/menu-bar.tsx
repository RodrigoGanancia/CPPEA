"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import '@/app/styles/menu-bar.css';


export default function MenuBar() {

  const handleClick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('top-[12%]');
  };

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image 
            src="/img/logo.jpg"
            alt="Clube Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="nav-links md:static absolute bg-white md:min-h-fit min-h-[60-vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-8">
          <ul className="flex md:flex-row flex-col items-center gap-[4vw]">
            <li className="hover:text-gray-500">
              <Link href="/noticias">Notícias</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/sobre">Sócios</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li className="hover:text-gray-500 pb-4 md:pb-0">
              <Link href="/contactos">Contactos</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
          <AlignJustify className="cursor-pointer text-3xl md:hidden" onClick={handleClick}/>
        </div>
      </nav>
    </div>
  );
}
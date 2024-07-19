"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import '@/app/styles/menu-bar.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoClose, IoMenu } from "react-icons/io5";

const MenuBar = () => {
  const navLinks = [
    { name: "Página Inicial", link: "/home" },
    { name: "Notícias", link: "/noticias" },
    { name: "Contactos", link: "/contactos" },
    { name: "Sócios", link: "/socios" },
  ];

  const [open, setOpen] = useState(false);

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
        <div className={`md:static absolute bg-white md:min-h-fit min-h-[60-vh]
          left-0 md:w-auto w-full flex items-center px-8 ${open ? "top-[12%]" : "top-[-100%]"}`}>
          <ul className="flex md:flex-row flex-col items-center gap-[4vw] md:pt-0 md:pb-0 pt-4 pb-3">
            {navLinks.map((link, index) => (
              <li key={index} className="md:text-lg text-base hover:text-gray-500 pb-4 md:pb-0">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-4xl cursor-pointer">
            <FaInstagram />
            <FaFacebook />
          </div>
          <div className="text-3xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;

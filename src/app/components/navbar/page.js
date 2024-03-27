"use client";

import Link from "next/link";
import Sidebar from "../sidebar/page";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const links = [
    { section: "About Me", link: "#aboutme" },
    { section: "What i do", link: "#what-i-do" },
    { section: "Experience", link: "#experience" },
    { section: "Contact Me", link: "#contact-me" },
  ];

  const [bgColor, setBgColor] = useState(false);

  const scrollnav = () => {
    if (window.scrollY > 0) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollnav);
  }, [bgColor]);

  return (
    <nav
      className={clsx(
        " flex justify-between px-6 py-6 z-10 lg:px-20 2xl:mx-60 md:px-10 duration-150 o",
        { "bg-black/75 sticky top-0 ": bgColor === true }
      )}>
      <div>
        <h1 className="font-bold text-3xl cursor-default text-[#e5e5e5]">
          Loave
        </h1>
      </div>
      <div className="gap-8 hidden lg:flex items-center">
        {links.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              className="text-[#fca311] font-semibold lg:flex lg:px-1">
              {item.section}
            </Link>
          </div>
        ))}
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [show, setisShow] = useState(false);

  const links = [
    { section: "About Me", link: "#about-me" },
    { section: "What i do", link: "#what-i-do" },
    { section: "Experience", link: "#experience" },
    { section: "Contact Me", link: "#contact-me" },
  ];

  const handleClick = () => {
    setisShow(!show);
  };

  // console.log(show);

  return (
    <aside className=" lg:hidden">
      {show ? (
        <div className=" bg-white top-0 left-1/2 absolute z-40 w-1/2 h-[100vh]">
          <div className="p-7 flex flex-col gap-3">
            <div onClick={handleClick} className="text-black">
              close
            </div>
            {links.map((item) => (
              <div key={item.section}>
                <Link
                  onClick={handleClick}
                  href={item.link}
                  className="text-[#fca311] font-semibold lg:flex lg:px-1">
                  {item.section}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <button onClick={handleClick} className="flex items-center rotate-90">
        |||
      </button>
    </aside>
  );
};

export default Sidebar;

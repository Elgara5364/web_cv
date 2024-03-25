import Link from "next/link";
import Sidebar from "../sidebar/page";

const Navbar = () => {
  const links = [
    { section: "About Me", link: "#about-me" },
    { section: "What i do", link: "#what-i-do" },
    { section: "Experience", link: "#experience" },
    { section: "Contact Me", link: "#contact-me" },
  ];

  return (
    <nav className="relative flex justify-between px-6 py-4 z-10 lg:px-20 2xl:mx-60 md:px-10 ">
      <div>
        <h1 className="font-bold text-3xl cursor-default text-[#e5e5e5]">
          Loave
        </h1>
      </div>
      <div className="gap-8 hidden lg:flex items-center">
        {links.map((item) => (
          <div key={item.section}>
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

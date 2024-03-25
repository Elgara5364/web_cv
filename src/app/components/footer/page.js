"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <section className="px-4 py-4 z-10 lg:mx-20 2xl:mx-60 2xl:mt-28 md:mx-10 mx-2 text-center">
      <div className=" bg-black rounded-xl px-3 py-5 flex flex-col md:flex-row md:justify-between">
        <h6 className="cursor-default"> Copyright by ©️Loave 2024</h6>
        <Link href={"#"}>Back To Top</Link>
      </div>
    </section>
  );
};

export default Footer;

import Link from "next/link";

const HireMe = () => {
  return (
    <section className="px-4 py-4 z-10 lg:px-72 2xl:px-[400px] 2xl:mt-28 md:px-44 mx-2 text-center">
      <div className="bg-black rounded-xl py-5" id="contact-me">
        <div className="">
          <h1 className="text-primary mb-5 font-bold text-xl text-center">
            Contact Me
          </h1>
        </div>
        <div className="flex gap-5 justify-center">
          {" "}
          <Link href="https:mailto:loardis36@gmail.com">
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black font-bold text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              Contact Me
            </button>
          </Link>
          <Link href="https://wa.me/6282397821867?/text=">
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black font-bold text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HireMe;

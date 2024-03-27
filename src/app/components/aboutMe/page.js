import Image from "next/image";
import Myprofile from "/public/1.png";
import Link from "next/link";
import Linkedin from "/public/linkedin-in.svg";
import Facebook from "/public/facebook.svg";
import Github from "/public/github.svg";

const AboutMe = () => {
  return (
    <section
      className="md:mx-10 lg:my-5 lg:mt-6 lg:mx-20 2xl:mx-60 pt-20 mt-14 mx-2 px-4 "
      id="aboutme">
      <div className="block lg:flex gap-20">
        <Image
          src={Myprofile}
          priority={true}
          alt="Steve's Photo"
          width={580}
          height={573}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="max-w-lg"
        />
        <div className="mt-5 xl:mt-0 flex flex-col">
          <div>
            <h1 className="mb-3 text-primary font-bold text-xl">About me</h1>
            <h2 className="text-5xl font-bold mb-5 text-secondary">
              Quick Bio
            </h2>
            <p className="leading-7 text-white">
              I am a frontend developer who lives in Timika. As a frontend
              developer i'm more focusing on the UI / UX of web Application. I
              have finished my bootcamp on binar academy and im still curious
              about web development. I love to get new experience and always
              learn from my surroundings. I looking forward to any opportunities
              and challenges.
            </p>
            <br></br>
            <p>If you want to see what i did press the button below.</p>
          </div>
          <div className="mt-14">
            <button className="mb-10 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black font-bold text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              <Link href="#what-i-do">Lihat Project</Link>
            </button>
            <div className="flex gap-5">
              <Link
                href={"https://www.linkedin.com/in/steve-loardi"}
                className="bg-slate-300 rounded-full p-1.5">
                <Image
                  src={Linkedin}
                  width={20}
                  height={"auto"}
                  alt="Linkedin"
                />
              </Link>
              <Link
                href={"https://www.facebook.com/steve.loardi"}
                className="bg-slate-300 rounded-full p-1.5">
                <Image
                  src={Facebook}
                  width={"auto"}
                  height={20}
                  alt="Facebook"
                />
              </Link>
              <Link
                href={"https://github.com/Elgara5364"}
                className="bg-slate-300 rounded-full p-1.5">
                <Image src={Github} width={"auto"} height={20} alt="github" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

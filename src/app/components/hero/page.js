import { BackgroundBeams } from "../ui/background-beams";

const Hero = () => {
  const words = [
    {
      text: "Steve Loardi",
      className:
        "pt-[100px] lg:pt-[140px] text-secondary mx-auto font-bold text-4xl",
    },
    { text: "Junior Frontend Developer" },
  ];
  return (
    <section className=" w-full h-[400px] ">
      <div className="flex flex-col justify-center text-center ">
        <h1 className="pt-[100px] lg:pt-[140px] font-bold text-4xl pb-3 text-secondary ">
          Hi, I&apos;m{" "}
        </h1>

        <h1 className="text-8xl text-secondary">Steve Loardi</h1>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Hero;

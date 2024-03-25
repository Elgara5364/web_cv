import { BackgroundBeams } from "../ui/background-beams";

const Hero = () => {
  return (
    <section className=" w-screen h-[500px]">
      <div className="flex flex-col justify-center text-center ">
        <h1 className="pt-[100px] lg:pt-[200px]  font-bold text-4xl text-secondary ">
          Hi, I'm{" "}
        </h1>
        <h1 className="text-8xl text-secondary">Steve Loardi</h1>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Hero;

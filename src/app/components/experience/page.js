const Experience = () => {
  const skill = [
    "HTML5",
    "CSS3",
    "Javascript",
    "ReactJS",
    "Bootstrap",
    "Tailwind",
    "NextJS",
    "Vite",
    "NodeJS",
  ];

  const interest = ["Gaming", "Reading", "Badminton", "Photography", "Swim"];

  return (
    <section className="px-4 py-4 z-10 lg:mx-20 2xl:mx-60 2xl:pt-20 md:mx-10 mx-2 text-center">
      <div id="experience" className="mb-3 pt-12">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 ">
          <div className=" flex flex-col gap-5">
            <div className="border-[#fca311] bg-black border-2 rounded-xl p-5">
              <h4 className="md:text-start mb-5 text-secondary font-bold text-xl">
                Soft Skills
              </h4>
              <div className="  flex flex-wrap w-full gap-5 ">
                {skill.map((skill) => (
                  <h5 className="border-[#14213D] border-2 rounded-3xl text-white  px-5 py-2">
                    {skill}
                  </h5>
                ))}
              </div>
            </div>
            <div className="border-[#fca311] bg-black border-2 rounded-xl p-5">
              <h4 className="md:text-start mb-5 text-secondary font-bold text-xl">
                Interest
              </h4>
              <div className="  flex flex-wrap w-full gap-5 ">
                {interest.map((items) => (
                  <h5 className="border-[#14213D] text-white border-2 rounded-3xl px-5 py-2">
                    {items}
                  </h5>
                ))}
              </div>
            </div>
          </div>
          <div className="border-[#fca311] bg-black border-2 rounded-xl p-5">
            <h1 className="text-start text-secondary font-bold text-xl">
              Education
            </h1>
            <ul className="p-5 text-start list-disc">
              <li className="mb-3">
                Sep 2023 - Feb 2024 at Binar Academy (Frontend Developer)
              </li>
              <li>
                Feb 2024 - Aug 2024 (Expected) at Udemy (Fullstack Developer)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

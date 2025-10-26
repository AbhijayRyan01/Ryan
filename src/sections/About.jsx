import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { experiences } from "../constants";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  When I’m not shipping:
⚡️ Open-sourcing my latest ML/DL projects (or collaborating on yours)  
🧠 Experimenting with new AI architectures and model optimization techniques  
🎧 Zoning out to The Beatles while training neural networks (perfect harmony)`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>

      {/* Experience Section */}
      <div className="px-10 py-20">
        <h2 className="text-4xl font-light tracking-wide text-white mb-4">Experience & Achievement</h2>
        <div className="w-32 h-1 bg-gold mb-12"></div>
        
        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex flex-col gap-4 font-light text-white/60"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-white">{exp.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <p className="text-xl text-gold">{exp.job}</p>
                  <p className="text-lg italic">{exp.date}</p>
                </div>
              </div>
              <ul className="list-disc ml-6 space-y-2">
                {exp.contents.map((content, idx) => (
                  <li key={idx} className="text-lg tracking-wide">
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

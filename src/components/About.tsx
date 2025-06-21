import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useGSAP(() => {
    gsap.set(".about-image", {
      width: "24rem",
      height: "60vh",
      borderRadius: "1.5rem",
    });
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".about-image", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to TheMove
        </h2>
        <div className="mt-5 text-center uppercase text-4xl leading-[0.8] md:text-[6rem]">
          Exper<b>i</b>ence the Ultimate R<b>a</b>cing Adventure
        </div>
        <div className="about-subtext">
          <p>Where Speed Meets Strategy - Your Racing Journey Begins</p>
          <p>Master the Track, Challenge Champions, Become a Legend</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

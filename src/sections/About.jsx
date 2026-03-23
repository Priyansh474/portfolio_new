import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mohamedfawzi from "../../public/images/me.png";
const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I am a passionate Full-Stack Web Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, Express.js, and MongoDB. I have developed real-world projects such as a Student Task Manager, an e-learning platform, and a Book Hub system, with a focus on clean architecture, secure APIs, and user-friendly interfaces.

I enjoy working across both frontend and backend, creating seamless user experiences while ensuring efficient data handling and performance. With a strong foundation in HTML, CSS, JavaScript, and database management, I aim to deliver reliable, high-quality solutions.

In addition to development, I bring a creative edge with experience in design tools like Figma, Canva, and Photoshop, which helps me craft visually appealing, user-centric applications. I am constantly learning new technologies, including AI automation, to keep improving and stay current in the evolving tech landscape.`;
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
        subTitle={"Code with purpose, built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src={mohamedfawzi}
          alt="mohamed fawzi"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;

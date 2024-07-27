import { useGSAP } from "@gsap/react";
import { tiltedArrow } from "../utils";
import gsap from "gsap";
import {useState} from "react";

const timeline = gsap.timeline({
  repeat: 0,
});

const Hero = () => {
  const [smallDevice, ] = useState(
      window.innerWidth < 640,
  );
  useGSAP(() => {
    gsap.to("#cta", {
      delay: 2,
      opacity: 1,
      y: smallDevice ? -100 : -200,
    });
    timeline.from("#hero", {
      delay:0.5,
      opacity: 0,
    });
    timeline.from("#hero", {
      delay:0.3,
      y: 0,
    });
    gsap.fromTo("#hero-slogan",{
      delay:1,
      duration:0.8,
      opacity:0,
      repeat:-1,
      yoyo:true,

    },{
      delay:2,
      duration:1,
      opacity:1,
      repeat:-1,
      yoyo:true,
    })

  }, []);
  return (

    <section className="w-full nav-height relative px-14 font-poppins">


            <div className="w-full h-5/6 flex-center flex-col ">
              <h1 id="hero" className="hero-title -translate-y-20">
                Lifting Your Digital <br />
                Presence With Newral
              </h1>
              <p id="hero-slogan" className="hero-slogan -translate-y-20">
                We focus on creating meaningful experiences that resonate {window.innerWidth > 480 ? <br /> : <> </>}
                with your audience and Brand.
              </p>
            </div>
            <div
              id="cta"
              className="flex-center flex-row gap-5 opacity-0 translate-y-20"
            >
              <button className="primary-button max-sm:text-xs flex-row
                whitespace-nowrap hover:shadow-[-2px_6px_22px_-7px_rgba(0,0,0,1)] drop-shadow-sm hover:shadow-primary transition-shadow ease-linear duration-200">
                Quick Connect
                <img src={tiltedArrow} alt="arrow" className="ml-1 w-[3vh] max-sm:hidden" />
              </button>
              <button className="whitespace-nowrap secondary-button max-sm:text-xs ">Learn More</button>
            </div>


    </section>

  );
};
export default Hero;

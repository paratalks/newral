// import { highlights } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const cards = [
    { id: "card-0", endTranslateX: -1000, rotate: 45 },
    { id: "card-1", endTranslateX: -1000, rotate: -30 },
    { id: "card-2", endTranslateX: -2000, rotate: 45 },
    { id: "card-3", endTranslateX: -1500, rotate: -30 },
  ];
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".highlight-container",
      start: "top top",
      end: "+=900vh",
      scrub: true,
      pin: true,

      onUpdate: (self) => {
        gsap.to(".highlight-wrapper", {
          x: `${-250 * self.progress}vw`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    // cards.forEach((card, ) => {
    //   ScrollTrigger.create({
    //     trigger: `#${card.id}`,
    //     start: "top top",
    //     end: "+=1200vh",
    //     scrub: true,
    //     onUpdate: (self) => {
    //       gsap.to(`#${card.id}`, {
    //         x: `${card.endTranslateX * self.progress}px`,
    //         rotate: `${card.rotate * self.progress * 2}`,
    //         duration: 0.9,
    //         ease: "power3.out",
    //       });
    //     },
    //   });
    // });
  });

  return (
    <div className="highlight-container">
      <section className="highlight-wrapper">
        <h1 className="highlight-title"> Empowering Business </h1>


      </section>
      <section className="highlight-outro">
        <div className="highlight-outro-title">
          <h1 className="highlight-outro-text">Excited To Work With You!</h1>
        </div>
      </section>
    </div>
  );
};
export default Highlights;

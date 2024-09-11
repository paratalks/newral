import { serviceCards } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { lazy } from "react";
const SkillCard = lazy(() => import("./skillCard.tsx"));
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  return (
    <div
      id={"services"}
      className="services-container flex-center text-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="sm:text-5xl text-4xl  font-[700] text-center text-nowrap">
          Our Expertise
        </h1>
        <p className="text-center max-sm:text-xs font-[200] lg:w-[60%] md:w-[90%]">
          From concept to execution, we empower your brand with design and
          development that'll drive business growth.
        </p>
      </div>
      <div className="services-tiles lg:w-4/6">
        {serviceCards.map((service: any, index: any) => (
          <SkillCard
            cardTitle={service.title}
            skills={service.skills}
            path={service.path}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Services;

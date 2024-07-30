// @ts-nocheck
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {company1, company2, company3, company4, smallScreen} from "../utils";
import Autoplay from "embla-carousel-autoplay";
import {useState} from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkedWith = () => {
    return (
      <div className="workwith-container flex flex-col gap-3 pt-15 sm:pt-10">
        <p className="flex-center text-gray-600 mb-6 workedwith-desc">
          More than 200+ companies trusted us worldwide
        </p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 1200,
              stopOnFocusIn: false,
              stopOnLastSnap: false,
              jumps: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company1} alt="" />
            </CarouselItem>
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company2} alt="" />
            </CarouselItem>
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company3} alt="" />
            </CarouselItem>
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company4} alt="" />
            </CarouselItem>
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company1} alt="" />
            </CarouselItem>
            <CarouselItem className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}>
              <img src={company2} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
};
export default WorkedWith;
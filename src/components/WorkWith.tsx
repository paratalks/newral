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
import {
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  smallScreen,
} from "../utils";
import AutoScroll from "embla-carousel-auto-scroll";

import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkedWith = () => {
  return (
    <div
      id={"workwith"}
      className="workwith-container flex flex-col gap-3 pt-15 sm:pt-10 "
    >
      <p className="flex-center text-gray-300 mb-6 workedwith-desc">
        More than 200+ companies trusted us worldwide
      </p>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 3,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}
          >
            <img src={company1} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}
          >
            <img src={company2} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-4 md:pl-6`}
          >
            <img src={company3} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}
          >
            <img src={company4} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}
          >
            <img src={company5} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem
            className={`${smallScreen ? "basis-1/3" : "basis-1/5"} pl-2 md:pl-4`}
          >
            <img src={company6} alt="" width={200} height={200} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default WorkedWith;

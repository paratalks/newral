import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  return (

      <div className="highlight-container">
          <Carousel>
              <CarouselContent>
                  <CarouselItem>...</CarouselItem>
                  <CarouselItem>...</CarouselItem>
                  <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
          </Carousel>
      </div>

  );
};
export default Highlights;

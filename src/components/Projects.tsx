import Autoplay from "embla-carousel-autoplay";
import { carousel } from "../utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Projects = () => {
  return (
    <div
      id={"projects"}
      className="w-full  h-fit flex flex-center flex-col sm:gap-10 gap-8"
    >
      <div className="project-header w-full lg:w-4/6 flex md:flex-row flex-col md:gap-0 gap-6 md:justify-between md:items-end max-md:text-center justify-center items-center ">
        <div className="flex flex-col gap-2">
          <h1 className="sm:text-5xl text-4xl max-sm:text-3xl font-[700] text-nowrap">
            Our Work
          </h1>
          <p className="max-sm:text-xs font-[200] ">
            Explore our portfolio of innovative projects that showcase our{" "}
            <br />
            commitment to excellence and creativity.
          </p>
        </div>
        <div className="text-center items-center justify-center">
          <button className="text-primary primary-button hover:shadow-[-2px_6px_22px_-7px_rgba(0,0,0,1)] drop-shadow-sm hover:shadow-primary transition-shadow ease-linear duration-200">
            View More{" "}
          </button>
        </div>
      </div>
      <div className="project-content lg:w-4/6 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 1700,
              stopOnFocusIn: false,
              stopOnLastSnap: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full "
        >
          <CarouselContent className="">
            {carousel.map((item, index) => (
              <CarouselItem
                key={index}
                className=" hover:opacity-50 md:basis-1/2 lg:basis-1/2 p-14 max-sm:py-2"
              >
                <img src={item} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
export default Projects;

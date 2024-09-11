import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel.tsx";
import AutoScroll from "embla-carousel-auto-scroll";
import { pfpImg } from "../utils";
import ReviewCard from "./ReviewCard.tsx";
import { reviews, reviews2 } from "../constants";
const Reviews = () => {
  return (
    <section
      id={"reviews"}
      className={"flex flex-col gap-2 flex-center bg-none"}
    >
      <div
        className={
          "p-4 pt-20 sm:mt-24 mt-20 w-full h-full flex flex-col gap-14 flex-center "
        }
      >
        <div className={"w-fit flex flex-col gap-5"}>
          <h2
            className={
              "sm:text-5xl text-4xl max-sm:text-3xl font-[700] text-nowrap text-center"
            }
          >
            Reviews
          </h2>
          <p className={"max-sm:text-xs font-[200] text-center"}>
            See how we transformed their digital presence <br /> with our
            innovative solutions.
          </p>
        </div>
        <div className={"flex flex-col gap-8"}>
          <Carousel
            plugins={[
              AutoScroll({
                speed: 2.2,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
          >
            <CarouselContent className="">
              {reviews.map((review, index) => (
                <>
                  <CarouselItem key={index} className="md:basis-1/6">
                    <ReviewCard
                      name={review.name}
                      image={pfpImg}
                      review={review.review}
                    />
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[
              AutoScroll({
                speed: 1,
                direction: "backward",
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
          >
            <CarouselContent className="">
              {reviews2.map((review, index) => (
                <>
                  <CarouselItem key={index} className="md:basis-1/6">
                    <ReviewCard
                      name={review.name}
                      image={pfpImg}
                      review={review.review}
                    />
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Reviews;

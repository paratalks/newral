import { mailBlue, mailWhite, midElipse2 } from "../utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.tsx";

const Faq = () => {
  return (
    <section
      className={
        "faq-section flex flex-center max-w-full relative p-4 sm:pt-30 pt-20 sm:mt-26 mt-20"
      }
    >
      <img
        src={midElipse2}
        alt="midElipse"
        className={"absolute top-12 left-0 -z-10 blur-xl"}
      />
      <div
        className={
          "lg:w-4/6 w-full bg-[#000A39] bg-opacity-40 border p-12 flex flex-col rounded-3xl"
        }
      >
        <div
          className={
            "flex md:flex-row flex-col md:justify-center md:items-start justify-between items-center gap-0"
          }
        >
          <div
            className={
              "flex flex-col justify-between items-center w-full h-full"
            }
          >
            <div className={"flex flex-1 mb-20 w-full max-md:flex-center"}>
              <h2 className={"text-3xl font-[700]"}>
                {" "}
                Frequently <br />
                Asked Questions
              </h2>
            </div>
            <div className={"w-full max-md:flex-center"}>
              <div
                className={
                  "flex flex-col bg-[#0066FF] p-4 pt-6 rounded-3xl w-80 flex-center gap-8"
                }
              >
                <img src={mailWhite} alt="" width={70} height={70} />
                <div className={"flex flex-col gap-2"}>
                  <h3 className={"text-center"}>
                    You have a different question?
                  </h3>
                  <p
                    className={
                      "text-center font-[300] opacity-[0.5] text-[0.8rem]"
                    }
                  >
                    Our team will answer all your questions. We ensure a quick
                    response & support for all your specific needs.
                  </p>
                </div>

                <div
                  className={
                    "flex flex-row flex-center pr-4 gap-2 bg-amber-50 rounded-full"
                  }
                >
                  <img src={mailBlue} alt="" width={30} height={30} />
                  <p className={"text-black text-[0.8rem] "}>
                    support@newral.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <div className={" pt-4 "}>
              <AccordionItem
                value="item-1"
                className={
                  " w-full h-full p-6 hover:bg-primary hover:border rounded-3xl"
                }
              >
                <AccordionTrigger className={"hover:no-underline "}>
                  How can we start a project with you?
                </AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Just contact us through our website.
                  We'll discuss your needs, provide a customized proposal, and
                  once you're ready, we'll start the project together.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className={" pt-4 "}>
              <AccordionItem
                value="item-2"
                className={
                  " w-full h-full p-6 hover:bg-primary hover:border rounded-3xl"
                }
              >
                <AccordionTrigger className={"hover:no-underline "}>
                  Can you help with rebranding an existing business?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! We are experts in rebranding, helping businesses
                  refresh their identity to better compete with their current
                  market trends and company goals.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className={" pt-4 "}>
              <AccordionItem
                value="item-3"
                className={
                  " w-full h-full p-6 hover:bg-primary hover:border rounded-3xl"
                }
              >
                <AccordionTrigger className={"hover:no-underline "}>
                  Can You Handle Complex projects?
                </AccordionTrigger>
                <AccordionContent>
                  With over a decade of experience in software development, we
                  have successfully managed intricate and challenging projects
                  across various industries. Whether it’s creating a great SaaS
                  platform, a dynamic Healthtech application, or an EdTech
                  solution, our team loves on solving complex problems with
                  precision and creativity.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className={" pt-4 "}>
              <AccordionItem
                value="item-4"
                className={
                  " w-full h-full p-6 hover:bg-primary hover:border rounded-3xl"
                }
              >
                <AccordionTrigger className={"hover:no-underline "}>
                  Have you worked with Big Brands?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we’ve working with many brands like Bansal Classes,
                  Competishun, OTT platforms and many big brands from Sharktank
                  delivering innovative and impactful solutions. Our expertise
                  has helped these brands scale and succeed in their respective
                  domains.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className={" pt-4 "}>
              <AccordionItem
                value="item-5"
                className={
                  " w-full h-full p-6 hover:bg-primary hover:border rounded-3xl"
                }
              >
                <AccordionTrigger className={"hover:no-underline "}>
                  Do you offer support after the project is completed?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide ongoing support and maintenance to make sure
                  your digital platforms continue to perform optimally. We're
                  here to help long after the project is delivered.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default Faq;

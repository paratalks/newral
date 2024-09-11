import { contactUsElipseImg, icons } from "../utils";
import { contactDetails } from "../constants";

const ContactUs = () => {
  return (
    <section
      id={"contactus"}
      className="contact-us flex flex-col items-center h-full justify-center gap-8 mb-60 relative"
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
            Contact Us
          </h2>
          <p className={"max-sm:text-xs font-[200] text-center"}>
            Ready to get your digital strategy? Contact Newral today, and let’s{" "}
            <br />
            discuss how we can help you achieve your brand goals.
          </p>
        </div>
        <div
          className={
            "flex flex-col border border-white rounded-3xl p-16 w-8/12"
          }
        >
          <div className={"w-full h-full flex md:flex-row flex-col"}>
            <div className={"flex flex-col gap-14 w-1/2"}>
              <div className="flex flex-col gap-2">
                {/*    left upper title and desc */}
                <h2 className={"lg:text-3xl text-3xl font-bold"}>
                  Get in Touch
                </h2>
                <p className={"text-gray-400"}>
                  Our Team will reach out to you as soon as possible
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-20">
                <div className={"flex flex-col gap-2"}>
                  <img
                    className={"w-10 h-10"}
                    src={icons.mailIcon}
                    alt={"mail icon"}
                  />
                  <p className={"font-bold text-lg"}>Email</p>
                  <p>{contactDetails.contactEmail}</p>
                </div>
                <div className={"flex flex-col gap-2"}>
                  <img
                    className={"w-10 h-10"}
                    src={icons.mailIcon}
                    alt={"mail icon"}
                  />
                  <p className={"font-bold text-lg"}>Phone</p>
                  <p>{contactDetails.contactPhone}</p>
                </div>
                <div className={"flex flex-col gap-2"}>
                  <img
                    className={"w-10 h-10"}
                    src={icons.mailIcon}
                    alt={"mail icon"}
                  />
                  <p className={"font-bold text-lg"}>Address</p>
                  <p className={"w-40"}>{contactDetails.contactAddress}</p>
                </div>
                <div className={"flex flex-col gap-2"}>
                  <img
                    className={"w-10 h-10"}
                    src={icons.mailIcon}
                    alt={"mail icon"}
                  />
                  <p className={"font-bold text-lg"}>Socials</p>
                  <p>{contactDetails.contactEmail}</p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col text-white w-1/2"}>
              <div className="flex items-center justify-center bg-primary/[0.2] p-4 py-6 rounded-3xl border border-primary">
                <div className="px-2 md:px-12">
                  <form action="" className="space-y-10">
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full  items-center gap-1.5">
                        <label className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          First Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-lg border border-white bg-secondary px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-lg border border-white bg-secondary px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-white bg-secondary px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Phone number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-lg border border-white bg-secondary px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-lg border border-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 bg-secondary"
                        id="message"
                        placeholder="Leave us a message"
                        cols={30}
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="primary-button whitespace-nowrap max-sm:text-xs hover:shadow-[-2px_6px_22px_-7px_rgba(0,0,0,1)] drop-shadow-sm hover:shadow-primary transition-shadow ease-linear duration-200 w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={contactUsElipseImg}
        alt="eclipse"
        className="absolute left-0 -z-10 top-20"
      />
    </section>
  );
};
export default ContactUs;

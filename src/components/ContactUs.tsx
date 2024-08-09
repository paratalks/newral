
const ContactUs = () => {
    return (
      <section className="contact-us flex flex-col items-center justify-center gap-8">
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
              Ready to get your digital strategy? Contact Newral today, and
              let’s <br />
              discuss how we can help you achieve your brand goals.
            </p>
          </div>
          <div className={"flex flex-col"}>
            <div className={"w-full h-full flex flex-row"}>
              <div className={"flex flex-col"}>

                <div className="flex flex-col">
                {/*    left upper title and desc */}
                </div>
                <div className="flex flex-col">
                  {/* left lower title and desc */}
                </div>
              </div>
              <div className={'flex flex-col'}>
              {/*    right side part*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ContactUs

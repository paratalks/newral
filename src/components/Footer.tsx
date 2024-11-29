import { lightLogo } from "../utils";

export const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={lightLogo} alt={"logo"} width={130} height={130} />
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
                  The best way to lift up your business.
                </p>
                <p className="text-sm text-gray-600">
                  © Copyright 2022. All Rights Reserved by Newral Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-semibold uppercase text-gray-200">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Tech Outsourcing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-semibold uppercase text-gray-200">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-semibold uppercase text-gray-200">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-500 hover:text-gray-200"
                    href="#"
                  >
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

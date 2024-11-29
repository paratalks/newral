import { lightLogo, topElipse } from "../utils";
import { navLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [logoWidth, setLogoWidth] = useState(
    window.innerWidth < 840 ? 100 : 130,
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLogoWidth(window.innerWidth < 840 ? 100 : 130);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setLogoWidth(window.innerWidth < 840 ? 100 : 130);
      });
    };
  }, [window.innerWidth]);

  useGSAP(() => {
    gsap.fromTo(
      ".riseAnimation",
      {
        y: -30,
        opacity: 0,
        stagger: 0.3,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.3,
      },
    );
  });
  return (
    <section className="w-full flex sm:py-10 py-5 sm:px-10 px-7 justify-between items-center">
      <div className="absolute top-0 left-0 -z-10">
        <img
          src={topElipse}
          alt="eclipse"
          className="blur-md"
          width={1000}
          height={1250}
        />
      </div>
      <div className="logo flex flex-2 lg:pl-24 z-10 riseAnimation md:justify-end">
        <img
          id="logo"
          src={lightLogo}
          alt="Newral Logo"
          width={logoWidth}
          height={120}
        />
      </div>
      <div
        id="navlist"
        className="riseAnimation flex flex-2 sm:mx-1 justify-center lg:gap-8 z-10 gap-3 lg:pt-4 pt-2 max-sm:hidden"
      >
        {navLists.map((list, index) => (
          <a href={`#${list.path}`} className={""}>
            {" "}
            <p
              key={index}
              className="sm:mx-2 text-sm font-medium whitespace-nowrap text-gray-300 cursor-pointer hover:text-blue-400 transition-all ease-in duration-75"
            >
              {list.title}
            </p>
          </a>
        ))}
      </div>
      <div className="riseAnimation flex items-end justify-center max-sm:justify-end z-10 max-sm:pt-5 gap-2 max-sm:flex-1 lg:pr-24">
        <a href={"#contactus"}>
          <button className="primary-button whitespace-nowrap max-sm:text-xs hover:shadow-[-2px_6px_22px_-7px_rgba(0,0,0,1)] drop-shadow-sm hover:shadow-primary transition-shadow ease-linear duration-200">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
};
export default NavBar;

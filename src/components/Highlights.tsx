import Services from "./Services.tsx";
import {midElipse} from "../utils";
import Projects from "./Projects.tsx";
import Faq from "./faq.tsx";

const Highlights = () => {
    return (
        <section className="highlists flex flex-col relative overflow-hidden sm:gap-32 gap-28" >
            <div className="part-services">
                <Services/>
                <div className="absolute top-0 -right-16 -z-10 overflow-hidden">
                    <img
                        src={midElipse}
                        alt="eclipse"
                        className="blur-md w-full h-full object-fill"

                    />
                </div>
            </div>
            <div className="part-projects w-full h-full lg:flex lg:flex-center">
                <Projects />
            </div>

        </section>
    )
}
export default Highlights

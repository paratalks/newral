import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import Faq from "./components/Faqs.tsx";

import WaterWave from "react-water-wave";
import WorkedWith from "./components/WorkWith.tsx";
import Highlights from "./components/Highlights.tsx";
import Reviews from "./components/Reviews.tsx";
import ContactUs from "./components/ContactUs.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div>
        <WaterWave dropRadius="40">
          {() => (
            <>
              <NavBar />
              <Hero />
              <WorkedWith />
            </>
          )}
        </WaterWave>
        <Highlights />
        <Faq />
        <Reviews />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;

import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";

import WaterWave from "react-water-wave";
import WorkedWith from "./components/WorkWith.tsx";
import Services from "./components/Services.tsx";

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
          <Services />
      </div>
    </>
  );
}

export default App;

import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import Highlights from "./components/Highlights.tsx";

import WaterWave from "react-water-wave";

function App() {
  return (
    <>
      <div>
        <WaterWave dropRadius="40">
          {() => (
            <>
              <NavBar />
              <Hero />

            </>
          )}
        </WaterWave>
          <Highlights />
      </div>
    </>
  );
}

export default App;

import "./App.css";

import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import Cards from "./Components/Cards";
import Advertisment from "./Components/Advertisment";
import FAQs from "./Components/FAQs";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Cards />
      <Advertisment />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;

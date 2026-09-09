import Hero from "../Components/Hero/Hero";
import Search from "../Components/Search_Layer/Search";
import About from "./About";
import Activities from "./Activities";
import Contact from "./Contact";
import Discover from "./Discover";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Search />
      <Discover />
      <Activities />
      <About />
      <Contact />
    </div>
  );
}

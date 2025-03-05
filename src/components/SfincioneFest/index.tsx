import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import About from "./About";
import EventHighlights from "./EventHighlights";
import Schedule from "./Schedule";
import Venues from "./Venues";
import Competitions from "./Competitions";
import Presenters from "./Presenters";
import Location from "./Location";
import Registration from "./Registration";
import Footer from "./Footer";

export default function SfincioneFest() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <HeroCarousel />
      <About />
      <EventHighlights />
      <Schedule />
      <Venues />
      <Competitions />
      <Presenters />
      <Location />
      <Registration />
      <Footer />
    </div>
  );
}

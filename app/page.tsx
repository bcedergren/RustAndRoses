import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shows from "@/components/Shows";
import SongList from "@/components/SongList";
import Media from "@/components/Media";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Shows />
        <SongList />
        <Media />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

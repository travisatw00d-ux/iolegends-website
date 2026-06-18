import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItPlays from "@/components/HowItPlays";
import Horde from "@/components/Horde";
import Playtest from "@/components/Playtest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <HowItPlays />
        <Horde />
        <Playtest />
      </main>
      <Footer />
    </>
  );
}

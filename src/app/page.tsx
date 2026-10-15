import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Games />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

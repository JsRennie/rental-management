import Header from "../aboutus/utils/Header";
import Footer from "../components/layouts/Section/Footer";
import HeroSection from "./utils/HeroSection";

export default function Home() {
  return (
    <main className="mx-20">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}

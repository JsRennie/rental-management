import Footer from "../components/layouts/Section/Footer";
import Header from "./utils/Header";
import HeroSection from "./utils/HeroSection";
import RoomDetailSection from "./utils/RoomDetailSection";

export default function Home() {
  return (
    <main>
      <div className="mx-20">
        <Header />
        <HeroSection />
        <RoomDetailSection />
        <Footer />
      </div>
    </main>
  );
}

import Header from "./utils/Header";
import Navigation from "./utils/Navigation";

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="block md:flex h-screen">
        <div className="md:w-1/5 md:border-r">
          <Navigation />
        </div>
        <div className="md:w-4/5 pl-8 pt-6">{children}</div>
      </div>
    </section>
  );
}

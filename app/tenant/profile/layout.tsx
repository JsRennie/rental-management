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
      <div className="flex h-screen">
        <div className="w-1/5 border-r">
          <Navigation />
        </div>
        <div className="w-4/5 pl-8 pt-6">{children}</div>
      </div>
    </section>
  );
}

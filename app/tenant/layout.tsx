import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen grid grid-cols-12">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="md:col-span-2 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:col-span-10 col-span-12">
        <TopNav />
        {children}
      </div>
    </section>
  );
}

import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen grid grid-cols-12">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="lg:col-span-2 hidden lg:block ">
        <SideNav />
      </div>
      <div className="lg:col-span-10 col-span-12 overflow-y-auto">
        <div className="sticky top-0 z-12">
          <TopNav />
        </div>
        {children}
      </div>
    </section>
  );
}

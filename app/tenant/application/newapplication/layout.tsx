import Stepper from "@/app/components/Stepper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header>
        <Stepper />
      </header>
      {children}
    </section>
  );
}

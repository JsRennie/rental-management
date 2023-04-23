import Stepper from "@/app/components/Stepper";

export default function NewAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Stepper />
      {children}
    </section>
  );
}

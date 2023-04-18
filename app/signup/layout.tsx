import TopBar from "../components/TopBar";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <TopBar />
      {children}
    </section>
  );
}

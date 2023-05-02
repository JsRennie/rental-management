import ProgressBar from "../components/ProgressBar";
import TopBar from "../components/TopBar";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopBar />
      <ProgressBar percentage={0} />
      {children}
    </section>
  );
}

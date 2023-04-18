import "./globals.css";

export const metadata = {
  title: "My Caretaker",
  description: "Rental Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

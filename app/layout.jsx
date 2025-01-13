import "./globals.css";

export const metadata = {
  title: "Architect - Riazul Islam",
  description: "I am Architect Riazul Islam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}

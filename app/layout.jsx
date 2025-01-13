import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Architect - Riazul Islam",
  description: "I am Architect Riazul Islam.",
  icons: "/Images/Riaz-Logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 merriweather-regular">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

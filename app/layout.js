import NavBar from "./NavBar";
import "./globals.css";
import { Cardo } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Welsh Mythology",
  description: "Learn",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="relative overflow-x-hidden overflow-y-scroll scrollbar-none"
    >
      <body style={{ background: "#000000" }} className={cardo.className}>
        <NavBar />
        <div className="w-screen h-full">{children}</div>
      </body>
    </html>
  );
}

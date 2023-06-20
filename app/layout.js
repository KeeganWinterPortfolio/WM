import NavBar from "./NavBar";
import "./globals.css";
import { Courgette } from "next/font/google";

const courgette = Courgette({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Welsh Mythology",
  description: "Learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body style={{ background: "#000000" }} className={courgette.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

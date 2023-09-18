import Header from "../../components/Header";
import ThreeScene from "../../components/background";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Porfolio Website",
  description: "Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThreeScene className={inter.className}>
        <Header />
        {children}
        {/* <footer>
          <p>foot</p>
        </footer> */}
      </ThreeScene>
    </html>
  );
}

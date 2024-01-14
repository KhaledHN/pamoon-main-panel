import Image from "next/image";
import { Inter } from "next/font/google";
import Page1 from "../../components/Page1";
import Page2 from "../../components/Page2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Page1 />
      <Page2 />
    </div>
  );
}

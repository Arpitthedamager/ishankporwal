import Image from "next/image";
import Navbar from "./components/nevbar/Navbar";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between px-8">
      <Navbar/>
    </main>
  );
}

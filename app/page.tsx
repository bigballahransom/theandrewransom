import Contact from "@/components/custom/Contact";
import Hero from "@/components/custom/Hero";
import Projects from "@/components/custom/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}

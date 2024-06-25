'use client'
import React, { useRef } from 'react'
import Contact from "@/components/custom/Contact";
import Hero from "@/components/custom/Hero";
import Projects from "@/components/custom/Projects";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="">
      <div>
        <Hero scrollToContact={scrollToContact} />
        <Projects />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </main>
  );
}


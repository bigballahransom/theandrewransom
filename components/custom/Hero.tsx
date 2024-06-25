import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" alt="hero" src="/hero.jpg" width={1000} height={1000} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FRONT END DEVELOPER / SALES ARCHITECT</h2>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Andrew Ransom
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">A multi-tool of business and technical skills. Goal oriented individual, with strong problem-solving skills. I bring a track record of success working in a start-up environment. Strong entrepreneurial spirit, hard working, and up for new challenges!</p>
            <div className="flex justify-center">
              <Button onClick={scrollToContact}>Contact</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-blue-400">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Explore My Work</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/crm.png" alt="blog" width={1000} height={1000}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULL STACK</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Qube Movers CRM</h1>
            <p className="leading-relaxed mb-3">Unleah your sales pipeline with smart automation, smart AI estimates, and email and text marketing. Complete with crew checkout and paperless Bill of Ladings.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                <Badge variant="outline" className='bg-blue-400 text-white'>NextJS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>TypeScript</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Sanity.io</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Tailwind CSS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Pages Router</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>AWS SES</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Twilio SMS</Badge>
            </div>
            <div className="flex items-center flex-wrap ">
              <Link href='https://www.qube-software.com' className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer hover:text-blue-500">View Project
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/bookqube.png" alt="blog" width={1000} height={1000}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULL STACK</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">BookQube.com</h1>
            <p className="leading-relaxed mb-3">A revolutionary platform designed to transform the way you move. Weve reimagined every step, providing you with a seamless, enjoyable, and efficient moving experience.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                <Badge variant="outline" className='bg-blue-400 text-white'>NextJS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>TypeScript</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Sanity.io</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Tailwind CSS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>App Router</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Custom GPT</Badge>
            </div>
            <div className="flex items-center flex-wrap ">
              <Link href='https://www.bookqube.com' className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer hover:text-blue-500">View Project
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/pickupmonster.png" alt="blog" width={1000} height={1000}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULL STACK</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PickUpMonster.com</h1>
            <p className="leading-relaxed mb-3">Find pick up basketball, golf, frisbee, pickleball and much, much more. Connect with friends using a twitter style feed with filters.</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                <Badge variant="outline" className='bg-blue-400 text-white'>NextJS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>TypeScript</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>MongoDB</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>Tailwind CSS</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>App Router</Badge>
                <Badge variant="outline" className='bg-blue-400 text-white'>AWS SES</Badge>
            </div>
            <div className="flex items-center flex-wrap ">
              <Link href='https://www.pickupmonster.com' className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer hover:text-blue-500">View Project
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Projects

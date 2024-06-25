'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src='/logo.png' alt='logo' className='w-10 rounded-full' width={1000} height={1000} />
            <span className="ml-3 text-xl">Andrew Ransom</span>
          </a>
          <button
            className="sm:hidden block mt-4 text-gray-500 focus:outline-none"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? 'Show More' : 'Show Less'}
          </button>
          <span className={`sm:flex ${isCollapsed ? 'hidden' : 'flex'} flex-col sm:flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start`}>
            <div className='flex items-center'>
              <p className="text-sm text-gray-500 sm:mr-4 sm:pr-4 sm:border-r-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 1996 Andrew Ransom —
                <a href="https://github.com/bigballahransom" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@bigballahransom</a>
              </p>
              <Link href='https://github.com/bigballahransom' className="ml-3 text-gray-500 hover:cursor-pointer">
                <FaGithub size={20} />
              </Link>
              <Link href='https://www.linkedin.com/in/andrew-ransom-b36a02266/' className="ml-3 text-gray-500 hover:cursor-pointer">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </div>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer


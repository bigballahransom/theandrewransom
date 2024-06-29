'use client'
import Image from 'next/image'
import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from '../ui/button'
import jsPDF from 'jspdf';

const Navbar = () => {
  const [saving, setSaving] = React.useState(false)
  const { toast } = useToast()
  
  function saveResume() {
    setSaving(true);
    const doc = new jsPDF('portrait', 'px', 'a4', false);

    doc.addImage('https://i.ibb.co/TgMwSCQ/Andrew-Ransom-1.png', 'PNG', 0, 0, 465, 700);

    doc.addPage();

    doc.addImage('https://i.ibb.co/MnhZvQD/Andrew-Ransom-2.png', 'PNG', 0, 0, 465, 700);
    
    doc.save('Andrew-Ransom-Resume.pdf');
    setSaving(false);
  }
  
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex p-5 flex-row justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-0">
            <Image src='/logo.png' alt='logo' className='w-10 rounded-full' width={1000} height={1000}/>
            <span className="ml-3 text-xl">Andrew Ransom</span>
          </a>
          <Button className="inline-flex text-black items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 gap-2" 
            onClick={saveResume}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume
          </Button>
        </div>
      </header>
    </div>
  )
}

export default Navbar;


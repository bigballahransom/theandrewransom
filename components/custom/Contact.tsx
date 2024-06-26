'use client'

import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import emailjs from '@emailjs/browser'
import LoadingDots from './LoadingDots'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailProcessing, setProcessing] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const processEmail = () => {
    setProcessing(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      console.log('Form submitted');
      emailjs.sendForm('service_798gcgh', 'template_m58iu46', form.current, 'paZVfGZ40gJeIKN4x')
        .then((result: any) => {
          console.log('Email sent successfully:', result.text);
          setProcessing(false);
          setEmailSent(true);
        }, (error: any) => {
          console.error('Error sending email:', error.text);
          setEmailSent(false);
        });
    } else {
      console.error('Form reference is null');
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <form className="container px-5 py-24 mx-auto" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lets Connect</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Start a conversation with me!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="user_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="user_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2">
                <Button className="gap-2 w-full" type='submit' value="Send" onClick={processEmail}>{emailSent && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                )}
                {emailProcessing && <LoadingDots/>}
                Contact</Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact



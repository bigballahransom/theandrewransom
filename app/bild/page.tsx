'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PASSWORD = 'your_password'; // Set your desired password here

const Page = () => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: any) => {
    setEnteredPassword(e.target.value);
  };

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault();
    if (enteredPassword === PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className='min-h-screen flex mt-24 justify-center'>
      <div className='w-full max-w-md'>
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
            <h1 className='mb-2'>This page is password protected</h1>
          <label>
            Password:
            <Input
              type="password"
              value={enteredPassword}
              onChange={handlePasswordChange}
              className='mt-2'
            />
          </label>
          <Button type="submit" className='mt-4'>Submit</Button>
        </form>
      ) : (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      </div>
    </div>
  );
};

export default Page;


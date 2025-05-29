"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const GetInTouchPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-100 p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="p-10 md:w-1/2">
            <h1 className="text-2xl font-medium">
              Get in <span className="text-teal-400">touch</span>
            </h1>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-1">
                <label className="text-sm text-gray-400 ">Contact name</label>
                <Input 
                  className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 shadow-none" 
                />
              </div>
              
              <div className="flex gap-6">
                <div className="space-y-1 w-1/2">
                  <label className="text-sm text-gray-400">City</label>
                  <Input 
                    className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 shadow-none" 
                  />
                </div>
                <div className="space-y-1 w-1/2">
                  <label className="text-sm text-gray-400">Postcode</label>
                  <Input 
                    className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 shadow-none" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Contact Phone</label>
                <Input 
                  className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 shadow-none" 
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">E-mail</label>
                <Input 
                  type="email"
                  className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 shadow-none" 
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Let&apos;s talk about your idea</label>
                <Textarea 
                  className="border-0 border-b border-gray-200 focus:border-teal-300 rounded-none px-0 resize-none min-h-[60px] shadow-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-8"
              >
                Submit
              </Button>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="relative md:w-1/2 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-r-[32px] overflow-hidden">
            {/* This div is intentionally left empty as requested */}
            <div className="h-full w-full">
                <Image src='/bottles/cherry_3.jpg' width={450} height={100} alt='image' className='py-4'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPage;
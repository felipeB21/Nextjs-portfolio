'use client'

import React from 'react'
import { toast } from 'react-hot-toast'
import { sendEmail } from '../actions/sendEmail'
import SubmitPending from './submit-pending'

export default function Contact() {

  return (
    <section id='contact' className='mt-24 mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <h2 className="text-2xl font-bold text-gray-100 mb-12 animate-fade-down animate-duration-[2000ms]">Contact</h2>
      <p className='text-gray-200'>Please contact me directly at <a className='underline text-white' href='mailto:bolgarfelipe@gmail.com'>bolgarfelipe@gmail.com</a> or through this form.</p>
      <form className='mt-10 flex flex-col text-black' action={async (formData) => {
        const {data, error} = await sendEmail(formData)
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}>
        <input className='h-14 outline-none px-4 rounded-lg border border-gray-900/90' type="email" placeholder='Your email' name='email' required maxLength={200}/>
        <textarea className='h-52 my-3 outline-none rounded-lg border border-gray-900/90 p-4' placeholder='Your message' name='message' required maxLength={300}/>
        <SubmitPending />
      </form>
    </section>
  )
}

import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsTelephoneXFill } from "react-icons/bs";

function Contact() {
  return (
    <div id='contact' className='pt-32 container'>

<div className='grid md:grid-cols-2 gap-10 '>

<div className='space-y-8'>
<h2 className='text-5xl font-semibold' data-aos="fade-right" >Reach Out</h2>
<p className='text-gray-300 text-[18px] pt-2' data-aos="fade-down">
"Feel free to reach out if you have any questions or just want to connect. I'm always happy to hear from you!"
</p>
<div className='flex gap-3 items-center text-lg' data-aos="fade-left">
<MdOutlineMarkEmailUnread  size={40} /> xyz@gmail.com
</div>

<div className='flex gap-3 items-center' data-aos="fade-right">
<BsTelephoneXFill size={40} /> (021) 202-344-33
</div>
</div>

<div className='space-y-8'>
    <div className='flex flex-col gap-1 text-2xl' data-aos="fade-right">
        <label htmlFor="name">Name</label>
        <input type="text" 
        className='h-[40px] bg-transparent border border-amber-400'
        id='name' />
    </div>
    <div className='flex flex-col gap-1 text-2xl' data-aos="fade-right">
        <label htmlFor="email">Email</label>
        <input type="text" 
        className='h-[40px] bg-transparent border border-amber-400'
        id='email' />
    </div>
    <div className='flex flex-col gap-1 text-2xl' data-aos="fade-right">
        <label htmlFor="message">Message</label>
        <textarea  
        className=' bg-transparent border border-amber-400'
        id='message' rows={6} >
        </textarea>
    </div>

    <button className='bg-amber-600 p-2 font-semibold px-8 rounded-md hover:bg-amber-700'  data-aos="fade-down">Submit</button>
</div>

</div>
    </div>
  )
}

export default Contact
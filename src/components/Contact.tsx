import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsTelephoneXFill } from "react-icons/bs";
import '../app/styles/contact.css'

function Contact() {
  return (
    <div id='contact' className='contact-container'>

<div className='contact-grid md:grid-cols-2'>

<div className='contact-space'>
<h2 className='contact-heading'data-aos="fade-right" >Reach Out</h2>
<p className='contact-text' data-aos="fade-down">
"Feel free to reach out if you have any questions or just want to connect. I'm always happy to hear from you!"
</p>
<div className='contact-flex' data-aos="fade-left">
<MdOutlineMarkEmailUnread  size={40} /> xyz@gmail.com
</div>

<div className='contact-flex' data-aos="fade-right">
<BsTelephoneXFill size={40} /> (021) 202-344-33
</div>
</div>

<div className='contact-space'>
    <div className='form' data-aos="fade-right">
        <label htmlFor="name">Name</label>
        <input type="text" 
        className='input-feild'
        id='name' />
    </div>
    <div className='form' data-aos="fade-right">
        <label htmlFor="email">Email</label>
        <input type="text" 
        className='input-feild'
        id='email' />
    </div>
    <div className='form' data-aos="fade-right">
        <label htmlFor="message">Message</label>
        <textarea  
        className='textarea-feild'
        id='message' rows={6} >
        </textarea>
    </div>

    <button className='button'  data-aos="fade-down">Submit</button>
</div>

</div>
    </div>
  );
};

export default Contact
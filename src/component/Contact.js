import React from 'react'
function Contact () {

  return (
    <div>
         <>
  <div className="contact-page">
 <div className="contact-heading">
  <h1>Contact me for work / General Enquiries</h1>
 </div>

 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.9953023646112!2d79.49938122521097!3d29.19426522526465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b32773d30e5%3A0xea2c41b42474626d!2sDewalchaur%20Rd%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1668266608547!5m2!1sen!2sin" title="contact-map"></iframe>
  <div className="form-contact">
    <form action="https://formspree.io/f/mwkzwelq" method="POST" >
     <div>
       <input type="text" name='username' placeholder='Username' autoComplete='off' required />
     </div>
     <div>
      <input type="text" name='email' placeholder='Gmail' autoComplete='off' required />
     </div>
     <div>
      <textarea name='desc' placeholder='massege for me' autoComplete='off' required></textarea>
     </div>
     <div>
      <button  className="btn">Send Me</button>
      </div>
    </form>
    
  </div>
  </div>
        </>
    </div>
  )
}

export default Contact
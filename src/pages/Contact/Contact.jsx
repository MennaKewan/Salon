import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
<div className="contact-container">  
            <h2>تواصل معنا</h2>  
            <form>  
                <label htmlFor="name">الاسم</label>  
                <input type="text" id="name" name="name" required />  

                <label htmlFor="phone">رقم الهاتف</label>  
                <input type="tel" id="phone" name="phone" required />  

                <label htmlFor="message">الرسالة</label>  
                <textarea id="message" name="message" required></textarea>  

                <button type="submit">إرسال</button>  
            </form>  
        </div>  
  );
}

export default Contact;

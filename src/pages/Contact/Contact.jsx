import React from 'react';

const Contact = () => {
  return (
    <div className="log">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder=" الاسم" />
        <input type="email" placeholder=" رقم الهاتف " />
        <textarea placeholder=" الرسالة "></textarea>
        <button type="submit">  إرسال </button>
      </form>
    </div>
  );
}

export default Contact;

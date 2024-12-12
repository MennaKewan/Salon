import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data submitted:', formData);
    alert('تم إرسال الرسالة بنجاح');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact-bg"> {/* تطبيق الفئة هنا */}
      <div className="contact-container">
        <h1>تواصل معنا</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">رقم الهاتف</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">الرسالة</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

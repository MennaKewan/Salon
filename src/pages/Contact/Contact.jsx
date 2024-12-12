import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // دالة التعامل مع التغيير في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // دالة التعامل مع إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا إضافة معالجة البيانات مثل إرسالها إلى خادم
    console.log('Data submitted:', formData);
    alert('تم إرسال الرسالة بنجاح');
    setFormData({ name: '', phone: '', message: '' }); // إعادة تعيين الحقول بعد الإرسال
  };

  return (
    <div className="contact-container">
      <h2>تواصل معنا</h2>
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
  );
};

export default Contact;

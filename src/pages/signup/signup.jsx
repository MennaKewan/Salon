import React, { useState } from 'react';
import './signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // يمكن هنا إضافة عملية تسجيل الدخول
    console.log('Logging in with', formData);
  };

  return (
    <div className='login'>
      <div className='content'>
      <h1 className="title1"> تسجيل الدخول </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">اسم المستخدم</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="أدخل اسم المستخدم"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="أدخل كلمة المرور"
            required
          />
        </div>

        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
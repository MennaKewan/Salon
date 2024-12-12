import { useState } from 'react';
import PropTypes from 'prop-types';
import './signup.css';

const Login = ({ onLogin }) => {
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

    fetch(`${import.meta.env.REACT_APP_API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Login successful:', data);
          onLogin(data.token, data.role);  // Set the token and role in the parent component
        } else {
          console.error('Login failed:', data.message);
          alert('Login failed: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='login'>
      <div className='content'>
        <h1 className="title1">تسجيل الدخول</h1>
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

Login.propTypes = { onLogin: PropTypes.func.isRequired };

export default Login;

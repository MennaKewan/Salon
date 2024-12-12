<<<<<<< HEAD
import React, { useState } from 'react';
import './Service.css';

const Service = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOrderClick = (service) => {
    if (selectedOption) {
      setSelectedService(service);
      setShowOrderForm(true);
    } else {
      alert('يرجى اختيار الخدمة أولاً');
    }
  };

  const handleFormClose = () => {
    setShowOrderForm(false);
    setSelectedService('');
    setSelectedOption('');
  };

  return (
    <div>
      <main className="service-main">
        <h1>خدمات صالوناتي</h1>

        <div className="service-card">
          <img src="images/haircut.jpg" alt="قص الشعر" className="service-image" />
          <h2>خدمات الشعر</h2>
          <select className="service-select" onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">اختر الخدمة</option>
            <option value="قص الشعر">قص الشعر: من ٦٠ ريال إلى ١٢٠ ريال</option>
            <option value="صبغ الشعر">صبغ الشعر: من ٥٠٠ ريال إلى ١٦٠٠ ريال</option>
            <option value="استشوار">إستشوار: من ٨٠ ريال إلى ١٢٠ ريال</option>
            <option value="علاجات الشعر">علاجات الشعر: من ٧٠٠ ريال إلى ٢٠٠٠ ريال</option>
          </select>
          <button onClick={() => handleOrderClick('خدمات الشعر')}>اطلب الآن</button>
        </div>

        <div className="service-card">
          <img src="images/makeup.jpg" alt="خدمات المكياج" className="service-image" />
          <h2>خدمات المكياج</h2>
          <select className="service-select" onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">اختر الخدمة</option>
            <option value="مكياج سهرة">مكياج سهرة: ٤٠٠ ريال</option>
            <option value="مكياج مناسبات">مكياج مناسبات: ٤٥٠ ريال</option>
            <option value="مكياج ناعم">مكياج ناعم: ٢٥٠ ريال</option>
            <option value="مكياج عروس">مكياج عروس: من ١٠٠٠ إلى ١٥٠٠ ريال</option>
          </select>
          <button onClick={() => handleOrderClick('خدمات المكياج')}>اطلب الآن</button>
        </div>

        <div className="service-card">
          <img src="images/other.jpg" alt="خدمات أخرى" className="service-image" />
          <h2>خدمات أخرى</h2>
          <select className="service-select" onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">اختر الخدمة</option>
            <option value="بديكير و منيكير">بديكير و منيكير: من ١٥٠ ريال إلى ٢٠٠ ريال</option>
            <option value="عناية بالبشرة">عناية بالبشرة: من ٢٥٠ ريال إلى ٥٠٠ ريال</option>
          </select>
          <button onClick={() => handleOrderClick('خدمات أخرى')}>اطلب الآن</button>
        </div>
      </main>

      {showOrderForm && (
        <div className="order-form">
          <h2>طلب {selectedService}</h2>
          <form>
            <label>
              الاسم:
              <input type="text" name="name" required />
            </label>
            <label>
              البريد الإلكتروني:
              <input type="email" name="email" required />
            </label>
            <label>
              رقم الهاتف:
              <input type="tel" name="phone" required />
            </label>
            <label>
              العنوان:
              <input type="text" name="address" required />
            </label>
            <label>
              طريقة الدفع:
              <select name="payment" required>
                <option value="">اختر طريقة الدفع</option>
                <option value="credit">بطاقة ائتمان</option>
                <option value="cash">نقداً عند التسليم</option>
              </select>
            </label>
            <button type="submit">إرسال الطلب</button>
            <button type="button" onClick={handleFormClose}>إغلاق</button>
          </form>
        </div>
      )}
    </div>
  );
};

=======
import React from 'react';
import './Service.css';

const services = [
    { name: 'قص شعر', price: '12.0 ر.س' },
    { name: 'قص شعر', price: '20.0 ر.س' },
];

const Service = () => {
    return (
      <div className='servicebg'> 
        <div className="main">
            <h1>خدمات صالوناتي</h1>
            <div className="salons-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h2>{service.name}</h2>
                        <p>السعر: {service.price}</p>
                        <p>تاريخ الخدمة: <input type="date" /></p>
                        <button>اطلب الآن</button>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
};

>>>>>>> 16bfdc82ce5e16c1208b5ea0f42053ff9cce91fe
export default Service;

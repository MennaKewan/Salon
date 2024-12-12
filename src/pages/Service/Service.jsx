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

export default Service;

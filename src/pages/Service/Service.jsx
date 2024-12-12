import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <div>
            <main>  
        <h1>خدمات صالوناتي</h1>  
        <div className="service-card">  
          <h2>قص شعر</h2>  
          <p>السعر: 12.0 ر.س</p>  
          <p>تاريخ الخدمة: <input type="date" /></p>  
          <button>اطلب الآن</button>  
        </div>  
        <div className="service-card">  
          <h2>قص شعر</h2>  
          <p>السعر: 20.0 ر.س</p>  
          <p>تاريخ الخدمة: <input type="date" /></p>  
          <button>اطلب الآن</button>  
        </div>  
      </main>  

    </div>
  )
}

export default Service

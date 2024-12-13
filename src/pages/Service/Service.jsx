import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div>
      <main>
        <h1>خدمات صالوناتي</h1>

        <div className="service-card">
          <img src="images/haircut.jpg" alt="قص الشعر" className="service-image" />
          <h2>خدمات الشعر</h2>
          <select className="service-select">
            <option value="">اختر الخدمة</option>
            <option value="قص الشعر">قص الشعر: من ٦٠ ريال إلى ١٢٠ ريال</option>
            <option value="صبغ الشعر">صبغ الشعر: من ٥٠٠ ريال إلى ١٦٠٠ ريال</option>
            <option value="استشوار">إستشوار: من ٨٠ ريال إلى ١٢٠ ريال</option>
            <option value="علاجات الشعر">علاجات الشعر: من ٧٠٠ ريال إلى ٢٠٠٠ ريال</option>
          </select>
          <button>اطلب الآن</button>
        </div>

        <div className="service-card">
          <img src="images/makeup.jpg" alt="خدمات المكياج" className="service-image" />
          <h2>خدمات المكياج</h2>
          <select className="service-select">
            <option value="">اختر الخدمة</option>
            <option value="مكياج سهرة">مكياج سهرة: ٤٠٠ ريال</option>
            <option value="مكياج مناسبات">مكياج مناسبات: ٤٥٠ ريال</option>
            <option value="مكياج ناعم">مكياج ناعم: ٢٥٠ ريال</option>
            <option value="مكياج عروس">مكياج عروس: من ١٠٠٠ إلى ١٥٠٠ ريال</option>
          </select>
          <button>اطلب الآن</button>
        </div>

        <div className="service-card">
          <img src="images/other.jpg" alt="خدمات أخرى" className="service-image" />
          <h2>خدمات أخرى</h2>
          <select className="service-select">
            <option value="">اختر الخدمة</option>
            <option value="بديكير و منيكير">بديكير و منيكير: من ١٥٠ ريال إلى ٢٠٠ ريال</option>
            <option value="عناية بالبشرة">عناية بالبشرة: من ٢٥٠ ريال إلى ٥٠٠ ريال</option>
          </select>
          <button>اطلب الآن</button>
        </div>
      </main>
    </div>
  );
};

export default Service;

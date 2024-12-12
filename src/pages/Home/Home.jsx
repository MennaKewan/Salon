import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    
    <div className="home">
      <div className='content'>
      <h1 className='white1'>مرحباً بك في Miroire</h1>
        <p>"ابحث، احجز، تزيّن - كل اختيارات الصالونات في مكان واحد"</p>
        <div className='home-btn'>
          <button>خدماتنا</button>
          <button>احجز موعداً</button>
      </div>
    </div>
    </div>
  );
}

export default Home;

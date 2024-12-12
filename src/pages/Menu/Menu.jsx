import React from 'react';
import './Menu.css'
const salons = [
  { name: 'ahmedfaheem', services: 0 },
  { name: 'بائع ورد', services: 2 },
  { name: 'صالوناتي', services: 2 },
  { name: 'sq12', services: 0 },
];
function Menu() {
  return (
    <div className='menubg'>
<div className="main-container">
      <h1 className="title">قائمة الصالونات</h1>
      <div className="salons-container">
        {salons.map((salon, index) => (
          <div key={index} className="card-container">
            <div className="card">
              <h5 className="card-title">{salon.name}</h5>
              <p className="card-text">عدد الخدمات: {salon.services}</p>
              <button className="card-button">عرض الخدمات</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Menu;

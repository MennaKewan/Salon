import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, serviceName: 'خدمة 1', orderNumber: '5', serviceDate: '2024-12-18', status: 'بانتظار قبول الطلب', customerName: 'عميل 1', customerEmail: 'customer1@example.com' },
  ]);

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const editOrder = (id) => {
    const orderToEdit = orders.find(order => order.id === id);
    setNewOrder({ ...orderToEdit });
    deleteOrder(id);
  };

  return (
    <div className="orders-bg"> {/* تطبيق الفئة هنا */}
      <div className="orders-container">
        <h1 style={{color:"white"}}>طلباتي</h1>

        <table className="orders-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>اسم الخدمة</th>
              <th>تاريخ الخدمة</th>
              <th>اسم العميل</th>
              <th>البريد الإلكتروني للعميل</th>
              <th>الحالة</th>
              <th>التعديلات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.orderNumber}</td>
                <td>{order.serviceName}</td>
                <td>{order.serviceDate}</td>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => editOrder(order.id)}>تعديل</button>
                  <button onClick={() => deleteOrder(order.id)}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;

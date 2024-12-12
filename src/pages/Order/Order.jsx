import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  // حالة لتخزين الطلبات
  const [orders, setOrders] = useState([
    { id: 1, serviceName: 'خدمة 1', orderNumber: '5', serviceDate: '2024-12-18', status: 'بانتظار قبول الطلب' },
  ]);

  // حالة لإضافة طلب جديد
  const [newOrder, setNewOrder] = useState({
    serviceName: '',
    orderNumber: '',
    serviceDate: '',
    status: 'بانتظار قبول الطلب',
  });

  // وظيفة لإضافة طلب جديد
  const addOrder = () => {
    if (newOrder.serviceName && newOrder.orderNumber && newOrder.serviceDate) {
      const orderId = orders.length ? orders[orders.length - 1].id + 1 : 1;
      setOrders([...orders, { ...newOrder, id: orderId }]);
      setNewOrder({ serviceName: '', orderNumber: '', serviceDate: '', status: 'بانتظار قبول الطلب' });
    } else {
      alert('يرجى ملء جميع الحقول');
    }
  };

  // وظيفة لحذف الطلب
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // وظيفة لتعديل الطلب
  const editOrder = (id) => {
    const orderToEdit = orders.find(order => order.id === id);
    setNewOrder({ ...orderToEdit });
    deleteOrder(id); // إزالة الطلب القديم قبل إضافة التعديلات
  };

  return (
    <div className="orders-container">
      <h1>طلبياتي</h1>

      {/* نموذج إضافة طلب جديد */}
      <div className="add-order">
        <input
          type="text"
          placeholder="اسم الخدمة"
          value={newOrder.serviceName}
          onChange={(e) => setNewOrder({ ...newOrder, serviceName: e.target.value })}
        />
        <input
          type="text"
          placeholder="رقم الطلب"
          value={newOrder.orderNumber}
          onChange={(e) => setNewOrder({ ...newOrder, orderNumber: e.target.value })}
        />
        <input
          type="date"
          value={newOrder.serviceDate}
          onChange={(e) => setNewOrder({ ...newOrder, serviceDate: e.target.value })}
        />
        <button onClick={addOrder}>إضافة طلب</button>
      </div>

      {/* جدول الطلبات */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>رقم الطلب</th>
            <th>اسم الخدمة</th>
            <th>تاريخ الخدمة</th>
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
  );
};

export default Order;

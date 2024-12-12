import  { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${import.meta.env.REACT_APP_API_URL}/api/orders`)
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleProcedureChange = (index, value) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];
      updatedOrders[index].procedures = value;
      return updatedOrders;
    });
  };

  return (
    <section className=" mt-24">
      <h2 className='mr-24'>الطلبات</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">رقم الطلب</th>
              <th className="py-2 px-4 border-b">اسم الخدمة</th>
              <th className="py-2 px-4 border-b">اسم العميل</th>
              <th className="py-2 px-4 border-b">البريد الإلكتروني للعميل</th>
              <th className="py-2 px-4 border-b">تاريخ الخدمة</th>
              <th className="py-2 px-4 border-b">الحالة</th>
              <th className="py-2 px-4 border-b">اجراءات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{order.serviceName}</td>
                <td className="py-2 px-4 border-b">{order.fullName}</td>
                <td className="py-2 px-4 border-b">{order.email}</td>
                <td className="py-2 px-4 border-b">{new Date(order.serviceDate).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  <input 
                    type="text" 
                    placeholder="إجراءات" 
                    value={order.procedures}
                    onChange={(e) => handleProcedureChange(index, e.target.value)}
                    className="border rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;

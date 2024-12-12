import React from 'react'
import './Order.css'
const Order = () => {  
    const orders = [  
        { id: 1, serviceName: 'خدمة 1', orderNumber: '5', serviceDate: '2024-12-18', status: 'بانتظار قبول الطلب' },  
        // يمكن إضافة المزيد من الطلبات  
    ];  

    return (  
        <div className="orders-container">  
            <h2>طلبياتي</h2>  
            <table className="orders-table">  
                <thead>  
                    <tr>  
                        <th>رقم الطلب</th>  
                        <th>اسم الخدمة</th>  
                        <th>تاريخ الخدمة</th>  
                        <th>الحالة</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {orders.map(order => (  
                        <tr key={order.id}>  
                            <td>{order.orderNumber}</td>  
                            <td>{order.serviceName}</td>  
                            <td>{order.serviceDate}</td>  
                            <td>{order.status}</td>  
                        </tr>  
                    ))}  
                </tbody>  
            </table>  
        </div>  
    );  
};  

export default Order

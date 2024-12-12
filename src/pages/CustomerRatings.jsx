// data is  fullName email serviceName rating comment
import  { useState, useEffect } from 'react';


const CustomerRatings = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${import.meta.env.REACT_APP_API_URL}/api/ratings`)
      .then(response => response.json())
      .then(data => {
        setRatings(data);
      })
      .catch(error => {
        console.error('Error fetching ratings:', error);
      });
  }, []);
  return (
    <section className="mr-24 mt-24 ">

        <h2 >اراء العملاء</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">اسم العميل</th>
              <th className="py-2 px-4 border-b">البريد الإلكتروني</th>
              <th className="py-2 px-4 border-b">اسم الخدمة</th>
              <th className="py-2 px-4 border-b">التقييم</th>
              <th className="py-2 px-4 border-b">التعليق</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{rating.fullName}</td>
                <td className="py-2 px-4 border-b">{rating.email}</td>
                <td className="py-2 px-4 border-b">{rating.serviceName}</td>
                <td className="py-2 px-4 border-b">{rating.rating}</td>
                <td className="py-2 px-4 border-b">{rating.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  )
}





export default CustomerRatings;

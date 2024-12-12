import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(true); // حالة لتحديد ما إذا كان المستخدم يتم تسجيل خروجه
  const navigate = useNavigate();

  useEffect(() => {
    // محاكاة عملية تسجيل الخروج
    setTimeout(() => {
      // مسح بيانات الجلسة
      localStorage.removeItem('userToken'); // مسح الـ token من localStorage

      // بعد انقضاء الوقت المحدد، إعادة التوجيه إلى صفحة تسجيل الدخول
      setIsLoggingOut(false);
      navigate('/login'); // إعادة التوجيه إلى صفحة تسجيل الدخول
    }, 2000); // مدة الانتظار قبل إعادة التوجيه (2 ثانية)
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-message">
        {isLoggingOut ? (
          <>
            <h2>جاري تسجيل الخروج...</h2>
            <p>من فضلك انتظر لحظة بينما نقوم بتسجيل الخروج.</p>
          </>
        ) : (
          <>
            <h2>تم تسجيل الخروج بنجاح!</h2>
            <p>تم إنهاء الجلسة، سيتم توجيهك إلى صفحة تسجيل الدخول.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Logout;

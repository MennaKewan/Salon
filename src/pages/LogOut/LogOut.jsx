import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('userToken'); // مسح الـ token من localStorage

      setIsLoggingOut(false);
      navigate('/signup'); // إعادة التوجيه إلى صفحة تسجيل الدخول
    }, 2000);
  }, [navigate]);

  return (
    <div className="logout-bg"> {/* تطبيق الفئة هنا */}
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
    </div>
  );
};

export default Logout;

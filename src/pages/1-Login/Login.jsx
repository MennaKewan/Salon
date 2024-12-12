import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    commercialRecord: "",
    salonName: "",
    salonAddress: "",
    salonContact: "",
    workingHours: "",
    services: "",
    ownerName: "",
    ownerContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("تم إرسال البيانات بنجاح!");
  };

  const handleReset = () => {
    setFormData({
      commercialRecord: "",
      salonName: "",
      salonAddress: "",
      salonContact: "",
      workingHours: "",
      services: "",
      ownerName: "",
      ownerContact: "",
    });
  };

  const [formValues, updateFormValues] = useState({
    fullName: "",
    birthDate: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormValues({ ...formValues, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formValues);
    alert("تم إرسال البيانات بنجاح!");
  };

  const resetForm = () => {
    updateFormValues({
      fullName: "",
      birthDate: "",
      address: "",
    });
  };

  return (
    <div className="my-5 background" dir="rtl">
      <h1 className="title1">التسجيل</h1>
      <form className="form">
        <input type="text" placeholder="اسم المستخدم" />
        <input type="email" placeholder="الإيميل" />
        <input type="password" placeholder="كلمة المرور" />

        <div>
          <select
            className="form-control w-100 py-3"
            value={selectedOption}
            onChange={handleSelectionChange}
          >
            <option value="">اختيار نوع التسجيل</option>
            <option value="title1">تسجيل البائع</option>
            <option value="title2">تسجيل المستخدم</option>
          </select>

          <div style={{ marginTop: "20px" }}>
            {selectedOption === "title1" && (
              <div>
                {/* نموذج تسجيل البائع */}
                <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
                  <h1>نموذج تسجيل الصالون</h1>
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                      <label>السجل التجاري:</label>
                      <input
                        type="text"
                        name="commercialRecord"
                        value={formData.commercialRecord}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>اسم الصالون:</label>
                      <input
                        type="text"
                        name="salonName"
                        value={formData.salonName}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>عنوان الصالون:</label>
                      <input
                        type="text"
                        name="salonAddress"
                        value={formData.salonAddress}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>أوقات العمل:</label>
                      <input
                        type="text"
                        name="workingHours"
                        value={formData.salonContact}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>الخدمات المقدمة:</label>
                      <textarea
                        type="text"
                        name="services"
                        value={formData.salonContact}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>اسم المالك:</label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.salonContact}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>رقم المالك للتواصل:</label>
                      <input
                        type="text"
                        name="ownerContact"
                        value={formData.salonContact}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <button type="button" onClick={handleReset} style={{ padding: "10px 20px" }}>
                        إعادة تعيين
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {selectedOption === "title2" && (
              <div>
                {/* نموذج تسجيل المستخدم */}
                <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
                  <h1>نموذج البيانات الشخصية</h1>
                  <form onSubmit={submitForm}>
                    <div style={{ marginBottom: "15px" }}>
                      <label>الاسم الكامل:</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>تاريخ الميلاد:</label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formValues.birthDate}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label>العنوان:</label>
                      <input
                        type="text"
                        name="address"
                        value={formValues.birthDate}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                      />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <button type="button" onClick={resetForm} style={{ padding: "10px 20px" }}>
                        إعادة تعيين
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="btn5" type="submit">
          تسجيل
        </button>
      </form>
    </div>
  );
};

export default Login;

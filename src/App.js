import React, {useState} from 'react';
import {Formik} from 'formik';
import './App.css';

function App() {
    const SEX_LIST = [
        {label: 'Nam', value: 'male'},
        {label: 'Nữ', value: 'female'}
    ];

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const value = event.target.type === 'checkbox'
            ? !form[event.target.name]
            : event.target.value;
        setForm({
            ...form,
            [event.target.name]: value,
        });
    };

    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.passportNumber) {
            errors.passportNumber = 'Required';
        }
        if (!values.birthYear || values.birthYear <= 1900) {
            errors.birthYear = 'Required, must be greater than 1900';
        }
        if (!values.nationality) {
            errors.nationality = 'Required';
        }
        if (!values.city) {
            errors.city = 'Required';
        }
        if (!values.district) {
            errors.district = 'Required';
        }
        if (!values.ward) {
            errors.ward = 'Required';
        }
        if (!values.address) {
            errors.address = 'Required';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const handleSubmit = (values) => {
        alert('Khai báo thành công!');
        console.log('Submitted values:', values);
    };

    return (
        <div className="container">
            <h2>Khai báo y tế</h2>
            <Formik
                initialValues={{
                    name: '',
                    passportNumber: '',
                    birthYear: '',
                    gender: '',
                    nationality: '',
                    company: '',
                    department: '',
                    insurance: false,
                    city: '',
                    district: '',
                    ward: '',
                    address: '',
                    phone: '',
                    email: '',
                }}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name && touched.name && 'custom-input-error'}`}>
                            <label>Họ tên</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && <div className="error">{errors.name}</div>}
                        </div>

                        <div
                            className={`custom-input ${errors.passportNumber && touched.passportNumber && 'custom-input-error'}`}>
                            <label>Số hộ chiếu /CMND</label>
                            <input
                                type="text"
                                name="passportNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passportNumber}
                            />
                            {errors.passportNumber && touched.passportNumber &&
                                <div className="error">{errors.passportNumber}</div>}
                        </div>

                        <div
                            className={`custom-input ${errors.birthYear && touched.birthYear && 'custom-input-error'}`}>
                            <label>Năm sinh</label>
                            <input
                                type="number"
                                name="birthYear"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthYear}
                            />
                            {errors.birthYear && touched.birthYear && <div className="error">{errors.birthYear}</div>}
                        </div>

                        <div className="custom-input">
                            <label>Giới tính</label>
                            {SEX_LIST.map((sex) => (
                                <div key={sex.value} className="flex">
                                    <label>{sex.label}</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={sex.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            ))}
                        </div>

                        <div
                            className={`custom-input ${errors.nationality && touched.nationality && 'custom-input-error'}`}>
                            <label>Quốc tịch</label>
                            <input
                                type="text"
                                name="nationality"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nationality}
                            />
                            {errors.nationality && touched.nationality &&
                                <div className="error">{errors.nationality}</div>}
                        </div>

                        <div className="custom-input">
                            <label>Công ty làm việc</label>
                            <input
                                type="text"
                                name="company"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.company}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Bộ phận làm việc</label>
                            <input
                                type="text"
                                name="department"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.department}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Có thẻ bảo hiểm y tế</label>
                            <input
                                type="checkbox"
                                name="insurance"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                checked={values.insurance}
                            />
                        </div>

                        <div className={`custom-input ${errors.city && touched.city && 'custom-input-error'}`}>
                            <label>Tỉnh thành</label>
                            <input
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            {errors.city && touched.city && <div className="error">{errors.city}</div>}
                        </div>

                        <div className={`custom-input ${errors.district && touched.district && 'custom-input-error'}`}>
                            <label>Quận /huyện</label>
                            <input
                                type="text"
                                name="district"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.district}
                            />
                            {errors.district && touched.district && <div className="error">{errors.district}</div>}
                        </div>

                        <div className={`custom-input ${errors.ward && touched.ward && 'custom-input-error'}`}>
                            <label>Phường /xã</label>
                            <input
                                type="text"
                                name="ward"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ward}
                            />
                            {errors.ward && touched.ward && <div className="error">{errors.ward}</div>}
                        </div>

                        <div className={`custom-input ${errors.address && touched.address && 'custom-input-error'}`}>
                            <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                            <input
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {errors.address && touched.address && <div className="error">{errors.address}</div>}
                        </div>

                        <div className={`custom-input ${errors.phone && touched.phone && 'custom-input-error'}`}>
                            <label>Điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
                        </div>

                        <div className={`custom-input ${errors.email && touched.email && 'custom-input-error'}`}>
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && <div className="error">{errors.email}</div>}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default App;

import React from 'react';
import '../styles/Form.css'
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Обов\'язкове поле';
      }

      if (!values.email) {
        errors.email = 'Обов\'язкове поле';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неправильний формат email';
      }

      if (!values.phone) {
        errors.phone = 'Обов\'язкове поле';
      } else if (!/^\d{12}$/.test(values.phone)) {
        errors.phone = 'Телефон повинен містити 12 цифр та не містити літер';
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='form-container'>
      <form onSubmit={formik.handleSubmit} novalidate="novalidate">
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className='error-message'>{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className='error-message'>{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className='error-message'>{formik.errors.phone}</p>
          ) : null}
        </div>

        <button className='btn-submit' type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Form;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Este campo es requerido'),
      email: Yup.string().email('Ingrese un correo electrónico válido').required('Este campo es requerido'),
      message: Yup.string().required('Este campo es requerido'),
    }),
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          'service_gmail', // Reemplaza con el nombre de tu servicio en Email.js
          'template_contact_form', // Reemplaza con el ID de tu plantilla en Email.js
          values,
          'tu_user_id' // Reemplaza con tu User ID en Email.js
        );

        alert('Mensaje enviado con éxito');
        formik.resetForm();
      } catch (error) {
        console.error('Error al enviar el correo', error);
        alert('Error al enviar el mensaje. Por favor, inténtalo nuevamente.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      </div>

      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      </div>

      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;

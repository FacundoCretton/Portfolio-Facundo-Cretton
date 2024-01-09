import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import {
  ContactFormWrapper,
  ContactWrapper,
  Form,
  FormField,
  SubmitButton,
} from './contactStyles';


const ContactForm = () => {
  const formRef = useRef();

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
         emailjs.sendForm(
           'service_d91ya91', // ID de tu plantilla en Email.js
           'template_8todbpl', // Nombre de tu servicio en Email.js
          formRef.current, // Utiliza la referencia del formulario
          'k01k-XtMnYUy268aT' // Tu User ID en Email.js
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
    <ContactWrapper>

    <ContactFormWrapper>
      <Form onSubmit={formik.handleSubmit} ref={formRef}>
        <FormField>
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
        </FormField>

        <FormField>
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
        </FormField>

        <FormField>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
        </FormField>

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </ContactFormWrapper>
    </ContactWrapper>

  );
};

export default ContactForm;
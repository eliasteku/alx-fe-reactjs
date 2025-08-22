import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Submitted:", values);
        alert("User Registered with Formik ✅");
        resetForm();
      }}
    >
      <Form className="p-4 border rounded-md shadow-md w-80 mx-auto mt-10">
        <h2 className="text-lg font-bold mb-3">Register (Formik)</h2>

        <Field
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 w-full mb-2"
        />
        <ErrorMessage name="username" component="p" className="text-red-500" />

        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
        />
        <ErrorMessage name="email" component="p" className="text-red-500" />

        <Field
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
        />
        <ErrorMessage name="password" component="p" className="text-red-500" />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;

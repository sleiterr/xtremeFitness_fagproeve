import React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./Input";
import CtaLabel from "../Button/CtaLabel";

import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const LoginForm = ({ onLogin }) => {
  // useNavigate is a hook from react-router-dom that allows us to navigate programmatically
  const navigate = useNavigate();
  // useFormik is a hook from Formik that helps with form state management and validation
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string().required("Password is required"),
    }),

    // onSubmit is called when the form is submitted and valids
    onSubmit: async (values) => {
      try {
        // Make a POST request to the login endpoint with the form values
        const res = await fetch(`${API_URL}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        // Parse the JSON response from the server
        const data = await res.json();
        // Check if the response is ok, the status is "ok", and the token is valid
        const token = data?.data?.token;
        const isTokenValid = typeof token === "string" && token.length > 0;

        if (res.ok && data?.status === "ok" && isTokenValid) {
          toast.success("Login was successful");
          onLogin(token);

          const user = jwtDecode(token);

          if (user.role === "admin") navigate("/backoffice");
          else if (user.role === "guest") navigate("#");
        } else {
          toast.error(data?.message || "invalid login");
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong during login");
      }
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-80">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />

          <LoginButton type="submit">
            Login <CtaLabel />
          </LoginButton>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

const LoginButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="submit"
        {...rest}
        className={clsx(
          "flex items-center justify-between mx-auto w-full",
          "border-2 border-form-btn bg-transparent py-3 md:py-2 px-12 md:px-8 rounded text-center cursor-pointer",
          "font-normal text-input-custom text-xl md:text-2xl",
          "rounded-[6.25rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-slate-950/40 hover:border-link hover:text-white",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

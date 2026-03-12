import React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./Input";

import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const res = await fetch(`${API_URL}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        console.log("Server response:", data);

        const token = data?.data?.token;
        const isTokenValid = typeof token === "string" && token.length > 0;

        if (res.ok && data?.status === "ok" && isTokenValid) {
          toast.success("Login was successful");
          onLogin(token);

          const user = jwtDecode(token);

          if (user.role === "admin") navigate("/backoffice");
          else if (user.role === "guest") navigate("/my-list");
          else navigate("/profile");
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
      <div className="">
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

          <LoginButton type="submit">Login</LoginButton>
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
          "bg-button-bg py-4 px-8 md:py-2 md:px-12 rounded cursor-pointer",
          "font-zen font-normal text-secondary text-4xl",
          "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

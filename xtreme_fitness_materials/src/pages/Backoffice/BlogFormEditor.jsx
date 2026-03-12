import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import InputField from "./InputField";
import TextareaField from "./TextareaEditor";
import ImgUploader from "./ImgUploader";

// Access API URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

// Component for creating a new blog post
const BlogFormEditor = () => {
  const initialValues = {
    title: "",
    author: "",
    teaser: "",
    content: "",
    image: null,
  };

  // Validation schema for the form fields
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    teaser: Yup.string().required("Teaser is required"),
    content: Yup.string().required("Content is required"),
    // image: Yup.mixed(), // optional
  });

  // Function to handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("teaser", values.teaser);
      formData.append("content", values.content);
      if (values.image) formData.append("image", values.image);

      const res = await fetch(`${API_URL}/blog`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog created successfully!");
        resetForm();
      } else {
        toast.error(data.message || "Failed to create blog");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col justify-center min-w-[560px] max-w-2xl mx-auto  rounded shadow px-8 py-6 bg-white">
          <div className="mb-8 self-start">
            <ImgUploader
              id="image"
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <InputField
              name="title"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              placeholder="Enter Title"
            />
            <InputField
              name="author"
              value={values.author}
              onChange={(e) => setFieldValue("author", e.target.value)}
              placeholder="Enter Author"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <TextareaField
              name="teaser"
              value={values.teaser}
              onChange={(e) => setFieldValue("teaser", e.target.value)}
              placeholder="Enter Teaser"
              rows={6}
            />
            <TextareaField
              name="content"
              value={values.content}
              onChange={(e) => setFieldValue("content", e.target.value)}
              placeholder="Enter Content"
              rows={6}
            />
          </div>
          <Button type="submit">Add Blog</Button>
        </Form>
      )}
    </Formik>
  );
};

const Button = ({ children, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition w-full cursor-pointer"
    >
      {children}
    </button>
  );
};

export default BlogFormEditor;

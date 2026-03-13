import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import InputField from "./InputField";
import TextareaField from "./TextareaEditor";
import ImgUploader from "./ImgUploader";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const BlogFormUpdate = ({ blog, onClose }) => {
  if (!blog)
    return (
      <p className="font-medium text-xl text-white">Select a blog to edit</p>
    );

  const initialValues = {
    title: blog.title || "",
    author: blog.author || "",
    teaser: blog.teaser || "",
    content: blog.content || "",
    image: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    teaser: Yup.string().required("Teaser is required"),
    content: Yup.string().required("Content is required"),
    // image: Yup.mixed(), // optional
  });

  const handleSubmit = async (values, { resetForm }) => {
    let updateSuccess = false;
    try {
      const formData = new FormData();
      formData.append("id", blog._id);
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("teaser", values.teaser);
      formData.append("content", values.content);
      if (values.image) formData.append("image", values.image);

      const res = await fetch(`${API_URL}/blog`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog updated successfully!");
        updateSuccess = true;
      } else {
        toast.error(data.message || "Failed to update blog");
      }
    } catch (err) {
      console.error(err);
      if (!updateSuccess) toast.error("Something went wrong");
    }
    if (updateSuccess) {
      resetForm({
        values: {
          title: "",
          author: "",
          teaser: "",
          content: "",
          image: null,
        },
      });
      // Close form after update
      if (typeof onClose === "function") {
        setTimeout(onClose, 100); // slight delay to allow resetForm to finish
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col justify-center w-full max-w-2xl mx-auto  rounded shadow px-8 py-6 bg-gray-100">
          <p className="p-5 text-xl text-gray-900 font-medium">Edit blog</p>
          <div className="mb-8 self-start">
            <ImgUploader
              key={
                values.image
                  ? values.image.name
                  : values.title +
                    values.author +
                    values.teaser +
                    values.content
              }
              id="edit-image"
              src={
                values.image
                  ? URL.createObjectURL(values.image)
                  : blog.image || ""
              }
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
          <div className="flex flex-row gap-4 mt-4">
            <Button type="submit">Update Blog</Button>
          </div>
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

export default BlogFormUpdate;

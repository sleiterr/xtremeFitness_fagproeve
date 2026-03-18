import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchBlogById } from "../../utils/api";

//! Custom Hook to fetch blogs data, sent blogs, loading and error state to components for rendering
export function useBlogs() {
  // State to hold blogs data, loading status, and error message
  //! blogs initialState, setBlogs - rendering state
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs data when the component mounts
  //? use useEffect to perform side effect of fetching data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // show loading fetching data
        setLoading(true);
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
        // finally block to hide loading state after fetch attempt, regardless of success or failure
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //? return blogs data, loading status, and error message (object with these properties)
  return { blogs, loading, error };
}

//! Custom Hook to fetch blogs data by ID
export function useFetchBlogById(blogId) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getBlog() {
      setLoading(true);
      try {
        const data = await fetchBlogById(blogId);
        setBlog(data);
        setError("");
      } catch (err) {
        setError(err.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    }
    if (blogId) getBlog();
  }, [blogId]);

  return { blog, loading, error };
}

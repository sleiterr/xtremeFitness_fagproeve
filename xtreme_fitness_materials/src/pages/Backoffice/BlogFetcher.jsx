import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchBlogById } from "../../utils/api";

// Custom hook to fetch blogs data
export function useBlogs() {
  // State to hold blogs data, loading status, and error message
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return blogs data, loading status, and error message
  return { blogs, loading, error };
}

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

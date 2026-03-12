import React, { useState, useEffect } from "react";
import { fetchBlogs } from "../../utils/api";

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

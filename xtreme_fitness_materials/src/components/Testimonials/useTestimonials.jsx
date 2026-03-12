import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../utils/api";

// Custom hook to fetch reviews data
export function useReviews() {
  // State to hold reviews data, loading status, and error message
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch reviews data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchReviews();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return reviews data, loading status, and error message
  return { reviews, loading, error };
}

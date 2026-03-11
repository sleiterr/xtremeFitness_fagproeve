import React, { useState, useEffect } from "react";
import { fetchEmployers } from "../../utils/api";

// Custom hook to fetch employers data
export function useEmployers() {
  // State to hold employers data, loading status, and error message
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch employers data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployers();
        console.log("Fetched employers:", data);
        setEmployers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return employers data, loading status, and error message
  return { employers, loading, error };
}

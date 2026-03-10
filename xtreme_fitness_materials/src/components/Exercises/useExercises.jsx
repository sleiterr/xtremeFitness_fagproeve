import React, { useState, useEffect } from "react";
import { fetchExercises } from "../../utils/api";

// Custom hook to fetch exercises data
export function useExercises() {
  // State to hold exercises data, loading status, and error message
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch exercises data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchExercises();
        console.log("Fetched exercises:", data);
        setExercises(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return exercises data, loading status, and error message
  return { exercises, loading, error };
}

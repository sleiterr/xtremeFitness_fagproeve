import React, { useState, useEffect } from "react";
import { fetchServices } from "../../utils/api";

// Custom hook to fetch services data
export function useServices() {
  // State to hold services data, loading status, and error message
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch services data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return services data, loading status, and error message
  return { services, loading, error };
}

import React, { useState, useEffect } from "react";
import { fetchSubscriptions } from "../../utils/api";

// Custom hook to fetch subscriptions data
export function useSubscriptions() {
  // State to hold subscriptions data, loading status, and error message
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch subscriptions data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSubscriptions();
        setSubscriptions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return subscriptions data, loading status, and error message
  return { subscriptions, loading, error };
}

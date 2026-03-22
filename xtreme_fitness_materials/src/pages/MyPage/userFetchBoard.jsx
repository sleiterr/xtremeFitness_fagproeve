import { useState, useEffect } from "react";
import { fetchUserWorkouts } from "../../utils/api";

export function useUserWorkouts(userId, token) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchUserWorkouts(userId, token);
        setWorkouts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId, token]);

  return { workouts, loading, error };
}

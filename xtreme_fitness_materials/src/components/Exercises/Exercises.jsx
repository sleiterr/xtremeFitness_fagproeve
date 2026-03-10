import React, { useState, useEffect } from "react";
import { fetchExercises } from "../../utils/api";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;
  return (
    <Section>
      <div className="">
        <h4>Dette Tilbyder vi</h4>
        <h2>Vi Tilbyder eksklusive øvelser</h2>
      </div>
      <ul>
        <li></li>
      </ul>
    </Section>
  );
};

export default Exercises;

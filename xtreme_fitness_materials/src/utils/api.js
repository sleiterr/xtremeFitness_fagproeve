const API_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Error fetching ${endpoint}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchExercises = () => fetchData("exercises");
export const fetchServices = () => fetchData("services");
export const fetchReviews = () => fetchData("reviews");
export const fetchSubscriptions = () => fetchData("subscriptions");
export const fetchEmployers = () => fetchData("employees");
export const fetchBlogs = () => fetchData("blogs");

export default fetchData;

export const deleteBlog = async (blogId) => {
  const response = await fetch(`${API_URL}/blog/${blogId}`, {
    method: "DELETE",
  });
  return await response.json();
};

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

// Specific fetch functions for each data type
export const fetchExercises = () => fetchData("exercises");
export const fetchServices = () => fetchData("services");
export const fetchReviews = () => fetchData("reviews");
export const fetchSubscriptions = () => fetchData("subscriptions");
export const fetchEmployers = () => fetchData("employees");
export const fetchBlogs = () => fetchData("blogs");

export default fetchData;

// Henter et specifikt blog baseret på ID
export const fetchBlogById = async (blogId) => {
  if (!blogId) return null;
  const response = await fetch(`${API_URL}/blog/${blogId}`);
  const data = await response.json();
  return data.data || null;
};

// Function to delete a blog by ID
export const deleteBlog = async (blogId) => {
  const response = await fetch(`${API_URL}/blog/${blogId}`, {
    method: "DELETE",
  });
  return await response.json();
};

// Function to update a blog with new data
export const updateBlog = async (blogData) => {
  const response = await fetch(`${API_URL}/blog`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  return await response.json();
};

// Function to create a new blog
export const createBlog = async (blogData) => {
  const response = await fetch(`${API_URL}/blog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  return await response.json();
};

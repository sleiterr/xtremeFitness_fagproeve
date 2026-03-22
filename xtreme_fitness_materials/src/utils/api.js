// env file should have VITE_API_BASE_URL defined, e.g. VITE_API_BASE_URL=http://localhost:5000/api
const API_URL = import.meta.env.VITE_API_BASE_URL;

// Generic function to fetch data from a given endpoint
// use async/await syntax for cleaner code and error handling
// await the fetch call and check for response status before parsing JSON
const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    // if request fails, throw an error to be caught in the catch block
    if (!res.ok) throw new Error(`Error fetching ${endpoint}`);
    const data = await res.json();
    // if return empty array, return empty array instead of undefined
    return data.data || [];
  } catch (error) {
    console.error(error);
    // return empty array on error to prevent crashes in components that expect an array
    return [];
  }
};

// Specific fetch functions for each data type
// fetchData("") can be used directly for any endpoint.
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

// Fetch all workouts for a specific user
export const fetchUserWorkouts = async (userId, token) => {
  const response = await fetch(`${API_URL}/user/${userId}/workouts`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!response.ok) throw new Error("Error fetching user workouts");
  return await response.json();
};

//* Function to update a subscription with new data



//? Function to create a new blog
export const createBlog = async (blogData) => {
  //! response from the API after making a POST request to the /blog endpoint with the new blog data in the request body
  const response = await fetch(`${API_URL}/blog`, {
    //! Post request to create a new blog entry
    method: "POST",
    //! mean to send JSON data in the request body, so set the appropriate header
    headers: { "Content-Type": "application/json" },
    //! paset it as a stringified JSON object in the request body
    body: JSON.stringify(blogData),
  });
  //! whait the response and parse it as JSON, then return the result (which should contain the newly created blog's data or a success message)
  return await response.json();
};

import React from "react";
import DashboardCard from "./DashboardCard";
import SummaryTable from "./SummaryTable";
import SummaryTableHeader from "./SummaryTableHeader";
import SummaryTableCell from "./SummaryTableCell";
import DeleteBtn from "./DeleteBtn";
import { useBlogs } from "./BlogFetcher";
import { deleteBlog } from "../../utils/api";

// Helper function to truncate text to a specified number of words
function truncateWords(text, maxWords) {
  // Return an empty string if the input text is falsy (e.g., null, undefined, or empty)
  if (!text) return "";
  const words = text.split(" ");
  // If the number of words is less than or equal to the maximum allowed, return the original text
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

const DashboardView = () => {
  const { blogs, loading, error } = useBlogs();
  // Local state to manage blogs and deletion status
  const [deletingId, setDeletingId] = React.useState(null);
  // Local state to hold blogs data for immediate UI updates after deletion
  const [localBlogs, setLocalBlogs] = React.useState([]);

  React.useEffect(() => {
    setLocalBlogs(blogs);
  }, [blogs]);

  // Function to handle blog deletion
  const handleDelete = async (id) => {
    // Set the ID of the blog being deleted to show loading state on the delete button
    setDeletingId(id);
    await deleteBlog(id);
    setLocalBlogs((prev) => prev.filter((blog) => blog._id !== id));
    // Reset the deleting ID after deletion is complete
    setDeletingId(null);
  };

  if (loading)
    return (
      <p className="font-normal text-2xl text-white">
        Loading list services...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <DashboardCard label="Blogs">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Image</SummaryTableHeader>
            <SummaryTableHeader align="center">Title</SummaryTableHeader>
            <SummaryTableHeader align="center">Author</SummaryTableHeader>
            <SummaryTableHeader align="center">Teaser</SummaryTableHeader>
            <SummaryTableHeader align="center">Content</SummaryTableHeader>
            <SummaryTableHeader align="center">Actions</SummaryTableHeader>
          </>
        }
      >
        {localBlogs.map((item) => (
          <tr key={item._id}>
            <SummaryTableCell>
              <img src={item.image} alt={item.title} />
            </SummaryTableCell>
            <SummaryTableCell align="center">{item.title}</SummaryTableCell>
            <SummaryTableCell align="center">{item.author}</SummaryTableCell>
            <SummaryTableCell align="center">
              {truncateWords(item.teaser, 18)}
            </SummaryTableCell>
            <SummaryTableCell align="center">
              {truncateWords(item.content, 18)}
            </SummaryTableCell>
            <SummaryTableCell align="center">
              <DeleteBtn
                onClick={() => handleDelete(item._id)}
                disabled={deletingId === item._id}
              >
                {deletingId === item._id ? "Deleting..." : "Delete"}
              </DeleteBtn>
            </SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
};

export default DashboardView;

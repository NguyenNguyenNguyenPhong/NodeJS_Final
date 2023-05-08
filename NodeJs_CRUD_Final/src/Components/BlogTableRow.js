import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const BlogTableRow = (props) => {
  const { _id, title, content, category } = props.obj;
  
  const deleteBlog = () => {
    axios
      .delete(
"http://localhost:4000/blogs/delete-blog/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("collection successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{title}</td>
      <td>{content}</td>
      <td>{category}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-blog/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteBlog} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default BlogTableRow;
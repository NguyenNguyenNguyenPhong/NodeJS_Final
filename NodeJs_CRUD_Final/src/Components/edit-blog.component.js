
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";
import { useParams } from 'react-router-dom';
  
const EditBlog = (props) => {
  const {id} = useParams();

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    category: "",
  });
    

  const onSubmit = (blogObject) => {
    axios
      .put(
        "http://localhost:4000/blogs/update-blog/" +
          id,
          blogObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("collection successfully updated");
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
        console.log(err)});
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/blogs/update-blog/" 
        + id
      )
      .then((res) => {
        console.log(res)
        const { title, content, category } = res.data;
        setFormValues({ title, content, category });
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <BlogForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update collection
    </BlogForm>
  );
};
  

export default EditBlog;
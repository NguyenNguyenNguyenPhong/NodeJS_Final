

import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogForm from "./BlogForm";
  

const CreateBlog = () => {
  const [formValues, setFormValues] = 
    useState({ title: '', content: '', category: '' })

  const onSubmit = blogObject => {
    axios.post(
'http://localhost:4000/blogs/create-blog', 
blogObject)
      .then(res => {
        if (res.status === 200)
          alert('collection successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    

  return(
    <BlogForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create collection
    </BlogForm>
  )
}
  

export default CreateBlog
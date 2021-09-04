import React from "react";
import BlogEditor from "../components/BlogEditor";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Field from "../components/FieldForm";
import axios from "axios";
import { isAuthenticated } from "../functions/token";
import { Redirect, useHistory } from "react-router";
import { getToken } from "../functions/token";
import { getUser } from "../functions/user";

const BlogAll = (props) => {
  const history = useHistory();
  const { handleSubmit, control, register } = useForm();
  const user = JSON.parse(getUser());
  

  const isAuth = isAuthenticated();
  if(!isAuth) {
    return <Redirect to="/login"></Redirect>

  } 

  const onSubmit = (data) => {
    const newData = {
      ...data,
      username: user.pk,
      created_by: `${user.first_name + user.last_name}`,
    };
    const formData = new FormData();
    console.log(data);
    for (const [key, value] of Object.entries(newData)) {
      if (key !== "image_new") {
        formData.append(key, value);
      }
    }
    formData.append("image_new", document.getElementById('file-x').files[0]);
    console.log(formData.getAll("image_new"));

    axios
      .post("http://localhost:8000/api/blogs/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: getToken(),
        },
      })
      .then((res) => res.data)
      .then(({ id }) => {
        history.push("/blogs/" + id);
      });
    
  };

  return (
    <Container>

      <Container className="py-3">
        <Field
          type="text"
          label="Title"
          placeholder="Input the title of the blog"
          name="title"
          control={control}
        />
        <Field
          type="text"
          label="Description"
          placeholder="You can put the first paragraph"
          name="description"
          control={control}
        />

        <div className="my-3">
          <input
            type="file"
            className="form-control"
            {...register("image_new")}
            name={props.name}
            id="file-x"
          />
        </div>
        <BlogEditor control={control} />
        <div className="my-3">
          <div className="d-grid gap-2">
            <button className="btn btn-info" onClick={handleSubmit(onSubmit)}>
              Submit Blog
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default BlogAll;

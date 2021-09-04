import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useQuery } from "react-query";
import { fetchBlogs } from "../functions/api";
import Loader from "react-loader-spinner";
import {  Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../functions/token";

const BlogView = ({ setUser,user }) => {
    const [log, setLog] = useState(isAuthenticated());
    const history = useHistory();
  const Logout = log ? (
    <button
      className="btn"
      onClick={() => {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        setUser(isAuthenticated());
        setLog(false)
        history.push('/', {message:null})

      }}
    >
      Logout
    </button>
  ) : (
    ""
  );

  const { data, isSuccess } = useQuery("blogs", fetchBlogs);
  const blogsCards = ({ blogsData }) => {
    return blogsData.map((blog) => (
      <div className="d-flex justify-content-center my-3" key={blog.id}>
        <BlogCard
          title={blog.title}
          text={blog.description}
          id={blog.id}
          img={blog.image_new}
          created_by={blog.created_by}
        ></BlogCard>
      </div>
    ));
  };
  const loaderWrapper = (
    <div className="d-flex justify-content-center my-5">
      <Loader type="Grid" color="#00BFFF" height={200} width={200} />
    </div>
  );

  const blogs = isSuccess ? blogsCards(data) : loaderWrapper;
  const button = isSuccess ? (
    <Link to="/create" className="btn btn-success">
      Write A Blog{""}
    </Link>
  ) : (
    ""
  );
  return (
    <Container className="my-3">
      <div className="me-auto">
          {Logout}
      </div>
      {blogs}
      <div className="my-3">
        <div className="d-grid gap-2">{button}</div>
      </div>
    </Container>
  );
};

export default BlogView;

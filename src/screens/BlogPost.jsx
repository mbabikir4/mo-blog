import React from "react";
import { useQuery } from "react-query";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { get } from "axios";
import { getToken } from "../functions/token";
import Interweave from "interweave";
const BlogPost = () => {
    
  const { id } = useParams();

  const fetchBlogPost = async () => {
    const res = await get(`http://localhost:8000/api/blogs/${id}`, {
      headers: { Authorization: getToken() },
    });
    const data = await res.data;
    return data;
  };

  const { isSuccess, data } = useQuery(`blog-${id}`, fetchBlogPost);
  const toDate = (date) => {
      const dateParse = new Date(date)
      return dateParse.toLocaleString();

  }

  const blog = isSuccess ? (
    <div>
      <Row>
        <Col md={4}>
            <img
              src={data.image_new}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt="blog"
            />
        </Col>
        <Col md={7} className="py-3">
            <p className="display-5"><strong>{data.title}</strong></p>
            <p style={{fontSize: '30px'}}><strong>{data.created_by}</strong></p>
            <p>{toDate(data.created_at)}</p>
        </Col>
      </Row>
      <hr color="black" />
      <Interweave content={data.innerText}></Interweave>
    </div>
  ) : (
    ""
  );

  return <Container className="mt-4">{blog}</Container>;
};

export default BlogPost;

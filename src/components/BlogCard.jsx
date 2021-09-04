import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'

const BlogCard = (props) => {
  const [color, setColor] = useState("black");
  const textToDescription = (text) => {
      const newText = text;
      const shortenedText = newText.slice(0,200)
      const Add = shortenedText.concat('','...')
      return Add;
  };
  
  const text = textToDescription(props.text)
  const alt = props.alt ? props.alt : 'a blog'
   
  return (
    <Card
      body
      style={{ width: "50rem" }}
      border={color}
      onMouseEnter={() => {
        setColor("info");
      }}
      onMouseLeave={() => {
        setColor("black");
      }}
    >
      <Row>
        <Col md={5} xl={5}>
          <img
            style={{maxWidth: '100%'}}
            src={props.img}
            alt={alt}
          />
        </Col>
        <Col md={7} xl={7}>
        <Link to={'blogs/'+ String(props.id)}><strong>{props.title}</strong></Link>
        <p><strong>By: {props.created_by}</strong></p>
        <p className="class-muted">{text}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogCard;

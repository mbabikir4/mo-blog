import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
const Field = (props) => {
  const span = props.span ? (
    <Form.Text className="text-muted">{props.span}</Form.Text>
  ) : (
    <div></div>
  );
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Form.Group className="my-3">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            {...field}
          ></Form.Control>
          {span}
          
        </Form.Group>
      )}
    />
  );
};

export default Field;

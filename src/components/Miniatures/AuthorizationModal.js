import React, { useState } from "react";
import reactDom from "react-dom";
import { Form, Button } from "react-bootstrap";

import { getHostName } from "../../helper/environment";

export function Login({ changePage }) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button
        variant="link"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          changePage("reg");
        }}
      >
        Register
      </Button>
    </Form>
  );
}

export function Registration({ changePage }) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Re Enter Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Profile
      </Button>
      <Button
        variant="link"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          changePage("login");
        }}
      >
        Login
      </Button>
    </Form>
  );
}

export default function AuthorizationModal() {
  // This key is not suppose to be placed here but for this assignment it's out of scope to write extra backend just for this.
  const client_id = "a1c97f5c4a374db692e2ded6db432261";
  const query = new URLSearchParams();
  query.set("client_id", client_id);
  query.set("response_type", "token");
  query.set("redirect_uri", getHostName());

  const [state, setState] = useState("login");

  const page =
    state === "login" ? (
      <Login changePage={setState} />
    ) : (
      <Registration changePage={setState} />
    );

  return reactDom.createPortal(
    <div className="portal">{page}</div>,
    document.getElementById("root")
  );
}

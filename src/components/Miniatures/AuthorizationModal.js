import React, { useState } from "react";
import reactDom from "react-dom";
import { Form, Button } from "react-bootstrap";

import { getHostName } from "../../helper/environment";
import { loginUser } from "../../store/actions";
import { useStoreContext } from "../../store";
import axios from "axios";

export function Login({ changePage }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { state, dispatch } = useStoreContext();

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => loginUser(credentials).then(dispatch)}
      >
        Login
      </Button>
      <Button variant="link" onClick={(e) => changePage("reg")}>
        Register
      </Button>
    </Form>
  );
}

export function Registration({ changePage }) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    password2: "",
  });

  const onFieldChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const onSubmit = () => {
    if (state.password !== state.password2)
      return alert("Passwords did not match");

    axios
      .post("http://localhost:4000/users/register", state)
      .then((res) => {
        alert("Registration success");
        changePage("login");
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Error occured");
      });
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={state.firstName}
          onChange={onFieldChange}
          name="firstName"
          type="text"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={state.lastName}
          onChange={onFieldChange}
          name="lastName"
          type="text"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          value={state.userName}
          onChange={onFieldChange}
          name="userName"
          type="text"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={state.password}
          onChange={onFieldChange}
          name="password"
          type="password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Re Enter Password</Form.Label>
        <Form.Control
          value={state.password2}
          onChange={onFieldChange}
          name="password2"
          type="password"
        />
      </Form.Group>

      <Button variant="primary" onClick={onSubmit}>
        Create Profile
      </Button>
      <Button
        variant="link"
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

import React, { useEffect, useState } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import { getProfile } from "../../store/actions";
import { useStoreContext } from "../../store";
import { Col, Form, Row, Button } from "react-bootstrap";
import passwordValidator from "password-validator";

var schema = new passwordValidator();
schema
  .is()
  .min(8) // Minimum length 8
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);

const error = {
  digits: "Password must have at least 1 digit",
  uppercase: "Password must have at least 1 uppercase letter",
  min: "Password must contain eight characters",
  spaces: "Password should not contain spaces",
  oneOf: "Password is too common",
};

export default function FeaturedPlaylist() {
  const { state, dispatch } = useStoreContext();
  const [_profile, setprofile] = useState();
  const [password, setPassword] = useState({
    pass1: "",
    pass2: "",
  });
  const [updatedProfile, setupdatedProfile] = useState({});
  const { profile } = state;

  useEffect(() => {
    if (!profile) getProfile().then(dispatch);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setprofile(profile);
  }, [profile]);

  const onFieldChange = (e) => {
    setprofile({ ..._profile, [e.target.name]: e.target.value });
    setupdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const saveUpdatedInfo = () => {
    console.log(updatedProfile);
  };

  const changePassword = () => {
    const err = schema
      .validate(password.pass1, { list: true })
      .reduce((acc, val) => {
        return acc + "\n" + error[val];
      }, "");

    if (err.length) return alert(err);

    alert("Success");

    return;
  };

  if (!_profile) return null;

  return (
    <div className="main-content">
      <DiscoverHeader title="Edit User" />
      <Form style={{ margin: 30 }}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            User Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="username"
              value={_profile.username}
              onChange={onFieldChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="name"
              value={_profile.name}
              onChange={onFieldChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Website
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="website"
              value={_profile.website}
              onChange={onFieldChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Phone
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="phone"
              value={_profile.phone}
              onChange={onFieldChange}
            />
          </Col>
        </Form.Group>

        <Button onClick={saveUpdatedInfo}>Save</Button>
      </Form>
      <Form style={{ margin: 30 }}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="password"
              type="text"
              value={password.pass1}
              onChange={(e) =>
                setPassword({ ...password, pass1: e.target.value })
              }
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Re-Enter Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="password"
              type="text"
              value={password.pass2}
              onChange={(e) =>
                setPassword({ ...password, pass2: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Button onClick={changePassword}>Save</Button>
      </Form>
    </div>
  );
}

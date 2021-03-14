import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import Pagination from "../../components/Pagination";
import { useStoreContext } from "../../store";
import { getUsers } from "../../store/actions";

export default function NewRelease() {
  const { state, dispatch } = useStoreContext();
  let { id } = useParams();

  useEffect(() => {
    if (!state.NewReleases) getUsers().then(dispatch);
    // eslint-disable-next-line
  }, []);

  const loadMore = (offset, limit) => {
    getUsers({ offset, limit }).then(dispatch);
  };

  const { users } = state;

  const user = users?.[id];

  if (!user) return null;

  return (
    <div className="main-content">
      <DiscoverHeader title="View User" />
      <div>
        <Card style={{ flex: 1, margin: 30 }}>
          <Card.Body>
            <Card.Text>
              <span>ID: </span>
              {user.id}
            </Card.Text>
            <Card.Text>
              <span>User Name: </span>
              {user.username}
            </Card.Text>
            <Card.Text>
              <span>Name: </span>
              {user.name}
            </Card.Text>
            <Card.Text>
              <span>Email: </span>
              {user.email}
            </Card.Text>
            <Card.Text>
              <span>Website: </span>
              {user.website}
            </Card.Text>
            <Card.Text>
              <span>Phone: </span>
              {user.phone}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Pagination loadMore={loadMore} />
    </div>
  );
}

import React, { useEffect } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import Grid from "../../components/Miniatures/Grid";
import { useStoreContext } from "../../store";
import { getUsers } from "../../store/actions";

export default function Home() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    if (!state.NewReleases) getUsers().then(dispatch);
    // eslint-disable-next-line
  }, []);

  const { NewReleases } = state;

  console.log(NewReleases);

  return (
    <div className="main-content">
      <DiscoverHeader title="User List" />
      {NewReleases && (
        <Grid
          items={Object.values(NewReleases)}
          title="User List"
          inline={true}
        />
      )}
    </div>
  );
}

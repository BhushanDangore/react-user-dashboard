import React from "react";
import classnames from "classnames";

import SongCard from "./SongCard";

export default function Grid({ items, title, inline }) {
  const gridItems = items.map((item, idx) => (
    <SongCard
      key={idx}
      name={item.name}
      email={item.email}
      username={item.username}
      phone={item.phone}
      website={item.website}
      link={`/user-view/${item.id}`}
      transitionDelay={Math.random().toFixed(2) / 4}
    />
  ));

  return (
    <div className="grid-container">
      <div className="grid-title-bar">{title}</div>
      <div
        className={classnames("grid-list", {
          inline,
        })}
      >
        {gridItems}
      </div>
    </div>
  );
}

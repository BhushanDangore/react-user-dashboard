import React from "react";
import { useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import NavProfile from "./NavProfile";
import routes from "../../routes";

export default function NavigationBar() {
  const location = useLocation();

  return (
    <div className="nav-wrapper">
      <NavProfile name="Bob smith" />
      {routes.map((route, idx) => (
        <NavItem
          key={idx}
          to={route.path}
          name={route.name}
          icon={route.icon}
          isActive={location.pathname === route.path}
        />
      ))}
    </div>
  );
}

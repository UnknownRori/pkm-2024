import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLink(props: React.PropsWithChildren & { to: string }) {
  return (
    <NavLink className="text-text-50 hover:text-text-400 duration-200" to={props.to}>
      {props.children}
    </NavLink>
  );
}

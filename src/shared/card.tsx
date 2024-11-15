import React from "react";

export default function Card(props: React.PropsWithChildren & { className?: string }) {
  return (
    <div className={"shadow-lg py-2 px-2 border-2 border-gray-50 rounded " + props.className}>
      {props.children}
    </div>
  );
}

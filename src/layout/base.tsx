import React from "react";
import Navigation from "@/components/navigation";

export default function BaseLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Navigation></Navigation>

      <main>
        {props.children}
      </main>
    </>
  );
}

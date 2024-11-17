import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function BaseLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Navigation></Navigation>

      <main className="flex flex-col gap-4">
        {props.children}
      </main>

      <Footer></Footer>
    </>
  );
}

import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function BaseLayout(props: React.PropsWithChildren) {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
        <Navigation></Navigation>

        <main className="flex flex-col gap-4">
          {props.children}
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

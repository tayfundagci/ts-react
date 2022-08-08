import React from "react";
import AlertDismissible from "../components/AlertDismissible";
import BootstrapModal from "../components/BootstrapModal";

type Props = {};

function Home({}: Props) {
  return (
    <div className="m-5">
      <h4>this is homepage</h4>
      <div>
        <div className="mb-2"><AlertDismissible /></div>
        <div><BootstrapModal title="tayfundagci" titleNumber={5} /></div>
      </div>
    </div>
  );
}

export default Home;

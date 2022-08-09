import React from "react";
import BootstrapModal from "../components/BootstrapModal";

type Props = {};

function About({}: Props) {
  return (
    <div className="m-5">
      <h4>about</h4>
      <BootstrapModal
        title="farukyilmaz"
        titleNumber={23}
        description="Eu cupidatat nostrud proident aliqua veniam enim adipisicing cupidatat incididunt do."
      />
    </div>
  );
}

export default About;

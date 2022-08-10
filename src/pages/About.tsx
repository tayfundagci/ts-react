import React from "react";
import BootstrapModal from "../components/BootstrapModal";
import { OrderCard } from "../components/OrderCard";
import { iPerson } from "../interfaces/Interfaces";

type Props = {};

function About({ }: Props) {
  const user: iPerson = {
    name: "gokalpavcu",
    age: 23,
    hasJob: true,
    walk: () => console.log("I'm walking!"),
    run: () => console.log("I'm running!"),
    speak: (word) => console.log("I'm saying!" + word),
  };

  console.log(user.name);
  user.walk();
  user.speak(" What's up");

  return (
    <div className="m-5">
      <BootstrapModal title="farukyilmaz" titleNumber={23} description="Eu cupidatat nostrud proident aliqua veniam enim adipisicing cupidatat incididunt do." />
    </div>
  );
}

export default About;

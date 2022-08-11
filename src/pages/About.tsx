import React from "react";
import BootstrapModal from "../components/BootstrapModal";
import { Button } from "../components/Button";
import { OrderCard } from "../components/OrderCard";
import { iPerson } from "../interfaces/Interfaces";
import { useContext } from "react"
import { AppCtx } from "../context/AppContextInterface";
import { currentUserContext } from "../context/ContextExtended";

type Props = {};

function About({ }: Props) {
  const appContext = useContext(AppCtx)

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

  const handleSubmit = () => {
    alert("clicked")
  }

  const handleChange = () => {

  }

  const currentUser = useContext(currentUserContext);

  return (
    <div className="m-5">
      <BootstrapModal title="farukyilmaz" titleNumber={23} description="Eu cupidatat nostrud proident aliqua veniam enim adipisicing cupidatat incididunt do." /> <hr />
      <Button title="click" loading={false} onClick={handleSubmit} onChange={handleChange} />
      <span>Name: {appContext?.name}, <br /> Author: {appContext?.author}, <br /> Url: {appContext?.url}</span> <br />
    </div>
  );
}

export default About;

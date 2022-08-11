import { useContext } from "react";
import { currentUserContext } from "../context/ContextExtended";

export function EnthusasticGreeting() {
    const currentUser = useContext(currentUserContext);
    return <div>HELLO {currentUser!.toUpperCase()}!</div>;
}
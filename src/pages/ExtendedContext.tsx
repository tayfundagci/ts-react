import { createContext, useContext } from "react";
import { EnthusasticGreeting } from "../components/EnthusasticGreeting";
import { currentUserContext } from "../context/ContextExtended";


type Props = {};

function ExtendedContext({ }: Props) {


    return (
        <currentUserContext.Provider value="Anders">
            <EnthusasticGreeting />
        </currentUserContext.Provider>
    );
}

export default ExtendedContext;

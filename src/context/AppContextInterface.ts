import { createContext } from "react";
import { iAppContextInterface } from "../interfaces/Interfaces";

export const AppCtx = createContext<iAppContextInterface | null>(null)

export const sampleAppContext: iAppContextInterface = {
    name: "react context in a typescript app",
    author: "tayfundagci",
    url: "https://www.tayfundagci.com"
}


import {createContext} from "react";

type StoreType = {
    name: string,
    setName: (name: string) => void,
}

export const StoreContext = createContext<StoreType>({} as unknown as StoreType);
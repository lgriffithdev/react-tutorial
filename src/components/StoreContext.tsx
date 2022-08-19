import {createContext} from "react";

type StoreType = {
    pokemon: string,
    setPokemon: (name: string) => void,
}

export const StoreContext = createContext<StoreType>({} as unknown as StoreType);
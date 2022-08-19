import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getAllPokemon: builder.query({
            query: () => `pokemon?limit=50&offset=0`,
        }),
        getAbilityByName: builder.query({
            query: (name) => `ability/${name}`
        })
    })
})

export const {
    useGetPokemonByNameQuery,
    useGetAllPokemonQuery,
    useGetAbilityByNameQuery
} = pokemonApi;

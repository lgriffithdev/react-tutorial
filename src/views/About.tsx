import { useState } from 'react';
import { useGetPokemonByNameQuery } from "@/services/pokemon";

const About = () => {
    const [name, setName] = useState('');

    const { data, error, isLoading } = useGetPokemonByNameQuery(name, {
        skip: !name
    });

    return (
        <>
            <input className={'border border-black'} type="text" onChange={(e) => setName(e.target.value)} />
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            ) : null}
        </>
    )
}

export default About;

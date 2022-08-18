import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '@/services/pokemon';

const PokemonView = () => {
    const { name } = useParams();

    const { data: pokemon, isLoading, error } = useGetPokemonByNameQuery(name, {
        skip: !name,
    });

    console.log(pokemon);

    return (
        <div>
            <div className={'flex flex-col items-center'}>
                <h1 className={'text-center text-2xl uppercase'}>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        </div>
    )
}

export default PokemonView;
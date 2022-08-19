import { useGetPokemonByNameQuery } from '@/services/pokemon';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type props = {
    name: string,
}

const PokemonCard = ({ name }: props) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(name, {
        skip: !name,
    });

    return (
        <>
            {data && <Link to={`/pokemon/${data.name}`}>{data.name}</Link>}
        </>
    )
}

export default memo(PokemonCard);
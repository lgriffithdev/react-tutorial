import { useGetPokemonByNameQuery } from '@/services/pokemon';
import { Link } from 'react-router-dom';

type props = {
    name: string,
}

const PokemonCard = ({ name }: props) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(name, {
        skip: !name,
    });

    console.log(data);
    return (
        <>
            {data && <Link to={`/pokemon/${data.name}`}>{data.name}</Link>}
        </>
    )
}

export default PokemonCard;
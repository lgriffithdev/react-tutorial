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

    console.log(data);

    return (
        data && (
            <div className={'flex flex-col items-center gap-y-[10px]'}>
                <Link to={`/pokemon/${data.name}`}>
                    <img src={data.sprites.front_default} />
                    <p className={'text-center'}>{data.name}</p>
                </Link>
            </div>
        )

    )
}

export default memo(PokemonCard);
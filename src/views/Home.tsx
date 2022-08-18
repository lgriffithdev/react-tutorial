import { useGetAllPokemonQuery } from '@/services/pokemon';
import { useEffect } from 'react';
import PokemonCard from '@/components/PokemonCard';

const Home = () => {
    const { data, isLoading, error } = useGetAllPokemonQuery({});

    return (
        <div className={'grid grid-cols-12 space-y-lg'}>
            {data && data.results.map((p: any) => <PokemonCard name={p.name} />)}
        </div>
    )
}

export default Home;

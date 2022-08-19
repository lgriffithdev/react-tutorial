import { useGetAllPokemonQuery } from '@/services/pokemon';
import { useEffect, useState, useMemo, useCallback, useContext } from 'react';
import PokemonCard from '@/components/PokemonCard';
import { TextField } from '@mui/material';

import { StoreContext } from '@/components/StoreContext';

type Pokemon = {
    name: string,
    url: string,
}

const Home = () => {
    const { data, isLoading, error } = useGetAllPokemonQuery({});

    const [search, setSearch] = useState('');
    const [color, setColor] = useState('blue');

    const { setPokemon } = useContext(StoreContext);

    const filterData = useMemo(() => data?.results.filter((p: Pokemon) => p.name.startsWith(search)), [search, data]);

    useEffect(() => {
        //Unmounted function
        return () => {};
    }, []);

    // Equivalent watcher
    useEffect(() => {
    }, [search])

    const changeColor = useCallback(() => {}, [color]);

    return (
        <div className={'w-screen'}>
            <div className={'flex justify-center mb-10'}>
                <TextField
                    className={'w-fit '}
                    type="text"
                    name="filter"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={'Search a Pokemon'}
                    value={search}
                />
            </div>

            <div className={'grid grid-cols-12 space-y-lg'}>
                {filterData && filterData.map((p: any, index: number) => <PokemonCard key={index} name={p.name} />)}
            </div>
        </div>

    )
}

export default Home;

import { useGetAllPokemonQuery } from '@/services/pokemon';
import { useEffect, useState, useMemo, useCallback } from 'react';
import PokemonCard from '@/components/PokemonCard';
import Button from '@/components/Button';

const Home = () => {
    const { data, isLoading, error } = useGetAllPokemonQuery({});

    const [search, setSearch] = useState('');
    const [color, setColor] = useState('blue');

    const filterData = useMemo(() => data?.results.filter(p => p.name.startsWith(search)), [search, data]);

    useEffect(() => {
        //Unmounted function
        return () => {};
    }, []);

    // Equivalent watcher
    useEffect(() => {
        console.log('search updated');
    }, [search])

    const changeColor = useCallback(() => {}, [color]);

    return (
        <>
            <input
                type="text"
                name="filter"
                className={`border border-black`}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                style={{color}}
            />
            <div className={'grid grid-cols-12 space-y-lg'}>
                {filterData && filterData.map((p: any) => <PokemonCard name={p.name} />)}
            </div>
        </>

    )
}

export default Home;

import { useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '@/services/pokemon';
import { Paper, List, ListItem } from '@mui/material';

import classNames from 'classnames';

import AbilityAccordion from '@/components/AbilityAccordion';

const PokemonView = () => {
    const { name } = useParams();

    const { data: pokemon, isLoading, error } = useGetPokemonByNameQuery(name, {
        skip: !name,
    });

    console.log(pokemon);

    const images = useMemo(() => Object.entries(pokemon?.sprites ?? {}), [pokemon]);
    const filterImages = useMemo(() => images?.filter(i => (i[0].startsWith('front') || i[0].startsWith('back')) && i[1]), [images]) as [string, string][];

    const getAbilitiesName = useMemo(() => pokemon?.abilities.map((a) => a.ability.name), [pokemon]);

    return (
        <div className={'w-screen'}>
            <div className={'flex flex-col items-center justify-center'}>
                <h1 className={'text-2xl uppercase mb-10'}>{pokemon?.name ?? ''}</h1>
                <div className={'flex gap-x-5'}>
                {filterImages &&
                    filterImages.map((image, index) =>
                        (
                            <Paper
                                key={index}
                                className={'w-fit'}
                            >
                                <img src={image[1]} />
                            </Paper>
                        )
                )}
                </div>
            </div>

            <div className={'w-full grid grid-cols-2 mt-10 gap-x-20'}>
                <div className={'flex flex-col gap-y-5 '}>
                    <h2 className={'uppercase font-bold text-xl'}>Abilities</h2>
                    {getAbilitiesName?.map((ability: string, index: number) => (
                            <AbilityAccordion name={ability} key={index} />
                        ))
                    }
                </div>

                <div className={'flex flex-col gap-y-5'}>
                    <h2 className={'uppercase font-bold text-xl'}>Stats</h2>
                    <List className={'w-[300px] border border'}>
                        {pokemon.stats.map((stat) => (
                            <ListItem className={'py-4 px-2'}>
                                <div className={'grid grid-cols-2 w-full'}>
                                    <p>{stat.stat.name}</p>
                                    <p className={classNames({'text-green-500': stat.base_stat >=65, 'text-red-500': stat.base_stat <= 65}, 'justify-self-end pr-10')}>{stat.base_stat}</p>
                                </div>
                            </ListItem>
                        ))}
                    </List>

                    {/*<StatsTable />*/}
                </div>
            </div>

        </div>
    )
}

export default PokemonView;
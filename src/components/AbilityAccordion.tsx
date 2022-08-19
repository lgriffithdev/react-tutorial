import { FC, useMemo } from 'react';

import { useGetAbilityByNameQuery } from '@/services/pokemon';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandIcon from '@mui/icons-material/Expand';

type Props = {
    name: string,
}

type abilityEntry = {
    effect: string,
    language: {},
    short_effect: string,
}

const AbilityAccordion: FC<Props> = ({ name }) => {
    const { data: ability, isLoading, error } = useGetAbilityByNameQuery(name);

    const englishAbility: abilityEntry = useMemo(() => ability?.effect_entries.find((entry) => entry.language.name === 'en'), [ability]);
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandIcon />}
                aria-controls="panel1a-content"
            >
                <p className={'uppercase font-bold'}>{ability?.name}</p>
            </AccordionSummary>
            <AccordionDetails className={'flex flex-col gap-y-[25px]'}>
                <div>
                    <h3 className={'uppercase text-lg text-green-500'}>EFFECT</h3>
                    <div>
                        <p>{ englishAbility?.effect }</p>
                    </div>
                </div>
                <div>
                    <h3 className={'uppercase text-lg text-orange-500'}>short effect</h3>
                    <div>
                        <p>{ englishAbility?.short_effect }</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};

export default AbilityAccordion;
import React, { useContext } from 'react';
import { TutoresContext } from '../../Context/BuildContext';
import { TutoresState } from '../../Context/TutoresState';
import { TutoresList } from './TutoresList';
import { TutoresSave } from './TutoresSave';

const Tutores = () => {
    const {
        active
    } = useContext(TutoresContext);

    return (
        <div>
            {
                Object.entries(active).length
                ? <TutoresSave />
                : <TutoresList />
            }
        </div>
    );
};

export const TutoresScreen = () => {
    return (
        <TutoresState>
            <Tutores />
        </TutoresState>
    );
}
import React, { useContext } from 'react';
import { DocentesContext } from '../../Context/BuildContext';
import { DocentesState } from '../../Context/DocentesState';
import { DocentesList } from './DocentesList';
import { DocentesSave } from './DocentesSave';

const Docentes = () => {
    const { active } = useContext(DocentesContext);

    return (
        <div>
            {
                Object.entries(active).length
                ? <DocentesSave />
                : <DocentesList />
            }
        </div>
    );
};

export const DocentesScreen = () => {
    return (
        <DocentesState>
            <Docentes />
        </DocentesState>
    );
}
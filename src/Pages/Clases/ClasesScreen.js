import React, { useContext } from 'react';
import { ClasesContext } from '../../Context/BuildContext';
import { ClasesState } from '../../Context/ClasesState';
import { ClasesList } from './ClasesList';
import { ClasesSave } from './ClasesSave';

const Clases = () => {
    const { active } = useContext(ClasesContext)
    
    return (
        <div>
            {
                Object.entries(active).length
                ? <ClasesSave />
                : <ClasesList />
            }
        </div>
    )
}

export const ClasesScreen = () => {
    return (
        <ClasesState>
            <Clases />
        </ClasesState>
    );
}
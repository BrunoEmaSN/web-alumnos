import React, { useContext } from 'react'
import { CalificacionesContext } from '../../Context/BuildContext';
import { CalificacionesState } from '../../Context/CalificacionesState';
import { CalificacionesList } from './CalificacionesList';
import { CalificacionesSave } from './CalificacionesSave';

const Calificaciones = () => {
    const {
        active
    } = useContext(CalificacionesContext);

    return (
        <div>
            {
                Object.entries(active).length
                ? <CalificacionesSave />
                : <CalificacionesList />
            }
        </div>
    )
}

export const CalificacionesScreen = () => {
    return (
        <CalificacionesState>
            <Calificaciones/>
        </CalificacionesState>
    );
}

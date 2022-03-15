import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingCalificaciones } from '../../Store/Calificacion/Actions/Calificacion';
import { CalificacionesList } from './CalificacionesList';
import { CalificacionesSave } from './CalificacionesSave';

export const CalificacionesScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingCalificaciones() );
    }, []);
    

    const { active } = useSelector( state => state.calificacion );
    
    return (
        <div>
            { Object.entries(active).length ? <CalificacionesSave /> : <CalificacionesList /> }
        </div>
    )
}

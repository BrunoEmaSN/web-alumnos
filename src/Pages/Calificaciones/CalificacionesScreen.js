import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCalificaciones } from '../../Store/Calificacion/Actions/Calificacion';
import { Calificacion1 } from '../../Utils/calificacionModel';
import { CalificacionesList } from './CalificacionesList';
import { CalificacionesSave } from './CalificacionesSave';

export const CalificacionesScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getCalificaciones( Calificacion1 ) );
    }, []);
    

    const { active } = useSelector( state => state.calificacion );
    
    return (
        <div>
            { Object.entries(active).length ? <CalificacionesSave /> : <CalificacionesList /> }
        </div>
    )
}

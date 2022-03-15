import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingClases } from '../../Store/Clase/Actions/Clase';
import { ClasesList } from './ClasesList';
import { ClasesSave } from './ClasesSave';

export const ClasesScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingClases() );
    }, []);
    

    const { active } = useSelector( state => state.clase );
    
    return (
        <div>
            { Object.entries(active).length ? <ClasesSave /> : <ClasesList /> }
        </div>
    )
}

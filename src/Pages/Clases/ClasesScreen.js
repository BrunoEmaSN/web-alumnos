import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClases } from '../../Store/Clase/Actions/Clase';
import { ClasesList } from './ClasesList';
import { ClasesSave } from './ClasesSave';
import { Clase1 } from '../../Utils/claseModel';

export const ClasesScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getClases( Clase1 ) );
    }, []);
    

    const { active } = useSelector( state => state.clase );
    
    return (
        <div>
            { Object.entries(active).length ? <ClasesSave /> : <ClasesList /> }
        </div>
    )
}

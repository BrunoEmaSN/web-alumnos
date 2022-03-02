import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocentes } from '../../Store/Docente/Actions/Docente';
import { Docente1 } from '../../Utils/docenteModel';
import { DocentesList } from './DocentesList';
import { DocentesSave } from './DocentesSave';

export const DocentesScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.docente );
    useEffect(() => {
        dispatch( getDocentes( Docente1 ) );
    }, []);
    return (
        <div>
            { Object.entries(active).length ? <DocentesSave /> : <DocentesList /> }
        </div>
    );
};

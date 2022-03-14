import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingDocentes } from '../../Store/Docente/Actions/Docente';
import { DocentesList } from './DocentesList';
import { DocentesSave } from './DocentesSave';

export const DocentesScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.docente );
    useEffect(() => {
        dispatch( startLoadingDocentes() );
    }, []);
    return (
        <div>
            { Object.entries(active).length ? <DocentesSave /> : <DocentesList /> }
        </div>
    );
};

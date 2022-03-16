import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeMesaExamen, startDeletingMesaExamen, startSetActive } from '../../Store/MesaExamen/Actions/MesaExamen';
import { mesaExamenModel } from '../../Utils/mesaExamenModel';
export const MesasExamenesList = () => {
    const dispatch = useDispatch();

    const { mesasExamenes } = useSelector( state => state.mesaExamen );

    const handleCreate = () => {
        dispatch( activeMesaExamen( mesaExamenModel ) );
    }

    const handleEdit = ( m ) => {
        dispatch( startSetActive( m ) );
    }

    const handleDelete = ( id) => {
        dispatch( startDeletingMesaExamen( id) );
    }

    return (
        <div>
            <h1>mesasExamenesList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                mesasExamenes.map( (mesaExamen) => (
                    mesaExamen.estado !== 0 && (
                        <div key={ mesaExamen.id}>
                            { `${ mesaExamen.id } ${ mesaExamen.descripcion }` }
                            <button onClick={  () => { handleEdit( mesaExamen ) }  }>Edit</button>
                            <button onClick={  () => { handleDelete( mesaExamen.id) }  }>Delete</button>
                        </div>
                    )
                ))
            }
        </div>
    );
};
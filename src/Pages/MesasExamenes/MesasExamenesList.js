import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeMesaExamen, startDeletingMesaExamen } from '../../Store/MesaExamen/Actions/MesaExamen';
import { mesaExamenModel } from '../../Utils/mesaExamenModel';
export const MesasExamenesList = () => {
    const dispatch = useDispatch();

    const { mesasExamenes } = useSelector( state => state.mesaExamen );

    const handleCreate = () => {
        const lastIndex = mesasExamenes.length - 1;
        const lastId = mesasExamenes.length > 0 ? mesasExamenes[lastIndex].maestro.id : 0;
        mesaExamenModel.maestro.id = lastId + 1;
        dispatch( activeMesaExamen( mesaExamenModel ) );
    }

    const handleEdit = ( a ) => {
        dispatch( activeMesaExamen( a ) );
    }

    const handleDelete = ( id) => {
        dispatch( startDeletingMesaExamen( id) );
    }

    return (
        <div>
            <h1>mesasExamenesList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                mesasExamenes.map( (mesaExamen) => <div key={ mesaExamen.maestro.id}>
                    { `${ mesaExamen.maestro.id } ${ mesaExamen.maestro.descripcion }` }
                    <button onClick={  () => { handleEdit( mesaExamen ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( mesaExamen.maestro.id) }  }>Delete</button>
                </div>)
            }
        </div>
    );
};
import React, { useContext } from 'react';
import { MesasExamenesContext } from '../../Context/BuildContext';

export const MesasExamenesList = () => {
    const {
        mesasExamenes,
        handleCreate,
        handleEdit,
        handleDelete
    } = useContext(MesasExamenesContext);

    return (
        <div>
            <h1>mesasExamenesList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                mesasExamenes.map( (mesaExamen) => (
                    mesaExamen.estado !== 0 && (
                        <div key={ mesaExamen.id}>
                            { `${ mesaExamen.id } ${ mesaExamen.descripcion }` }
                            <button onClick={
                                () => { handleEdit( mesaExamen ) }
                            }>
                                Edit
                            </button>
                            <button onClick={
                                () => { handleDelete( mesaExamen.id) }
                            }>
                                Delete
                            </button>
                        </div>
                    )
                ))
            }
        </div>
    );
};
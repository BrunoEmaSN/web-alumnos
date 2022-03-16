import React, { useContext } from 'react';
import { DocentesContext } from '../../Context/BuildContext';

export const DocentesList = () => {
    const {
        docentes,
        handleCreate,
        handleEdit,
        handleDelete
    } = useContext(DocentesContext);

    return (
        <div>
            <h1>Docente List</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                docentes.map( d => (
                    d.estado !== 0 && (
                        <div key={ d.documento }>
                            { `${ d.nombre } ${ d.apellido }` }
                            <button onClick={
                                () => { handleEdit( d.documento ) }
                            }>
                                Edit
                            </button>
                            <button onClick={
                                () => { handleDelete( d.documento ) }
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

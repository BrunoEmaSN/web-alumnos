import React, { useContext } from 'react';
import { MateriasContext } from '../../Context/BuildContext';

export const MateriasList = () => {
    const {
        materias,
        handleCreate,
        handleEdit,
        handleDelete
    } = useContext(MateriasContext);

    return (
        <div>
            <h1>materiasList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                materias.map( m => (
                    m.estado !== 0 && <div key={ m.id}>
                        { `${ m.id } ${ m.descripcion } ${ m.plan_estudio } ${ m.regimen }` }
                        <button onClick={
                            () => { handleEdit( m.id ) }
                        }>
                            Edit
                        </button>
                        <button onClick={
                            () => { handleDelete( m.id) }
                        }>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};
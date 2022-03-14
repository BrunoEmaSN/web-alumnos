import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeMateria, startDeletingMateria, startSetActive } from '../../Store/Materia/Actions/Materia';
import { materiaModel } from '../../Utils/materiaModel';
export const MateriasList = () => {
    const dispatch = useDispatch();

    const { materias } = useSelector( state => state.materia );

    const handleCreate = () => {
        const lastIndex = materias.length - 1;
        const lastId = materias[lastIndex].id;
        materiaModel.id = lastId + 1;
        dispatch( activeMateria( materiaModel ) );
    }

    const handleEdit = ( id ) => {
        dispatch( startSetActive( id ) );
    }

    const handleDelete = ( id) => {
        dispatch( startDeletingMateria( id) );
    }

    return (
        <div>
            <h1>materiasList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                materias.map( m => (
                    m.estado !== 0 && <div key={ m.id}>
                        { `${ m.id } ${ m.descripcion } ${ m.plan_estudio } ${ m.regimen }` }
                        <button onClick={  () => { handleEdit( m.id ) }  }>Edit</button>
                        <button onClick={  () => { handleDelete( m.id) }  }>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};
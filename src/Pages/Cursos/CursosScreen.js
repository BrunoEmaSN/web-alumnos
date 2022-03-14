import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../Hooks/useModal';
import { CursoModal } from './CursosModal';
import { activeCurso, startDeletingCurso, startLoadingCursos, startSetActive } from '../../Store/Curso/Actions/Curso';
import { cursoModel } from '../../Utils/cursoModel';

const actions = {
    create: 'Create',
    edit: 'Edit'
};

export const CursosScreen = () => {
    const dispatch = useDispatch();

    const { cursos } = useSelector( state => state.curso );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ action, setAction ] = useState('');

    const handleCreate = () => {
        setAction( actions.create );
        dispatch( activeCurso( cursoModel ) );
        openModal();
    }

    const handleUpdate = ( c ) => {
        setAction( actions.edit );
        dispatch( startSetActive( c ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingCurso( id ) );
    }

    useEffect(() => {
        dispatch( startLoadingCursos() );
    }, [dispatch]);
    
    return (
        <div>
            <h1>CursosList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                cursos.map( c => 
                    c.estado !== 0 && (
                        <div key={ c.id }>
                            { `${ c.id } ${ c.nivel } ${ c.turno } ${ c.division } : ${ c.aula_descripcion }` }
                            <button onClick={  () => { handleUpdate( c ) }  }>Edit</button>
                            <button onClick={  () => { handleDelete( c.id ) }  }>Delete</button>
                        </div>
                    )
                )
            }
            {
                isOpenModal && <CursoModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};
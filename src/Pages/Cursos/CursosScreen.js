import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../Hooks/useModal';
import { CursoModal } from './CursosModal';
import { activeCurso, getCursos, startDeletingCurso } from '../../Store/Curso/Actions/Curso';
import { Curso1, cursoModel } from '../../Utils/cursoModel';

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
        const lastIndex = cursos.length - 1;
        const lastId = cursos[lastIndex].id;
        cursoModel.id = lastId + 1;
        setAction( actions.create );
        dispatch( activeCurso( cursoModel ) );
        openModal();
    }

    const handleUpdate = ( a ) => {
        setAction( actions.edit );
        dispatch( activeCurso( a ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingCurso( id ) );
    }

    useEffect(() => {
        dispatch( getCursos( Curso1 ) );
    }, [dispatch]);
    
    return (
        <div>
            <h1>CursosList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                cursos.map( c => <div key={ c.id }>
                    { `${ c.id } ${ c.descripcion } : ${ c.aula.descripcion }` }
                    <button onClick={  () => { handleUpdate( c ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( c.id ) }  }>Delete</button>
                </div>)
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
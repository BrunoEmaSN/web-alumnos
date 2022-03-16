import React, { useContext } from 'react';
import { CursosContext } from '../../Context/BuildContext';
import { CursosState } from '../../Context/CursosState';
import { CursoModal } from './CursosModal';

const Cursos = () => {
    const {
        cursos,
        action,
        isOpenModal,
        closeModal,
        handleCreate,
        handleUpdate,
        handleDelete
    } = useContext(CursosContext)
    
    return (
        <div>
            <h1>CursosList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                cursos.map( c => 
                    c.estado !== 0 && (
                        <div key={ c.id }>
                            { `${ c.id } ${ c.nivel } ${ c.turno } ${ c.division } : ${ c.aula_descripcion }` }
                            <button onClick={
                                () => { handleUpdate( c ) }
                            }>
                                Edit
                            </button>
                            <button onClick={
                                () => { handleDelete( c.id ) }
                            }>
                                Delete
                            </button>
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

export const CursosScreen = () => {
    return (
        <CursosState>
            <Cursos />
        </CursosState>
    );
}
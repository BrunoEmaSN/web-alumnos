import React, { useContext } from 'react';
import { AulasState } from '../../Context/AulasState';
import { AulasContext } from '../../Context/BuildContext';
import { AulasModal } from './AulasModal';

const Aulas = () => {
    const {
        aulas,
        isOpenModal,
        closeModal,
        action,
        handleCreate,
        handleUpdate,
        handleDelete
    } = useContext(AulasContext);

    return (
        <div>
            <h1>AulasList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                aulas.map( a => (
                    a.estado !== 0 && (
                        <div key={ a.id }>
                            { `${ a.id } ${ a.descripcion }` }
                            <button onClick={ 
                                () => { handleUpdate( a ) } 
                            }>
                                Edit
                            </button>
                            <button onClick={ 
                                () => { handleDelete( a.id ) } 
                            }>
                                Delete
                            </button>
                        </div>
                    )
                ))
            }
            {
                isOpenModal && <AulasModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};

export const AulasScreen = () => {
    return (
        <AulasState>
            <Aulas/>
        </AulasState>
    );
}
import React, { useContext } from 'react';
import { TutoresContext } from '../../Context/BuildContext';

export const TutoresList = () => {
    const {
        tutores,
        handleCreate,
        handleEdit,
        handleDelete
    } = useContext(TutoresContext);

    return (
        <div>
            <h1>Tutor List</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                tutores.map( t => 
                    t.estado !== 0 && (
                        <div key={ t.documento }>
                            { `${ t.nombre } ${ t.apellido }` }
                            <button onClick={
                                () => { handleEdit( t.documento ) }
                            }>
                                Edit
                            </button>
                            <button onClick={
                                () => { handleDelete( t.documento ) }
                            }>
                                Delete
                            </button>
                        </div>
                    )
                )
            }
        </div>
    );
};

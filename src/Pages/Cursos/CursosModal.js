import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveCurso, startNewCurso, startUpdateCurso } from '../../Store/Curso/Actions/Curso';
import { Aula2 } from '../../Utils/aulaModel';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const actions = {
    create: 'Create',
    edit: 'Edit'
};

export const CursoModal = ({ isOpenModal, closeModal, action }) => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.curso );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        aula
    } = formValues;

    const handleAddAula = () => {
        dispatch( startNewCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal()
    }

    const handleEditAula = () => {
        dispatch( startUpdateCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal();
    }
    
    return (
        <div>
            <Modal
                isOpen={ isOpenModal }
                style={ customStyles }
                onRequestClose={ closeModal }
                ariaHideApp={false}
            >
                <h2>{ action === actions.create ? 'Crear Nuevo Curso' : 'Editar Curso' }</h2>
                
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={ descripcion }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="aulas">Aulas</label>
                    <select
                        id="aulas"
                        name="aulas"
                        value={ aula }
                        onChange={ handleInputChange }
                    >
                        <option value="" disabled>selecione un aula</option>
                        { Aula2.map((a) => (
                            <option key={ a.id } value={ a }>
                                { a.descripcion }
                            </option>
                        )) }                        
                    </select>
                </div>
                <div>
                    <button onClick={ action === actions.create ? handleAddAula : handleEditAula } >
                        Save
                    </button>
                </div>
                <div>
                    <button onClick={ closeModal }>
                        Cerrar
                    </button>
                </div>
            </Modal>
        </div>
    );
};

CursoModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
}
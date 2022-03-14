import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveAula, startNewAula, startUpdateAula } from '../../Store/Aula/Actions/Aula';

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

export const AulasModal = ({ isOpenModal, closeModal, action }) => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.aula );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        capacidad
    } = formValues;
    

    const handleAddAula = () => {
        dispatch( startNewAula( formValues ) );
        dispatch( cleanActiveAula() );
        closeModal()
    }

    const handleEditAula = () => {
        dispatch( startUpdateAula( formValues ) );
        dispatch( cleanActiveAula() );
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
                <h2>{ action === actions.create ? 'Crear Nueva Aula' : 'Editar Aula' }</h2>
                
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
                    <label htmlFor="capacidad">Capacidad</label>
                    <input
                        type="number"
                        name="capacidad"
                        value={ capacidad }
                        onChange={ handleInputChange }
                    />
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

AulasModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
}
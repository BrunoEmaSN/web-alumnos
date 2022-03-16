import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { customStyles } from '../../Utils/modalStyles';
import { AulasContext } from '../../Context/BuildContext';

export const AulasModal = ({ isOpenModal, closeModal, action }) => {
    const {
        actions,
        handleAddAula,
        handleEditAula
    } = useContext(AulasContext);
    const { active } = useSelector( state => state.aula );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        capacidad
    } = formValues;
    
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
                    {
                        action === actions.create
                        ? (
                            <button onClick={ () => handleAddAula(formValues) }>
                                Guardar
                            </button>
                        )
                        : (
                            <button onClick={ () => handleEditAula(formValues) }>
                                Save
                            </button>
                        )   
                    }
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
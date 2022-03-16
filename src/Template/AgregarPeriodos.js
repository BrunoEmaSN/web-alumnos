import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useForm } from '../Hooks/useForm';
import { useModal } from '../Hooks/useModal';
import { periodosAdd } from '../Services/restCallPeriodos';
import { customStyles } from '../Utils/modalStyles';

const initialState = {
    descripcionPeriodo: '',
    fechaInicio: '',
    fechaFin: '',
    tipoPeriodo: ''
}

export const AgregarPeriodos = () => {
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ formValues, handleInputChange, , , , setValues ] = useForm(initialState);
    const {
        descripcionPeriodo,
        fechaInicio,
        fechaFin,
        tipoPeriodo
    } = formValues;

    const handleAddPeriodo = async () => {
        await periodosAdd( formValues );
        setValues(initialState);
        closeModal();
    }

    return (
        <div>
            <button onClick={ openModal }>Agregar</button>
            <Modal
                isOpen={ isOpenModal }
                style={ customStyles }
                onRequestClose={ closeModal }
                ariaHideApp={false}
            >
                <div>
                    <h2>Agregar Periodo</h2>
                    <div>
                        <label htmlFor="descripcionPeriodo">
                            Descripcion
                        </label>
                        <input
                            type="text"
                            name="descripcionPeriodo"
                            value={ descripcionPeriodo }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaInicio">
                            Fecha Inicio
                        </label>
                        <input
                            type="date"
                            name="fechaInicio"
                            value={ fechaInicio }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaFin">Fecha Fin</label>
                        <input
                            type="date"
                            name="fechaFin"
                            value={ fechaFin }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="tipoPeriodo">Tipo</label>
                        <select
                            id="tipoPeriodo"
                            name="tipoPeriodo"
                            value={ tipoPeriodo }
                            onChange={ handleInputChange }
                        >
                            <option value="" disabled>
                                Selecione un tipo
                            </option>
                            <option value="CicloLectivo">
                                Ciclo Lectivo
                            </option>
                            <option value="Mesa">
                                Mesa
                            </option>
                        </select>
                    </div>
                    <div>
                        <button onClick={ handleAddPeriodo }>Agregar</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

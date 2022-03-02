import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveSancion, startNewSancion, startUpdateSancion } from '../../Store/Sancion/Actions/Sancion';
import { Alumno2 } from '../../Utils/alumnoModel';
import { Docente2 } from '../../Utils/docenteModel';
import { tiposSanciones } from '../../Utils/sancionModel';

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

export const SancionModal = ({ isOpenModal, closeModal, action }) => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.sancion );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        alumno,
        docente,
        tipoSancion,
        descripcion,
        fecha
    } = formValues;

    const handleAddAula = () => {
        dispatch( startNewSancion( formValues ) );
        dispatch( cleanActiveSancion() );
        closeModal()
    }

    const handleEditAula = () => {
        dispatch( startUpdateSancion( formValues ) );
        dispatch( cleanActiveSancion() );
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
                <h2>{ action === actions.create ? 'Crear Nuevo Sancion' : 'Editar Sancion' }</h2>
                <div>
                    <label htmlFor="alumno">Alumno</label>
                    <select id="alumno" name="alumno" value={ alumno } onChange={ handleInputChange }>
                        <option value="" disabled>Seleccione un Alumno</option>
                        { Alumno2.map((a) => (
                            <option key={a.documento} value={ a.documento }>{ `${ a.apellido } ${ a.nombre }` }</option>
                        )) }
                    </select>
                </div>
                <div>
                    <label htmlFor="docente">Docente</label>
                    <select id="docente" name="docente" value={ docente } onChange={ handleInputChange }>
                        <option value="" disabled>Seleccione un Docente</option>
                        { Docente2.map((d) => (
                            <option key={d.documento} value={ d.documento }>{ `${ d.apellido } ${ d.nombre }` }</option>
                        )) }
                    </select>
                </div>
                <div>
                    <label htmlFor="tipoSancion">Tipo de Sancion</label>
                    <select id="tipoSancion" name="tipoSancion" value={ tipoSancion } onChange={ handleInputChange }>
                        <option value="" disabled>Seleccione un Tipo</option>
                        { tiposSanciones.map((ts) => (
                            <option key={ts} value={ts}>{ ts }</option>
                        )) }
                    </select>
                </div>
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
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" name="fecha" value={fecha} onChange={handleInputChange} />
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

SancionModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
}

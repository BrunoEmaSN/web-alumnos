import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { alumnosGetAll } from '../../Services/restCallAlumnos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { useForm } from '../../Hooks/useForm';
import { customStyles } from '../../Utils/modalStyles';
import { tiposSanciones } from '../../Utils/Model/sancionModel';
import { SancionesContext } from '../../Context/BuildContext';

export const SancionModal = ({ isOpenModal, closeModal }) => {
    const {
        active,
        handleEditSancion
    } = useContext(SancionesContext);

    const [ alumnosList, setAlumnosList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        alumno,
        docente,
        tipoSancion,
        descripcion,
        fecha
    } = formValues;

    const handleListGetAll = async () => {
        setAlumnosList( await alumnosGetAll() );
        setDocentesList( await docentesGetAll() );
    }

    useEffect(() => {
        handleListGetAll();
    }, []);

    return (
        <div>
            <Modal
                isOpen={ isOpenModal }
                style={ customStyles }
                onRequestClose={ closeModal }
                ariaHideApp={false}
            >
                <h2>Editar Sancion</h2>
                <div>
                    <label htmlFor="alumno">Alumno</label>
                    <select
                        id="alumno"
                        name="alumno"
                        value={ alumno }
                        onChange={ handleInputChange }
                    >
                        <option value="" disabled>Seleccione un Alumno</option>
                        { alumnosList.map((a) => (
                            <option key={a.documento} value={ a.documento }>
                                { `${ a.apellido } ${ a.nombre }` }
                            </option>
                        )) }
                    </select>
                </div>
                <div>
                    <label htmlFor="docente">Docente</label>
                    <select
                        id="docente"
                        name="docente"
                        value={ docente }
                        onChange={ handleInputChange }
                    >
                        <option value="" disabled>Seleccione un Docente</option>
                        { docentesList.map((d) => (
                            <option key={d.documento} value={ d.documento }>
                                { `${ d.apellido } ${ d.nombre }` }
                            </option>
                        )) }
                    </select>
                </div>
                <div>
                    <label htmlFor="tipoSancion">Tipo de Sancion</label>
                    <select
                        id="tipoSancion"
                        name="tipoSancion"
                        value={ tipoSancion }
                        onChange={ handleInputChange }
                    >
                        <option value="" disabled>Seleccione un Tipo</option>
                        { tiposSanciones.map((ts) => (
                            <option key={ts} value={ts}>
                                { ts }
                            </option>
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
                    <input
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={ handleEditSancion } >
                        Editar
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
    closeModal: PropTypes.func.isRequired
}

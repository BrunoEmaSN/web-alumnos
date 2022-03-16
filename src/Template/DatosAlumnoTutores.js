import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import Card from '../Components/Card';
import { tutoresGetOne } from '../Services/restCallTutores';
import { customStyles } from '../Utils/modalStyles';
import { tutorFormatter } from '../Utils/Model/tutorModel';

export const DatosAlumnoTutores = ({ tutores, handleInputChange }) => {

    const [ documentoTutor, setDocumentoTutor ] = useState('');

    const [ tutor, setTutor ] = useState(null);

    const [ parentesco, setParentesco ] = useState('');

    const [ modalTutorIsOpen, setModalTutorIsOpen ] = useState(false);

    const openModalTutor = () => {
        setModalTutorIsOpen( true );
    }

    const closeModalTutor = () => {
        setModalTutorIsOpen( false );
    }

    const handleDocumentoTutor = ({ target }) => {
        setDocumentoTutor( target.value );
    }

    const findTutor = async () => {
        const result = await tutoresGetOne( parseInt( documentoTutor ) );
        setTutor( tutorFormatter( result ) );
    }

    const handleParentesco = ({ target }) => {
        setParentesco( target.value );
    }

    const handleAddTutor = async () => {
        const isExist = tutores.find( t => t.documento === parseInt( tutor.documento ) );
        setParentesco('');
        setDocumentoTutor('');

        if( isExist ){
            closeModalTutor();
            return console.log( 'tutor ya asignado al alumno' );
        }

        handleInputChange({
            target: {
                name: 'tutores',
                value: [...tutores, {...tutor, parentesco }]
            }
        });
        
        closeModalTutor();
    }

    const removeTutor = ( documentoT ) => {
        const filterTutores = tutores.filter( t => t.documento !== parseInt( documentoT ) );
        handleInputChange({
            target: {
                name: 'tutores',
                value: [ ...filterTutores ]
            }
        });
    }

    return (
        <fieldset>
            <legend>Tutores del Alumno</legend>
            <div>
                <button onClick={ openModalTutor }>Agregar Tutor</button>
                <div id="tutores" name="tutores">
                    {
                        tutores && tutores.map( t => <Card
                            key={ t.documento }
                            titulo={ t.parentesco }
                            descripcion={ `${ t.nombre } ${ t.apellido }` }
                            id={ t.documento }
                            removeCard={ removeTutor }
                        />)
                    }
                </div>
            </div>
            <Modal
                isOpen={ modalTutorIsOpen }
                style={ customStyles }
                onRequestClose={ closeModalTutor }
                ariaHideApp={false}
            >
                <h2>Tutor</h2>
                <div>
                    <div>
                        <label htmlFor="documentoTutor">Documento Tutor</label>
                        <input
                            type="number"
                            name="documentoTutor"
                            value={ documentoTutor }
                            onChange={ handleDocumentoTutor }
                        />
                        <button onClick={ findTutor }>Buscar</button>
                    </div>
                    <div>
                        { tutor && <span>
                            {`${ tutor.nombre } ${ tutor.apellido }`}
                        </span> }
                    </div>
                    <div>
                        <label htmlFor="documentoTutor">Parentesco</label>
                        <input
                            type="text"
                            name="parentesco"
                            value={ parentesco }
                            onChange={ handleParentesco }
                        />
                    </div>
                    <button onClick={ handleAddTutor }>Agregar</button>
                </div>
            </Modal>
        </fieldset>
    );
};

DatosAlumnoTutores.propTypes = {
    tutores: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}
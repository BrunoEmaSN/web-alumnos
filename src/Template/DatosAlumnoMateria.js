import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import Card from '../Components/Card';

const materias1 = [
    {
        id: 1,
        descripcion: 'matematica'
    },
    {
        id: 2,
        descripcion: 'lengua'
    }
];

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

export const DatosAlumnoMateria = ({ materias, handleInputChange }) => {

    const [ materiaId, setMateriaId ] = useState(1);

    const [ estado, setEstado ] = useState('regular');

    const [ modalMateriaIsOpen, setmodalMateriaIsOpen ] = useState(false);

    const openModalMateria = () => {
        setmodalMateriaIsOpen( true );
    }

    const closeModalMateria = () => {
        setmodalMateriaIsOpen( false );
    }

    const handleChageMateria = ({ target }) => {
        setMateriaId( target.value );
    }

    const handleEstado = ({ target }) => {
        setEstado( target.value );
    }

    const handleAddMateria = () => {
        const newMateria = materias1.find( m => m.id === parseInt( materiaId ) );
        const isExist = materias.find( m => m.id === parseInt( materiaId ) );
        newMateria.estado = estado;
        setMateriaId('');
        setEstado('');

        if( isExist ){
            closeModalMateria();
            return console.log('materia ya asignada al alumno');
        }

        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...materias, { ...newMateria } ]
            }
        });

        closeModalMateria();
    }

    const removeMateria = ( idMateria ) => {
        const filterMaterias = materias.filter( m => m.id !== parseInt( idMateria ) );
        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...filterMaterias ]
            }
        })
    }

    return (
        <fieldset>
            <legend>Materias del Alumno</legend>
            <div>
                <button onClick={ openModalMateria }>Agregar Materia</button>
                <div id="materias" name="materias">
                    {
                        materias && materias.map( m => 
                            <Card
                                key={ m.id }
                                titulo={ m.descripcion }
                                descripcion={ m.estado }
                                id={ m.id }
                                removeCard={ removeMateria }
                            />
                        )
                    }
                </div>
            </div>
            <Modal
                isOpen={ modalMateriaIsOpen }
                style={ customStyles }
                onRequestClose={ closeModalMateria }
                ariaHideApp={false}
            >
                <h2>Materias</h2>
                <div>
                    <label htmlFor="materias">Selecione una Materia</label>
                    <select id="materias" onChange={ handleChageMateria }>
                        {
                            materias1.map( m => (
                                <option key={ m.id } value={ m.id } >{ m.descripcion }</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="estado">Estado</label>
                    <select id="estado" onChange={ handleEstado }>
                        <option value="regular">Regular</option>
                        <option value="libre">Libre</option>
                        <option value="promocional">Promocional</option>
                    </select>
                </div>
                <div>
                    <button onClick={ handleAddMateria }>Agregar</button>
                </div>
            </Modal>
        </fieldset>
    );
};

DatosAlumnoMateria.propTypes = {
    materias: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired
}
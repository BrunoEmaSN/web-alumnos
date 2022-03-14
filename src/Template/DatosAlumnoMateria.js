import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import Card from '../Components/Card';
import { materiasGetAll } from '../Services/restCallMaterias';

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

    const [ materia, setMateria ] = useState('');

    const [materiasList, setMateriasList] = useState([]);

    const [ estado, setEstado ] = useState('');

    const [ modalMateriaIsOpen, setmodalMateriaIsOpen ] = useState(false);

    const handleMateriasGetAll = async () => {
        setMateriasList( await materiasGetAll() );
    }

    useEffect(() => {
        handleMateriasGetAll();
    }, []);

    const openModalMateria = () => {
        setmodalMateriaIsOpen( true );
    }

    const closeModalMateria = () => {
        setmodalMateriaIsOpen( false );
    }

    const handleChageMateria = ({ target }) => {
        setMateria( JSON.parse( target.value ) );
    }

    const handleEstado = ({ target }) => {
        setEstado( target.value );
    }

    const handleAddMateria = () => {
        const isExist = materias.find( m => m.id === parseInt( materia.id ) );
        setMateria('');
        setEstado('');

        if( isExist ){
            closeModalMateria();
            return console.log('materia ya asignada al alumno');
        }

        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...materias, { ...materia, estado } ]
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
                    <label htmlFor="materias">Materia</label>
                    <select id="materias" value={ materia !== '' ? JSON.stringify(materia) : '' } onChange={ handleChageMateria }>
                        <option value="" disabled>Selecione una Materia</option>
                        {
                            materiasList.map( m => (
                                <option key={ m.id } value={ JSON.stringify( m ) } >{ m.descripcion }</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="estado">Estado</label>
                    <select id="estado" value={ estado } onChange={ handleEstado }>
                        <option value="" disabled>Selecione un Estado</option>
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
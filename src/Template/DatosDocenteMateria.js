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

export const DatosDocenteMateria = ({ materias, handleInputChange }) => {
    const [ materiasList, setMateriasList ] = useState([]);
    const [ materia, setMateria ] = useState('');
    const [ modalMateriaIsOpen, setmodalMateriaIsOpen ] = useState(false);

    const handleMateriasGetAll = async () => {
        setMateriasList( await materiasGetAll() );
    }

    useEffect(() => {
        handleMateriasGetAll();
    }, [])
    

    const openModalMateria = () => {
        setmodalMateriaIsOpen( true );
    }
    const closeModalMateria = () => {
        setmodalMateriaIsOpen( false );
    }

    const handleChageMateria = ({ target }) => {
        setMateria( JSON.parse( target.value ) );
    }

    const handleAddMateria = () => {
        const isExist = materias.find( m => m.id === parseInt( materia.id ) );
        setMateria('');

        if( isExist ){
            closeModalMateria();
            return console.log('materia ya asignada al docente');
        }

        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...materias, materia ]
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
            <legend>Materias del Docente</legend>
            <div>
                <button onClick={ openModalMateria }>Agregar Materia</button>
                <div id="materias" name="materias">
                    {
                        materias.map( m => 
                            <Card
                                key={ m.id }
                                titulo={ m.descripcion }
                                descripcion={ '' }
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
                    <select id="materias" value={ materia !== '' ? JSON.stringify(materia) : '' } onChange={ handleChageMateria }>
                        <option value="" disabled>Selecione una materia</option>
                        {
                            materiasList.map( m => (
                                <option key={ m.id } value={ JSON.stringify(m) } >{ m.descripcion }</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <button onClick={ handleAddMateria }>Agregar</button>
                </div>
            </Modal>
        </fieldset>
    );
};

DatosDocenteMateria.propTypes = {
    materias: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}
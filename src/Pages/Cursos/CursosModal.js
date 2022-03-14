import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveCurso, startNewCurso, startUpdateCurso } from '../../Store/Curso/Actions/Curso';
import { aulasGetAll } from '../../Services/restCallAulas';

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

    const [ formValues, handleInputChange, , handleObjectChange ] = useForm( active );

    const {
        nivel,
        turno,
        division,
        gradoAno,
        aula
    } = formValues;

    const [ aulas, setAulas ] = useState([]);

    const handleAddCurso = () => {
        dispatch( startNewCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal()
    }

    const handleEditCurso = () => {
        dispatch( startUpdateCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal();
    }

    const handleAulasGetAll = async () => {
        setAulas( await aulasGetAll() );
    }

    useEffect(() => {
        handleAulasGetAll();
    }, []);
    
    
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
                    <label htmlFor="nivel">Nivel</label>
                    <select id="nivel" name="nivel" value={ nivel } onChange={ handleInputChange }>
                        <option value="" disabled>Selecione un nivel</option>
                        <option value="P">Primaria</option>
                        <option value="S">Secundaria</option>
                        <option value="T">Terciario</option>
                        <option value="U">Universidad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="turno">Turno</label>
                    <select id="turno" name="turno" value={ turno } onChange={ handleInputChange }>
                        <option value="" disabled>Selecione un turno</option>
                        <option value="Mañana">Mañana</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noche">Noche</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="division">Division</label>
                    <input
                        type="text"
                        name="division"
                        value={ division }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="gradoAno">Grado/Año</label>
                    <input
                        type="number"
                        name="gradoAno"
                        value={ gradoAno }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="aulas">Aulas</label>
                    <select
                        id="aulas"
                        name="aula"
                        value={ aula !== '' ? JSON.stringify( aula ) : '' }
                        onChange={ handleObjectChange }
                    >
                        <option value="" disabled>selecione un aula</option>
                        { aulas.map((a) => (
                            a.estado !== 0 && (
                                <option key={ a.id } value={ JSON.stringify( a ) }>
                                    { a.descripcion }
                                </option>
                            )
                        )) }                        
                    </select>
                </div>
                <div>
                    <button onClick={ action === actions.create ? handleAddCurso : handleEditCurso } >
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
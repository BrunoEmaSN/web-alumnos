import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../Components/Card';
import { useForm } from '../../Hooks/useForm';
import { startNewAlumno } from '../../Store/Alumno/Actions/Alumno';
import { alumnoModel } from '../../Utils/alumnoModel';

export const AlumnosSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector(state => state.alumno);

    const [ documentoTutor, setDocumentoTutor ] = useState('');

    const [ materiaId, setMateriaId ] = useState(1);

    const [ tutor, setTutor ] = useState(null);

    const [ parentesco, setParentesco ] = useState('');

    const [ nivel, setNivel ] = useState('primaria');

    const [ estado, setEstado ] = useState('regular');

    const [ formValues, handleInputChange, handleCheckboxChange ] = useForm(
        active !== null ? active : alumnoModel
    );


    const tutores1 = [
        {
            documento: 1,
            nombre: 'Jorge',
            apellido: 'Joestar',
            tipoDocumento: 'DNI'
        },
        {
            documento: 2,
            nombre: 'Jonathan',
            apellido: 'Joestar',
            tipoDocumento: 'DNI'
        }
    ];

    const cursos = [
        {
            id: 1,
            descripcion: '1° "A"',
            aula: {
                id: 1,
                descripcion: 'Aula 1:'
            },
            nivel: 'primaria'
        },
        {
            id: 2,
            descripcion: '1° "B"',
            aula: {
                id: 1,
                descripcion: 'Aula 1:'
            },
            nivel: 'primaria'
        },
        {
            id: 3,
            descripcion: '1° "A"',
            aula: {
                id: 1,
                descripcion: 'Aula 2:'
            },
            nivel: 'secundaria'
        }
    ];

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

    const handleChageMateria = ({ target }) => {
        setMateriaId( target.value );
    }

    const {
        nombre,
        apellido,
        tipoDocumento,
        documento,
        fechaNacimiento,
        sexo,
        lugarNacimiento,
        telefonoFijo,
        telefonoMovil,
        domicilio,
        numero,
        departamento,
        piso,
        partidaNacimiento,
        fotocopiaDNI,
        fotocopiaCUIL,
        foto4x4,
        contrato,
        observaciones,
        cursoId,
        materias,
        tutores
    } = formValues;

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

    const [ modalTutorIsOpen, setModalTutorIsOpen ] = useState(false);

    const [ modalMateriaIsOpen, setmodalMateriaIsOpen ] = useState(false);

    const openModalTutor = ( e ) => {
        e.preventDefault();
        setModalTutorIsOpen( true );
    }

    const closeModalTutor = () => {
        setModalTutorIsOpen( false );
    }

    const openModalMateria = ( e ) => {
        e.preventDefault();
        setmodalMateriaIsOpen( true );
    }

    const closeModalMateria = () => {
        setmodalMateriaIsOpen( false );
    }

    const handleDocumentoTutor = ({ target }) => {
        setDocumentoTutor( target.value );
    }

    const findTutor = () => {
        setTutor( tutores1.find( t => t.documento === parseInt( documentoTutor ) ) );
    }

    const handleParentesco = ({ target }) => {
        setParentesco( target.value );
    }

    const handleNivel = ({ target }) => {
        setNivel( target.value );
    }

    const handleEstado = ({ target }) => {
        setEstado( target.value );
    }

    const handleAddTutor = () => {
        const newTutor = tutores1.find( t => t.documento === parseInt(documentoTutor) );
        const isExist = tutores.find( t => t.documento === parseInt( newTutor.documento ) );
        setParentesco('');
        setDocumentoTutor('');

        if( isExist ){
            closeModalTutor();
            return console.log( 'tutor ya asignado al alumno' );
        }

        handleInputChange({
            target: {
                name: 'tutores',
                value: [...tutores, {...newTutor, parentesco }]
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

    const handleAddAlumno = (e) => {
        e.preventDefault();
        dispatch( startNewAlumno( formValues ) );
    }
    
    return (
        <div>
            <form onSubmit={ handleAddAlumno }>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={ nombre }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={ apellido }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="tipoDocumento">Tipo Documento</label>
                    <select 
                        id="tipoDocumento"
                        name="tipoDocumento"
                        value={ tipoDocumento }
                        onChange={ handleInputChange }
                    >
                        <option value="DNI">DNI</option>
                        <option value="CUIL">CUIL</option>
                        <option value="LE">Libreta Enrolamiento</option>
                        <option value="LC">Libreta Civica</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="documento">Documento</label>
                    <input
                        type="number"
                        id="documento"
                        name="documento"
                        value={ documento }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={ fechaNacimiento }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="sexo">Sexo</label>
                    <select
                        id="sexo"
                        name="sexo"
                        value={ sexo }
                        onChange={ handleInputChange }
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Femenino</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lugarNacimiento">Lugar Nacimiento</label>
                    <input
                        type="text"
                        id="lugarNacimiento"
                        name="lugarNacimiento"
                        value={ lugarNacimiento }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="telefonoFijo">Telefono Fijo</label>
                    <input 
                        type="number"
                        id="telefonoFijo"
                        name="telefonoFijo"
                        value={ telefonoFijo }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="telefonoMovil">Telofono Movil</label>
                    <input
                        type="number"
                        id="telefonoMovil"
                        name="telefonoMovil"
                        value={ telefonoMovil }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="domicilio">Domicilio</label>
                    <input
                        type="text"
                        id="domicilio"
                        name="domicilio"
                        value={ domicilio }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="numero">Numero</label>
                    <input
                        type="number"
                        id="numero"
                        name="numero"
                        value={ numero }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="departamento">Departamento</label>
                    <input
                        type="text"
                        id="departamento"
                        name="departamento"
                        value={ departamento }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="piso">Piso</label>
                    <input
                        type="number"
                        id="piso"
                        name="piso"
                        value={ piso }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="requisitos">Requisitos</label>
                    <div id="requisitos">
                        <div>
                            <input
                                type="checkbox"
                                id="partidaNacimiento"
                                name="partidaNacimiento"
                                value={ partidaNacimiento }
                                onChange={ handleCheckboxChange }
                            />
                            <label htmlFor="partidaNacimiento">tiene Partida Nacimiento?</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="fotocopiaDNI"
                                name="fotocopiaDNI"
                                value={ fotocopiaDNI }
                                onChange={ handleCheckboxChange }
                            />
                            <label htmlFor="fotocopiaDNI">tiene Fotocopia DNI?</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="fotocopiaCUIL"
                                name="fotocopiaCUIL"
                                value={ fotocopiaCUIL }
                                onChange={ handleCheckboxChange }
                            />
                            <label htmlFor="fotocopiaCUIL">tiene Fotocopia CUIL?</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="foto4x4"
                                name="foto4x4"
                                value={ foto4x4 }
                                onChange={ handleCheckboxChange }
                            />
                            <label htmlFor="foto4x4">tiene Fotocopia 4x4?</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="contrato"
                                name="contrato"
                                value={ contrato }
                                onChange={ handleCheckboxChange }
                            />
                            <label htmlFor="contrato">firmaron el Contrato?</label>
                        </div>
                        <div>
                            <label htmlFor="observaciones">Observaciones</label>
                            <input
                                type="text"
                                id="observaciones"
                                name="observaciones"
                                value={ observaciones }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="nivel">Nivel</label>
                    <select id="nivel" onChange={ handleNivel } value={ nivel }>
                        <option value="primaria">Primaria</option>
                        <option value="secundaria">Secundaria</option>
                        <option value="terciaria">Terciaria</option>
                        <option value="universidad">Universidad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="cursoId">Cursos</label>
                    <select id="cursoId" name="cursoId" value={ cursoId } onChange={ handleInputChange }>
                        { cursos.map( c => {
                            return (
                                c.nivel === nivel ?
                                <option key={ c.id } value={c.id}>
                                    {`${ c.aula.descripcion }: ${ c.descripcion }`}
                                </option>:
                                ''
                            );
                        } ) }
                    </select>
                </div>
                <div>
                    <button onClick={ openModalTutor }>Agregar Tutor</button>
                    <div id="tutores" name="tutores">
                        {
                            tutores.map( t => <Card
                                key={ t.documento }
                                titulo={ t.parentesco }
                                descripcion={ `${ t.nombre } ${ t.apellido }` }
                                id={ t.documento }
                                removeCard={ removeTutor }
                            />)
                        }
                    </div>
                </div>
                <div>
                    <button onClick={ openModalMateria }>Agregar Materia</button>
                    <div id="materias" name="materias">
                        {
                            materias.map( m => <Card
                                key={ m.id }
                                titulo={ m.descripcion }
                                descripcion=""
                                id={ m.id }
                                removeCard={ removeMateria }
                            />)
                        }
                    </div>
                </div>
                <div>
                    <button>Guardar</button>
                </div>
            </form>
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
        </div>
    )
}

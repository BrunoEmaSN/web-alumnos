import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const alumnosGetAll = async () => {
    const url = `${ baseUrl }/alumnos/`;
    return await axiosWithToken( url );
}

export const alumnosGetOne = async ( id ) => {
    const url = `${ baseUrl }/alumnos/id/${ id }`;
    return await axiosWithToken( url );
}

export const alumnosGetByCurso = async ( curso_id ) => {
    const url = `${ baseUrl }/alumnos/curso_id/${ curso_id }`;
    return await axiosWithToken( url );
}

export const alumnosMateriaGetByAlumno = async ( id ) => {
    const url = `${ baseUrl }/alumnos/alumno_materia/id/${ id }`;
    return await axiosWithToken( url );
}

export const alumnosTutorGetByAlumno = async ( id ) => {
    const url = `${ baseUrl }/alumnos/alumno_tutor/id/${ id }`;
    return await axiosWithToken( url ) ;
}

export const alumnosAdd = async ( data ) => {
    const url = `${ baseUrl }/alumnos/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const alumnosTutorAdd = async ( data ) => {
    const url = `${ baseUrl }/alumnos/alumno_tutor/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const alumnosMateriaAdd = async ( data ) => {
    const url = `${ baseUrl }/alumnos/alumno_materia`;
    return await axiosWithToken( url, data, 'POST' );
}

export const alumnosUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/alumnos/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const alumnosTutorUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/alumnos/alumno_tutor/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const alumnosMateriaUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/alumnos/alumno_materia/id/${ id }`;
    console.log(url)
    return await axiosWithToken( url, data, 'PUT' );
}

export const alumnosDelete = async ( id ) => {
    const url = `${ baseUrl }/alumnos/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}

export const alumnosTutorDelete = async ( id ) => {
    const url = `${ baseUrl }/alumnos/alumno_tutor/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}

export const alumnosMateriaDelete = async ( id ) => {
    const url = `${ baseUrl }/alumnos/alumno_materia/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const docentesGetAll = async () => {
    const url = `${ baseUrl }/docentes/`;
    return await axiosWithToken( url );
}

export const docentesGetOne = async ( id ) => {
    const url = `${ baseUrl }/docentes/id/${ id }`;
    return await axiosWithToken( url );
}

export const docentesMateriaGetByDocente = async ( id ) => {
    const url = `${ baseUrl }/docentes/docente_materia/id/${ id }`;
    return await axiosWithToken( url );
}

export const docentesAdd = async ( data ) => {
    const url = `${ baseUrl }/docentes/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const docentesMateriaAdd = async ( data ) => {
    const url = `${ baseUrl }/docentes/docente_materia/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const docentesUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/docentes/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const docentesMateriaUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/docentes/docente_materia/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const docentesDelete = async ( id ) => {
    const url = `${ baseUrl }/docentes/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}

export const docentesMateriaDelete = async ( id ) => {
    const url = `${ baseUrl }/docentes/docente_materia/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
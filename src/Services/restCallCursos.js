import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const cursosGetAll = async () => {
    const url = `${ baseUrl }/cursos/`;
    return await axiosWithToken( url );
}

export const cursosGetOne = async ( id ) => {
    const url = `${ baseUrl }/cursos/id/${ id }`;
    return await axiosWithToken( url );
}

export const cursosAdd = async ( data ) => {
    const url = `${ baseUrl }/cursos/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const cursosUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/cursos/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const cursosDelete = async ( id ) => {
    const url = `${ baseUrl }/cursos/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
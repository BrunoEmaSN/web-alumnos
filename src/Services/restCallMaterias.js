import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const materiasGetAll = async () => {
    const url = `${ baseUrl }/materias/`;
    return await axiosWithToken( url );
}

export const materiasGetOne = async ( id ) => {
    const url = `${ baseUrl }/materias/id/${ id }`;
    return await axiosWithToken( url );
}

export const materiasAdd = async ( data ) => {
    const url = `${ baseUrl }/materias/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const materiasUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/materias/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const materiasDelete = async ( id ) => {
    const url = `${ baseUrl }/materias/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
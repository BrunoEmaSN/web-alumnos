import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const calificacionesGetAll = async () => {
    const url = `${ baseUrl }/calificaciones/`;
    return await axiosWithToken( url );
}

export const calificacionesGetOne = async ( id ) => {
    const url = `${ baseUrl }/calificaciones/id/${ id }`;
    return await axiosWithToken( url );
}

export const calificacionesUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/calificaciones/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}
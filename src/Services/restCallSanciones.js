import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const sancionesGetAll = async () => {
    const url = `${ baseUrl }/sanciones/`;
    return await axiosWithToken( url );
}

export const sancionesGetOne = async ( id ) => {
    const url = `${ baseUrl }/sanciones/id/${ id }`;
    return await axiosWithToken( url );
}

export const sancionesUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/sanciones/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}
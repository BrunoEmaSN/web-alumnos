import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const clasesGetAll = async () => {
    const url = `${ baseUrl }/clases/`;
    return await axiosWithToken( url );
}

export const clasesGetOne = async ( id ) => {
    const url = `${ baseUrl }/clases/id/${ id }`;
    return await axiosWithToken( url );
}

export const clasesAdd = async ( data ) => {
    const url = `${ baseUrl }/clases/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const clasesUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/clases/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const clasesDelete = async ( id ) => {
    const url = `${ baseUrl }/clases/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
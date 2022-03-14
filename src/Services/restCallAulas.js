import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const aulasGetAll = async () => {
    const url = `${ baseUrl }/aulas/`;
    return await axiosWithToken( url );
}

export const aulasGetOne = async ( id ) => {
    const url = `${ baseUrl }/aulas/id/${ id }`;
    return await axiosWithToken( url );
}

export const aulasAdd = async ( data ) => {
    const url = `${ baseUrl }/aulas/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const aulasUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/aulas/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const aulasDelete = async ( id ) => {
    const url = `${ baseUrl }/aulas/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
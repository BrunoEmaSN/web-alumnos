import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const tutoresGetAll = async () => {
    const url = `${ baseUrl }/tutores/`;
    return await axiosWithToken( url );
}

export const tutoresGetOne = async ( id ) => {
    const url = `${ baseUrl }/tutores/id/${ id }`;
    return await axiosWithToken( url );
}

export const tutoresGetOneWithPareja = async ( id ) => {
    const url = `${ baseUrl }/tutores/withPareja/id/${id}`;
    return await axiosWithToken( url );
}

export const tutoresAdd = async ( data ) => {
    const url = `${ baseUrl }/tutores/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const tutoresUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/tutores/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const tutoresDelete = async ( id ) => {
    const url = `${ baseUrl }/tutores/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
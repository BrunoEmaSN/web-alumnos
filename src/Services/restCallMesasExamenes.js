import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const mesasExamenesGetAll = async () => {
    const url = `${ baseUrl }/mesasExamenes/`;
    return await axiosWithToken( url );
}

export const mesasExamenesGetOne = async ( id ) => {
    const url = `${ baseUrl }/mesasExamenes/id/${ id }`;
    return await axiosWithToken( url );
}

export const mesasExamenesAdd = async ( data ) => {
    const url = `${ baseUrl }/mesasExamenes/`;
    return await axiosWithToken( url, data, 'POST' );
}

export const mesasExamenesUpdate = async ( id, data ) => {
    const url = `${ baseUrl }/mesasExamenes/id/${ id }`;
    return await axiosWithToken( url, data, 'PUT' );
}

export const mesasExamenesDelete = async ( id ) => {
    const url = `${ baseUrl }/mesasExamenes/id/${ id }`;
    return await axiosWithToken( url, {}, 'DELETE' );
}
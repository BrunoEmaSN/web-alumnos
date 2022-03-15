import { axiosWithToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const periodosGetAll = async ( tipo ) => {
    const url = `${ baseUrl }/periodos/tipo/${ tipo }`;
    return await axiosWithToken( url );
}

export const periodosAdd = async ( data ) => {
    const url = `${ baseUrl }/periodos/`;
    return await axiosWithToken( url, data, 'POST' );
}
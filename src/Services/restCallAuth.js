import { axiosWithoutToken } from "./restCallBaseServices";

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API;

export const login = async (data) => {
    const url = `${ baseUrl }/users/login`;
    return await axiosWithoutToken( url, data, 'POST' );
}
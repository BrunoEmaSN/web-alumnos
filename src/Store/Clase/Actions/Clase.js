import { types } from "../../../Types";

export const startNewClase = ( clase ) => {
    return async ( dispatch ) => {
        dispatch( addNewClase( clase ) );
    };
};

export const activeClase = ( clase ) => ({
    type: types.clases + types.getOne,
    payload: clase
});

export const cleanActiveClase = () => ({
    type: types.clases + types.cleanActive
});

export const addNewClase = ( clase ) => ({
    type: types.clases + types.add,
    payload: clase
});

export const startLoadingClases = () => {
    /*return async ( dispatch ) => {
    };*/
};

export const getClases = ( clases ) => ({
    type: types.clases + types.getAll,
    payload: clases
});

export const startUpdateClase = ( clase ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( refreshClase( clase ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshClase = ( clase ) => ({
    type: types.clases + types.update,
    payload: {
        clase
    }
});

export const startDeletingClase = ( id ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( deleteClase( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteClase = ( id ) => ({
    type: types.clases + types.remove,
    payload: id
});
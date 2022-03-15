import { clasesAdd, clasesDelete, clasesGetAll, clasesGetOne, clasesUpdate } from "../../../Services/restCallClases";
import { types } from "../../../Types";
import { claseFormatter } from "../../../Utils/claseModel";

export const startLoadingClases = () => {
    return async ( dispatch ) => {
        const clases = await clasesGetAll();
        dispatch( loadingClases( clases ) );
    };
};

const loadingClases = ( clases ) => ({
    type: types.clases + types.getAll,
    payload: clases
});

export const startSetActive = ( id ) => {
    return async ( dispatch ) => {
        const datosClase = await clasesGetOne( id );
        const clase = claseFormatter( datosClase );
        dispatch( activeClase( clase ) );
    }
}

export const activeClase = ( clase ) => ({
    type: types.clases + types.active,
    payload: clase
});

export const cleanActiveClase = () => ({
    type: types.clases + types.cleanActive
});

export const startNewClase = ( clase ) => {
    return async ( dispatch ) => {
        const result = await clasesAdd( clase );
        dispatch( addNewClase( result ) );
    };
};

export const addNewClase = ( clase ) => ({
    type: types.clases + types.add,
    payload: clase
});

export const startUpdateClase = ( clase ) => {
    return async ( dispatch ) => {
        const { id } = clase;
        const result = await clasesUpdate( id, clase );
        dispatch( refreshClase( result ) );
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
        await clasesDelete( id );
        dispatch( deleteClase( id ) );
    };
};

export const deleteClase = ( id ) => ({
    type: types.clases + types.remove,
    payload: id
});
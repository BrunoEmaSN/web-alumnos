/* eslint-disable no-useless-catch */
import { types } from "../../../Types";

export const startNewSancion = ( sancion ) => {
    return async ( dispatch ) => {
        dispatch( addNewSancion( sancion ) );
    };
};

export const activeSancion = ( sancion ) => ({
    type: types.sanciones + types.getOne,
    payload: sancion
});

export const cleanActiveSancion = () => ({
    type: types.sanciones + types.cleanActive
});

export const addNewSancion = ( sancion ) => ({
    type: types.sanciones + types.add,
    payload: sancion
});

export const startLoadingSanciones = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getSanciones = ( sanciones ) => ({
    type: types.sanciones + types.getAll,
    payload: sanciones
});

export const startUpdateSancion = ( sancion ) => {
    return async ( dispatch ) => {
        try{
            dispatch( refreshSancion( sancion ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshSancion = ( sancion ) => ({
    type: types.sanciones + types.update,
    payload: {
        sancion
    }
});

export const startDeletingSancion = ( id ) => {
    return async ( dispatch ) => {
        try{
            dispatch( deleteSancion( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteSancion = ( id ) => ({
    type: types.sanciones + types.remove,
    payload: id
});
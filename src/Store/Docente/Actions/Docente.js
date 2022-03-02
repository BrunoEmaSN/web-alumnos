/* eslint-disable no-useless-catch */
import { types } from "../../../Types";

export const startNewDocente = ( docente ) => {
    return async ( dispatch ) => {
        dispatch( addNewDocente( docente ) );
    };
};

export const activeDocente = ( docente ) => ({
    type: types.docentes + types.getOne,
    payload: docente
});

export const cleanActiveDocente = () => ({
    type: types.docentes + types.cleanActive
});

export const addNewDocente = ( docente ) => ({
    type: types.docentes + types.add,
    payload: docente
});

export const startLoadingDocentes = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getDocentes = ( docentes ) => ({
    type: types.docentes + types.getAll,
    payload: docentes
});

export const startUpdateDocente = ( docente ) => {
    return async ( dispatch ) => {
        try{
            dispatch( refreshDocente( docente ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshDocente = ( docente ) => ({
    type: types.docentes + types.update,
    payload: {
        docente
    }
});

export const startDeletingDocente = ( documento ) => {
    return async ( dispatch ) => {
        try{
            dispatch( deleteDocente( documento ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteDocente = ( documento ) => ({
    type: types.docentes + types.remove,
    payload: documento
});

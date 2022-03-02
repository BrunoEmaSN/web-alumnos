/* eslint-disable no-useless-catch */
import { types } from "../../../Types";

export const startNewTutor = ( tutor ) => {
    return async ( dispatch ) => {
        dispatch( addNewTutor( tutor ) );
    };
};

export const activeTutor = ( tutor ) => ({
    type: types.tutores + types.getOne,
    payload: tutor
});

export const cleanActiveTutor = () => ({
    type: types.tutores + types.cleanActive
});

export const addNewTutor = ( tutor ) => ({
    type: types.tutores + types.add,
    payload: tutor
});

export const startLoadingTutores = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getTutores = ( tutores ) => ({
    type: types.tutores + types.getAll,
    payload: tutores
});

export const startUpdateTutor = ( tutor ) => {
    return async ( dispatch ) => {
        try{
            if( !tutor.tienePareja ){
                tutor.pareja = {};
            }
            dispatch( refreshTutor( tutor ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshTutor = ( tutor ) => ({
    type: types.tutores + types.update,
    payload: {
        tutor
    }
});

export const startDeletingTutor = ( documento ) => {
    return async ( dispatch ) => {
        try{
            dispatch( deleteTutor( documento ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteTutor = ( documento ) => ({
    type: types.tutores + types.remove,
    payload: documento
});
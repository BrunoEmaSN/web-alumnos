/* eslint-disable no-useless-catch */
import { types } from "../../../Types";

export const startNewMesaExamen = ( mesaExamen ) => {
    return async ( dispatch ) => {
        dispatch( addNewMesaExamen( mesaExamen ) );
    };
};

export const activeMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.getOne,
    payload: mesaExamen
});

export const cleanActiveMesaExamen = () => ({
    type: types.mesasExamenes + types.cleanActive
});

export const addNewMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.add,
    payload: mesaExamen
});

export const startLoadingMesasExamenes = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getMesasExamenes = ( mesasExamenes ) => ({
    type: types.mesasExamenes + types.getAll,
    payload: mesasExamenes
});

export const startUpdateMesaExamen = ( mesaExamen ) => {
    return async ( dispatch ) => {
        try{
            dispatch( refreshMesaExamen( mesaExamen ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.update,
    payload: {
        mesaExamen
    }
});

export const startDeletingMesaExamen = ( id ) => {
    return async ( dispatch ) => {
        try{
            dispatch( deleteMesaExamen( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteMesaExamen = ( id ) => ({
    type: types.mesasExamenes + types.remove,
    payload: id
});

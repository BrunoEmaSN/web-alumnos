/* eslint-disable no-useless-catch */
import { types } from "../../../Types";

export const startNewMateria = ( materia ) => {
    return async ( dispatch ) => {
        dispatch( addNewMateria( materia ) );
    };
};

export const activeMateria = ( materia ) => ({
    type: types.materias + types.getOne,
    payload: materia
});

export const cleanActiveMateria = () => ({
    type: types.materias + types.cleanActive
});

export const addNewMateria = ( materia ) => ({
    type: types.materias + types.add,
    payload: materia
});

export const startLoadingMaterias = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getMaterias = ( materias ) => ({
    type: types.materias + types.getAll,
    payload: materias
});

export const startUpdateMateria = ( materia ) => {
    return async ( dispatch ) => {
        try{
            dispatch( refreshMateria( materia ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshMateria = ( materia ) => ({
    type: types.materias + types.update,
    payload: {
        materia
    }
});

export const startDeletingMateria = ( id ) => {
    return async ( dispatch ) => {
        try{
            dispatch( deleteMateria( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteMateria = ( id ) => ({
    type: types.materias + types.remove,
    payload: id
});

import {
    //alumnoAdd,
    alumnosLoad,
    alumnoUpdate,
    alumnoDelete
} from "../../../Context/Alumnos";
import { types } from "../../../Types";


export const startNewAlumno = ( alumno ) => {
    return async ( dispatch ) => {
        dispatch( addNewAlumno( alumno ) );
    };
};

export const activeAlumno = ( alumno ) => ({
    type: types.alumnosGetOne,
    payload: alumno
});

export const addNewAlumno = ( alumno ) => ({
    type: types.alumnosAdd,
    payload: alumno
});

export const startLoadingAlumnos = ( documento ) => {
    return async ( dispatch ) => {
        const alumnos = await alumnosLoad( documento );
        dispatch( setAlumnos( alumnos ) );
    };
};

export const setAlumnos = ( alumnos ) => ({
    type: types.alumnosGetAll,
    payload: alumnos
});

export const startUpdateAlumno = () => {
    return async ( dispatch, getState ) => {
        try{
            const alumno = getState().active;
            await alumnoUpdate( alumno );
            dispatch( refreshAlumno( alumno ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshAlumno = ( alumno ) => ({
    type: types.alumnosUpdate,
    payload: {
        alumno
    }
});

export const startDeletingAlumno = () => {
    return async ( dispatch, getState ) => {
        try{
            const { documento } = getState().active;
            await alumnoDelete( documento );
            dispatch( deleteAlumno( documento ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteAlumno = ( documento ) => ({
    type: types.alumnosRemove,
    payload: documento
});

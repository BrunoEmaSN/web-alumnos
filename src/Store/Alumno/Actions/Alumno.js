import { types } from "../../../Types";


export const startNewAlumno = ( alumno ) => {
    return async ( dispatch ) => {
        dispatch( addNewAlumno( alumno ) );
    };
};

export const activeAlumno = ( alumno ) => ({
    type: types.alumnos + types.getOne,
    payload: alumno
});

export const cleanActiveAlumno = () => ({
    type: types.alumnos + types.cleanActive
});

export const addNewAlumno = ( alumno ) => ({
    type: types.alumnos + types.add,
    payload: alumno
});

export const startLoadingAlumnos = () => {
    /*return async ( dispatch ) => {
        //dispatch( getAlumnos(  ) );
    };*/
};

export const getAlumnos = ( alumnos ) => ({
    type: types.alumnos + types.getAll,
    payload: alumnos
});

export const startUpdateAlumno = ( alumno ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( refreshAlumno( alumno ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshAlumno = ( alumno ) => ({
    type: types.alumnos + types.update,
    payload: {
        alumno
    }
});

export const startDeletingAlumno = ( documento ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( deleteAlumno( documento ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteAlumno = ( documento ) => ({
    type: types.alumnos + types.remove,
    payload: documento
});

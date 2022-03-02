import { types } from "../../../Types";

export const startNewCalificacion = ( calificacion ) => {
    return async ( dispatch ) => {
        dispatch( addNewCalificacion( calificacion ) );
    };
};

export const activeCalificacion = ( calificacion ) => ({
    type: types.calificaciones + types.getOne,
    payload: calificacion
});

export const cleanActiveCalificacion = () => ({
    type: types.calificaciones + types.cleanActive
});

export const addNewCalificacion = ( calificacion ) => ({
    type: types.calificaciones + types.add,
    payload: calificacion
});

export const startLoadingCalificaciones = () => {
    /*return async ( dispatch ) => {
    };*/
};

export const getCalificaciones = ( calificaciones ) => ({
    type: types.calificaciones + types.getAll,
    payload: calificaciones
});

export const startUpdateCalificacion = ( calificacion ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( refreshCalificacion( calificacion ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshCalificacion = ( calificacion ) => ({
    type: types.calificaciones + types.update,
    payload: {
        calificacion
    }
});

export const startDeletingCalificacion = ( id ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( deletecalificacion( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deletecalificacion = ( id ) => ({
    type: types.calificaciones + types.remove,
    payload: id
});

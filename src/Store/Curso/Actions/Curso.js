import { types } from "../../../Types";

export const startNewCurso = ( curso ) => {
    return async ( dispatch ) => {
        dispatch( addNewCurso( curso ) );
    };
};

export const activeCurso = ( curso ) => ({
    type: types.cursos + types.getOne,
    payload: curso
});

export const cleanActiveCurso = () => ({
    type: types.cursos + types.cleanActive
});

export const addNewCurso = ( curso ) => ({
    type: types.cursos + types.add,
    payload: curso
});

export const startLoadingCursos = () => {
    /*return async ( dispatch ) => {
    };*/
};

export const getCursos = ( cursos ) => ({
    type: types.cursos + types.getAll,
    payload: cursos
});

export const startUpdateCurso = ( curso ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( refreshCurso( curso ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshCurso = ( curso ) => ({
    type: types.cursos + types.update,
    payload: {
        curso
    }
});

export const startDeletingCurso = ( id ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( deleteCurso( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteCurso = ( id ) => ({
    type: types.cursos + types.remove,
    payload: id
});

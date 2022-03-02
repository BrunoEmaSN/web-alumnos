import { types } from "../../../Types";

export const startNewAula = ( aula ) => {
    return async ( dispatch ) => {
        dispatch( addNewAula( aula ) );
    };
};

export const activeAula = ( aula ) => ({
    type: types.aulas + types.getOne,
    payload: aula
});

export const cleanActiveAula = () => ({
    type: types.aulas + types.cleanActive
});

export const addNewAula = ( aula ) => ({
    type: types.aulas + types.add,
    payload: aula
});

export const startLoadingAulas = () => {
    /*return async ( dispatch ) => {
    };*/
};

export const getAulas = ( aulas ) => ({
    type: types.aulas + types.getAll,
    payload: aulas
});

export const startUpdateAula = ( aula ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( refreshAula( aula ) );
        }
        catch( e ) {
            throw e;
        }
    };
};

export const refreshAula = ( aula ) => ({
    type: types.aulas + types.update,
    payload: {
        aula
    }
});

export const startDeletingAula = ( id ) => {
    return async ( dispatch ) => {
        // eslint-disable-next-line no-useless-catch
        try{
            dispatch( deleteAula( id ) );
        }
        catch( e ){
            throw e;
        }
    };
};

export const deleteAula = ( id ) => ({
    type: types.aulas + types.remove,
    payload: id
});

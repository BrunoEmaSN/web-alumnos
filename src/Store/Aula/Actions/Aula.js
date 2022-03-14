import { aulasAdd, aulasDelete, aulasGetAll, aulasGetOne, aulasUpdate } from "../../../Services/restCallAulas";
import { types } from "../../../Types";

export const startLoadingAulas = () => {
    return async ( dispatch ) => {
        const aulas = await aulasGetAll();
        dispatch( loadingAulas( aulas ) );
    };
};

const loadingAulas = ( aulas ) => ({
    type: types.aulas + types.getAll,
    payload: aulas
});

export const startSetActive = ( id ) => {
    return async ( dispatch ) => {
        const aula = await aulasGetOne( id );
        dispatch( activeAula( aula ) );
    }
}

export const activeAula = ( aula ) => ({
    type: types.aulas + types.active,
    payload: aula
});

export const cleanActiveAula = () => ({
    type: types.aulas + types.cleanActive
});

export const startNewAula = ( aula ) => {
    return async ( dispatch ) => {
        const result = await aulasAdd( aula );

        dispatch( addNewAula({ id: result.last_id, ...aula }) );
    };
};

export const addNewAula = ( aula ) => ({
    type: types.aulas + types.add,
    payload: aula
});

export const startUpdateAula = ( aula ) => {
    return async ( dispatch ) => {
        const { id } = aula;
        await aulasUpdate( id, aula );
        dispatch( refreshAula( aula ) );
    };
};

export const refreshAula = ( aula ) => ({
    type: types.aulas + types.update,
    payload: aula
});

export const startDeletingAula = ( id ) => {
    return async ( dispatch ) => {
        await aulasDelete( id );
        dispatch( deleteAula( id ) );
    };
};

export const deleteAula = ( id ) => ({
    type: types.aulas + types.remove,
    payload: id
});

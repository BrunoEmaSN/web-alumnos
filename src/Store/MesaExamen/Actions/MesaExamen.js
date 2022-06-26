/* eslint-disable no-useless-catch */
import { mesasExamenesAdd, mesasExamenesDelete, mesasExamenesGetAll, mesasExamenesGetOne, mesasExamenesUpdate } from "../../../Services/restCallMesasExamenes";
import { types } from "../../../Types";

export const startLoadingMesasExamenes = () => {
    return async ( dispatch ) => {
        const mesasExamenes = await mesasExamenesGetAll();
        dispatch( loadingMesasExamenes( mesasExamenes ) );
    };
};

export const loadingMesasExamenes = ( mesasExamenes ) => ({
    type: types.mesasExamenes + types.getAll,
    payload: mesasExamenes
});

export const startSetActive = ( maestro ) => {
    return async ( dispatch ) => {
        const novedad = await mesasExamenesGetOne( maestro.id );
        const mesaExamen = { maestro, novedad };
        dispatch( activeMesaExamen( mesaExamen ) );
    }
}

export const activeMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.active,
    payload: mesaExamen
});

export const cleanActiveMesaExamen = () => ({
    type: types.mesasExamenes + types.cleanActive
});

export const startNewMesaExamen = ( mesaExamen ) => {
    return async ( dispatch ) => {
        const { last_id } = await mesasExamenesAdd( mesaExamen );
        dispatch( addNewMesaExamen( { id: last_id, ...mesaExamen.maestro } ) );
    };
};

export const addNewMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.add,
    payload: mesaExamen
});

export const startUpdateMesaExamen = ( mesaExamen ) => {
    return async ( dispatch ) => {
        const { id } = mesaExamen.maestro;
        await mesasExamenesUpdate( id, mesaExamen );
        dispatch( refreshMesaExamen( mesaExamen.maestro ) );
    };
};

export const refreshMesaExamen = ( mesaExamen ) => ({
    type: types.mesasExamenes + types.update,
    payload: mesaExamen
});

export const startDeletingMesaExamen = ( id ) => {
    return async ( dispatch ) => {
        await mesasExamenesDelete( id );
        dispatch( deleteMesaExamen( id ) );
    };
};

export const deleteMesaExamen = ( id ) => ({
    type: types.mesasExamenes + types.remove,
    payload: id
});

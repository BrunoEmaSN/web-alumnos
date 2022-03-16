import {
    calificacionesGetAll,
    calificacionesUpdate
} from "../../../Services/restCallCalificaciones";
import { types } from "../../../Types";

export const startLoadingCalificaciones = () => {
    return async ( dispatch ) => {
        const calificaciones = await calificacionesGetAll();
        dispatch( loadingCalificaciones( calificaciones ) );
    };
};

export const loadingCalificaciones = ( calificaciones ) => ({
    type: types.calificaciones + types.getAll,
    payload: calificaciones
});

export const activeCalificacion = ( calificacion ) => ({
    type: types.calificaciones + types.active,
    payload: calificacion
});

export const cleanActiveCalificacion = () => ({
    type: types.calificaciones + types.cleanActive
});

export const startUpdateCalificacion = ( calificacion ) => {
    return async ( dispatch ) => {
        const { id } = calificacion;
        await calificacionesUpdate( id, calificacion );
        dispatch( refreshCalificacion( calificacion ) );
    };
};

export const refreshCalificacion = ( calificacion ) => ({
    type: types.calificaciones + types.update,
    payload: calificacion
});

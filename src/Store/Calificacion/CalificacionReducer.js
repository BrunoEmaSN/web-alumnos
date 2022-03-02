import { types } from "../../Types";

const initialState = {
    calificaciones: [],
    active: {}
};

export const CalificacionReducer = ( state = initialState, actions ) => {
    switch (actions.type) {
        case types.calificaciones + types.getAll:
            return {
                ...state,
                calificaciones: [ { ...actions.payload } ]
            };
        
        case types.calificaciones + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.calificaciones + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.calificaciones + types.add:
            return {
                ...state,
                calificaciones: [ ...state.calificaciones, actions.payload ]
            };
        
        case types.calificaciones + types.update:
            return {
                ...state,
                calificaciones: state.calificaciones.map(
                    c => c.id === actions.payload.calificacion.id
                    ? actions.payload.calificacion
                    : c
                )
            };
        
        case types.calificaciones + types.remove:
            return {
                ...state,
                calificaciones: state.calificaciones.filter( c => c.id !== actions.payload )
            };
        default:
            return state;
    }
}
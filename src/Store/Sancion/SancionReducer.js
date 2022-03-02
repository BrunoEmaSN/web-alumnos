import { types } from "../../Types";

const initialState = {
    sanciones: [],
    active: {}
};

export const SancionReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.sanciones + types.getAll:
            return {
                ...state,
                sanciones: [ { ...actions.payload } ]
            };
        
        case types.sanciones + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.sanciones + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.sanciones + types.add:
            return {
                ...state,
                sanciones: [ ...state.sanciones, actions.payload ]
            };
        
        case types.sanciones + types.update:
            return {
                ...state,
                sanciones: state.sanciones.map(
                    s => s.documento === actions.payload.sancion.documento
                    ? actions.payload.sancion
                    : s
                )
            };
        
        case types.sanciones + types.remove:
            return {
                ...state,
                sanciones: state.sanciones.filter( s => s.id !== actions.payload )
            };

        default:
            return state;
    }
}
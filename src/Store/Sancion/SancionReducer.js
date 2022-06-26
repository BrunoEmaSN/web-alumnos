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
                sanciones: [ ...actions.payload ]
            };
        
        case types.sanciones + types.active:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.sanciones + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };
        
        case types.sanciones + types.update:
            return {
                ...state,
                sanciones: state.sanciones.map(
                    s => s.id === actions.payload.id
                    ? actions.payload
                    : s
                )
            };

        default:
            return state;
    }
}
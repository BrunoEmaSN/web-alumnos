import { types } from "../../Types";

const initialState = {
    clases: [],
    active: {}
};

export const ClaseReducer = ( state = initialState, actions ) => {
    switch (actions.type) {
        case types.clases + types.getAll:
            return {
                ...state,
                clases: [ { ...actions.payload } ]
            };
        
        case types.clases + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.clases + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.clases + types.add:
            return {
                ...state,
                clases: [ ...state.clases, actions.payload ]
            };
        
        case types.clases + types.update:
            return {
                ...state,
                clases: state.clases.map(
                    c => c.id === actions.payload.clase.id
                    ? actions.payload.clase
                    : c
                )
            };
        
        case types.clases + types.remove:
            return {
                ...state,
                clases: state.clases.filter( c => c.id !== actions.payload )
            };
        default:
            return state;
    }
}
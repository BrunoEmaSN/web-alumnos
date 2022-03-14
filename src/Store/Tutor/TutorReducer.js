import { types } from "../../Types";

const initialState = {
    tutores: [],
    active: {}
};

export const TutorReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.tutores + types.getAll:
            return {
                ...state,
                tutores: [ ...actions.payload ]
            };
        
        case types.tutores + types.active:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.tutores + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.tutores + types.add:
            return {
                ...state,
                tutores: [ ...state.tutores, actions.payload ]
            };
        
        case types.tutores + types.update:
            return {
                ...state,
                tutores: state.tutores.map(
                    t => t.documento === actions.payload.documento
                    ? actions.payload
                    : t
                )
            };
        
        case types.tutores + types.remove:
            return {
                ...state,
                tutores: state.tutores.filter( t => t.documento !== actions.payload )
            };

        default:
            return state;
    }
}
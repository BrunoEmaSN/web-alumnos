import { types } from "../../Types";

const initialState = {
    aulas: [],
    active: {}
};

export const AulaReducer = ( state = initialState, actions ) => {
    switch (actions.type) {
        case types.aulas + types.getAll:
            return {
                ...state,
                aulas: [ { ...actions.payload } ]
            };
        
        case types.aulas + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.aulas + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.aulas + types.add:
            return {
                ...state,
                aulas: [ ...state.aulas, actions.payload ]
            };
        
        case types.aulas + types.update:
            return {
                ...state,
                aulas: state.aulas.map(
                    a => a.id === actions.payload.aula.id
                    ? actions.payload.aula
                    : a
                )
            };
        
        case types.aulas + types.remove:
            return {
                ...state,
                aulas: state.aulas.filter( a => a.id !== actions.payload )
            };
        default:
            return state;
    }
}
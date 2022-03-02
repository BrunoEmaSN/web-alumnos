import { types } from "../../Types";

const initialState = {
    materias: [],
    active: {}
};

export const MateriaReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.materias + types.getAll:
            return {
                ...state,
                materias: [ { ...actions.payload } ]
            };
        
        case types.materias + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.materias + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.materias + types.add:
            return {
                ...state,
                materias: [ ...state.materias, actions.payload ]
            };
        
        case types.materias + types.update:
            return {
                ...state,
                materias: state.materias.map(
                    m => m.id === actions.payload.materia.id
                    ? actions.payload.materia
                    : m
                )
            };
        
        case types.materias + types.remove:
            return {
                ...state,
                materias: state.materias.filter( m => m.id !== actions.payload )
            };

        default:
            return state;
    }
}
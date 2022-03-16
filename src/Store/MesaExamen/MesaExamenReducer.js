import { types } from "../../Types";

const initialState = {
    mesasExamenes: [],
    active: {}
};

export const MesaExamenReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.mesasExamenes + types.getAll:
            return {
                ...state,
                mesasExamenes: [ ...actions.payload ]
            };
        
        case types.mesasExamenes + types.active:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.mesasExamenes + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.mesasExamenes + types.add:
            return {
                ...state,
                mesasExamenes: [ ...state.mesasExamenes, actions.payload ]
            };
        
        case types.mesasExamenes + types.update:
            return {
                ...state,
                mesasExamenes: state.mesasExamenes.map(
                    m => m.id === actions.payload.id
                    ? actions.payload
                    : m
                )
            };
        
        case types.mesasExamenes + types.remove:
            return {
                ...state,
                mesasExamenes: state.mesasExamenes.filter((mesaExamen) => mesaExamen.id !== actions.payload )
            };

        default:
            return state;
    }
}
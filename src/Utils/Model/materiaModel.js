export const materiaModel = {
    descripcion: '',
    regimen: '',
    planEstudio: '',
    estado: 1
};

export const materiaFormatter = ( materia ) => {
    return {
        id: materia.id,
        descripcion: materia.descripcion,
        planEstudio: materia.plan_estudio,
        regimen: materia.regimen
    };
}

export const regimenes = [
    'Anual',
    'Semestral',
    'Cuatrimestral',
    'Trimestral',
    'Bimestral'
]
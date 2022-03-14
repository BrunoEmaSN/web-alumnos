export const cursoModel = {
    nivel: '',
    turno: '',
    gradoAno: '',
    division: '',
    aula: ''
}

export const cursoFormatter = ( curso ) => {
    return {
        id: curso.id,
        nivel: curso.nivel,
        turno: curso.turno,
        gradoAno: curso.grado_ano,
        division: curso.division,
        aula: {
            id: curso.aula_id,
            descripcion: curso.aula_descripcion,
            capacidad: curso.aula_capacidad
        }
    };
}
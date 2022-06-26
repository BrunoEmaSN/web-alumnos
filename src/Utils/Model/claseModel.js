import moment from "moment";

export const claseModel = {
    dias: '',
    horarioInicio: '',
    horarioFin: '',
    docente: '',
    materia: '',
    periodo: '',
    curso: '',
    estado: true
};

export const claseFormatter = ( clase ) => {
    return {
        id: clase.id,
        dias: clase.dias,
        horarioInicio: moment(clase.horario_inicio, 'HH:mm:ss').format("hh:mm"),
        horarioFin: moment(clase.horario_fin, 'HH:mm:ss').format("hh:mm"),
        docente: clase.docente_id,
        materia: clase.materia_id,
        periodo: clase.periodo_id,
        curso: clase.curso_id,
        estado: clase.estado
    }
}
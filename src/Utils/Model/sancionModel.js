import moment from "moment";

export const sancionFormatter = ( sancion ) => {
    return {
        id: sancion.id,
        alumno: sancion.alumno_id,
        docente: sancion.docente_id,
        tipoSancion: sancion.tipo_sancion,
        descripcion: sancion.descripcion,
        fecha: moment(sancion.fecha).format("yyyy-MM-DD")
    };
}
export const tiposSanciones = [ 'Leve', 'Moderada', 'Grave' ];
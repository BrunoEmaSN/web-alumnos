import moment from "moment";

export const alumnoModel = {
    nombre: '',
    apellido: '',
    tipoDocumento: 'DNI',
    documento: '',
    fechaNacimiento: '',
    sexo: 'Masculino',
    lugarNacimiento: '',
    telefonoFijo: '',
    telefonoMovil: '',
    domicilio: '',
    numero: '',
    departamento: '',
    piso: '',
    fechaAgregado: moment().format('yyyy-MM-DD'),
    partidaNacimiento: false,
    fotocopiaDNI: false,
    fotocopiaCUIL: false,
    foto4x4: false,
    contrato: false,
    observaciones: '',
    cursoId: '',
    cursoNivel: '',
    condicion: '',
    materias: [],
    tutores: []
}

export const alumnoFormater = ( alumno, tutores, materias ) =>{
    return {
        nombre: alumno.nombre || '',
        apellido: alumno.apellido || '',
        tipoDocumento: alumno.tipo_documento || '',
        documento: alumno.documento || '',

        fechaNacimiento: moment(alumno.fecha_nacimiento)
            .format('yyyy-MM-DD') || '',
        
        sexo: alumno.sexo || '',
        lugarNacimiento: alumno.lugar_nacimiento || '',
        telefonoFijo: parseInt(alumno.telefono_fijo) || '',
        telefonoMovil: parseInt(alumno.telefono_movil) || '',
        domicilio: alumno.domicilio || '',
        numero: alumno.numero || '',
        departamento: alumno.departamento || '',
        piso: alumno.piso || '',
        
        fechaAgregado: moment(alumno.fecha_agregado).format('yyyy-MM-DD'),
        partidaNacimiento: alumno.partida_nacimiento ? true : false,
        fotocopiaDNI: alumno.fotocopia_dni ? true : false,
        fotocopiaCUIL: alumno.fotocopia_cuil ? true : false,
        foto4x4: alumno.foto_4x4 ? true : false,
        contrato: alumno.contrato ? true : false,
        observaciones: alumno.observaciones || '',
        cursoId: alumno.curso_id || '',
        cursoNivel: alumno.curso_nivel || '',
        condicion: alumno.condicion || '',

        tutores: tutores,
        materias: materias
    };
}
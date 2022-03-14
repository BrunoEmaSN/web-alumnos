import moment from "moment";

export const docenteModel = {
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
    cuit: '',
    titulo: '',
    sede: '',
    subencionado: false,
    contratado: false,
    monotributista: false,
    observaciones: '',
    materias: []
};

export const docenteFormatter = ( docente ) => {
    return {
        nombre: docente.nombre,
        apellido: docente.apellido,
        tipoDocumento: docente.tipo_documento,
        documento: docente.documento,
        fechaNacimiento: moment(docente.fecha_nacimiento)
            .format('yyyy-MM-DD') || '',
        sexo: docente.sexo,
        lugarNacimiento: docente.lugar_nacimiento,
        telefonoFijo: docente.telefono_fijo,
        telefonoMovil: docente.telefono_movil,
        domicilio: docente.domicilio,
        numero: docente.numero,
        departamento: docente.departamento,
        piso: docente.piso,

        fechaAgregado: moment(docente.fecha_agregado).format('yyyy-MM-DD'),
        cuit: docente.cuit,
        titulo: docente.titulo,
        sede: docente.sede,
        subencionado: docente.subencionado ? true : false,
        contratado: docente.contratado ? true : false,
        monotributista: docente.monotributista ? true : false,
        observaciones: docente.observaciones,
    }
}

export const Docente1 = {
    nombre: 'Jorge',
    apellido: 'Joestar',
    tipoDocumento: 'DNI',
    documento: '6',
    fechaNacimiento: '1820-09-10',
    sexo: 'Masculino',
    lugarNacimiento: 'Inglaterra',
    telefonoFijo: '165489',
    telefonoMovil: '156578',
    domicilio: 'Inglaterra',
    numero: '1',
    departamento: '',
    piso: '0',
    cuit: '2061',
    titulo: 'Profesor',
    sede: 'Londres',
    subencionado: false,
    contratado: true,
    monotributista: false,
    observaciones: 'nada',
    materias: [
        {
            id: 1,
            descripcion: 'matematica',
            estado: 'Titular'
        }
    ]
};

export const Docente2 = [{
    nombre: 'Jorge',
    apellido: 'Joestar',
    tipoDocumento: 'DNI',
    documento: '6',
    fechaNacimiento: '1820-09-10',
    sexo: 'Masculino',
    lugarNacimiento: 'Inglaterra',
    telefonoFijo: '165489',
    telefonoMovil: '156578',
    domicilio: 'Inglaterra',
    numero: '1',
    departamento: '',
    piso: '0',
    cuit: '2061',
    titulo: 'Profesor',
    sede: 'Londres',
    subencionado: false,
    contratado: true,
    monotributista: false,
    observaciones: 'nada',
    materias: [
        {
            id: 1,
            descripcion: 'matematica',
            estado: 'Titular'
        }
    ]
}];
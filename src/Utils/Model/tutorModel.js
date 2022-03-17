import moment from "moment"

export const tutorModel = {
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    fechaNacimiento: '',
    sexo: '',
    lugarNacimiento: '',
    telefonoFijo: '',
    telefonoMovil: '',
    domicilio: '',
    numero: '',
    departamento: '',
    piso: '',
    tienePareja: false,
    nivelAcademico: '',
    situacionAcademica: '',
    profesion: '',
    ocupacion: '',
    telefonoLaboral: '',
    pareja: {
        nombrePareja: '',
        apellidoPareja: '',
        dniPareja: '',
        telefonoFijoPareja: '',
        telefonoMovilPareja: ''
    }
}

export const tutorFormatter = ( tutor ) => {
    return {
        nombre: tutor.nombre,
        apellido: tutor.apellido,
        tipoDocumento: tutor.tipo_documento,
        documento: tutor.documento,
        fechaNacimiento: moment(tutor.fecha_nacimiento)
            .format('yyyy-MM-DD') || '',
        sexo: tutor.sexo,
        lugarNacimiento: tutor.lugar_nacimiento,
        telefonoFijo: tutor.telefono_fijo,
        telefonoMovil: tutor.telefono_movil,
        domicilio: tutor.domicilio,
        numero: tutor.numero,
        departamento: tutor.departamento,
        piso: tutor.piso,
        tienePareja: tutor.tiene_pareja ? true : false,
        nivelAcademico: tutor.nivel_academico,
        situacionAcademica: tutor.situacion_academica,
        profesion: tutor.profesion,
        ocupacion: tutor.ocupacion,
        telefonoLaboral: tutor.telefono_laboral,
        pareja: tutor.tiene_pareja
            ? {
                nombrePareja: tutor.pareja_nombre,
                apellidoPareja: tutor.pareja_apellido,
                dniPareja: tutor.pareja_dni,
                telefonoFijoPareja: tutor.pareja_telefono_fijo,
                telefonoMovilPareja: tutor.pareja_telefono_movil
            }
            : {
                nombrePareja: '',
                apellidoPareja: '',
                dniPareja: '',
                telefonoFijoPareja: '',
                telefonoMovilPareja: ''
            }
    }
}

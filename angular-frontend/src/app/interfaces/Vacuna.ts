import {Persona} from './Persona'

export interface Vacuna{
    _id?: string;
    name: string,
    descripcion: string,
    tecnologia: string,
    fecha: Date
    fiable: boolean
    personas: Persona['_id']
}
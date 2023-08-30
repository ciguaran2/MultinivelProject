import {z} from "zod";

export const createLeadSchema = z.object({
    
    cedula: z
    .string({
        required_error: "Cedula es requerido",
    })
    .min(6,{
        message: "Cedula debe tener al menos 6 caracteres",
    }),
    
    nombres: z.string({
        required_error: "Nombres es requerido",
    }),
    
    apellidos: z
    .string({
        required_error: "Apellidos es requerido",
    }),
    
    comunidad: z
    .string({
        required_error: "Comunidad es requerida",
    }),

    celular: z
    .string({
        required_error: "Celular es requerido",
    }),

    fullname: z
    .string({
        required_error: "Fullname es requerido",
    }),
})



export const updateLeadSchema = z.object({
    
    cedula: z
    .string({
        required_error: "Cedula es requerido",
    })
    .min(6,{
        message: "Cedula debe tener al menos 6 caracteres",
    }),
    
    nombres: z.string({
        required_error: "Nombres es requerido",
    }),
    
    apellidos: z
    .string({
        required_error: "Apellidos es requerido",
    }),
    
    comunidad: z
    .string({
        required_error: "Comunidad es requerida",
    }),

    celular: z
    .string({
        required_error: "Celular es requerido",
    }),

    fullname: z
    .string({
        required_error: "Fullname es requerido",
    }),
})

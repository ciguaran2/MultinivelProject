import {z} from "zod";

export const createArtisanSchema = z.object({
    
    cedula_lider: z
    .string({
        required_error: "Cedula del lider es requerido",
    })
    .min(6,{
        message: "Cedula debe tener al menos 6 caracteres",
    }),

    cedula_artesano: z
    .string({
        required_error: "Cedula del artesano es requerido",
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
})



export const updateArtisanSchema = z.object({
    
    cedula_lider: z
    .string({
        required_error: "Cedula del lider es requerido",
    })
    .min(6,{
        message: "Cedula debe tener al menos 6 caracteres",
    }),

    cedula_artesano: z
    .string({
        required_error: "Cedula del artesano es requerido",
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
})
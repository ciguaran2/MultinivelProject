import {z} from "zod";

export const createProductSchema = z.object({
    
    name: z.string({
        required_error: "name is required",
    }),
    
    description: z.string({
        required_error: "description must be a string",
    }),
    
    price: z
    .string({
        required_error: "Price is required",
    })
    .min(3,{
        message: "Price must be at least 3 characters",
    }),
    
    lenght: z
    .string({
        required_error: "lenght is required",
    })
    .min(1,{
        required_error: "lenght must be at least 1 number",
    }),

    height: z
    .string({
        required_error: "height is required",
    })
    .min(1,{
        message: "height must be at least 1 number",
    }),

    width: z
    .string({
        required_error: "width is required",
    })

    .min(1,{
        message: "width must be at least 1 number",
    }),
})


export const updateProductSchema = z.object({
    
    name: z.string({
        required_error: "name is required",
    }),
    
    description: z.string({
        required_error: "description must be a string",
    }),
    
    price: z
    .string({
        required_error: "Price is required",
    })
    .min(3,{
        message: "Price must be at least 3 characters",
    }),
    
    lenght: z
    .string({
        required_error: "lenght is required",
    })
    .min(1,{
        required_error: "lenght must be at least 1 number",
    }),

    height: z
    .string({
        required_error: "height is required",
    })
    .min(1,{
        message: "height must be at least 1 number",
    }),

    width: z
    .string({
        required_error: "width is required",
    })

    .min(1,{
        message: "width must be at least 1 number",
    }),
})
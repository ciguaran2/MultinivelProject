import Artisan from '../models/artisan.model.js'

export const getArtisans = async (req, res ) => {
    try {
        const artisans = await Artisan.find()
        res.json(artisans)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"})
    }
}

export const createArtisan = async (req, res ) => {
    try {
        const {cedula_lider, cedula_artesano, nombres, apellidos, comunidad, celular} = req.body

        const newArtisan = new Artisan({
            cedula_lider, cedula_artesano, nombres, apellidos, comunidad, celular
        })
        const saveArtisan = await newArtisan.save()
        res.json(saveArtisan)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"})
    }
}

export const getArtisan = async (req, res ) => {
    try {
        const artisan = await Artisan.findById(req.params.id)
        if(!artisan) return res.status(404).json({message: "Artisan not found"})
        res.json(artisan)
    } catch (error) {
        return res.status(404).json({message: "Artisan not found"})
    }
}

export const deleteArtisan = async (req, res ) => {
    try {
        const artisan = await Artisan.findByIdAndDelete(req.params.id)
        if(!artisan) return res.status(404).json({message: "Artisan not found"})
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({message: "Artisan not found"})        
    }
}

export const updateArtisan = async (req, res ) => {
    try {
        const artisan = await Artisan.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        if(!artisan) return res.status(404).json({message: "Artisan not found"})
        res.json(artisan)
    } catch (error) {
        return res.status(404).json({message: "Artisan not found"})        
    }
}
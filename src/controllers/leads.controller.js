import Lead from '../models/lead.model.js'

export const getLeads = async (req, res ) => {
    try {
        const leads = await Lead.find()
        res.json(leads)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"})
    }
}

export const createLead = async (req, res ) => {
    try {
        const {cedula, nombres, apellidos, comunidad, celular, fullname} = req.body

        const newLead = new Lead({
            cedula, nombres, apellidos, comunidad, celular, fullname
        })
        const saveLead = await newLead.save()
        res.json(saveLead)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong"})
    }
}

export const getLead = async (req, res ) => {
    try {
        const lead = await Lead.findById(req.params.id)
        if(!lead) return res.status(404).json({message: "Lead not found"})
        res.json(lead)
    } catch (error) {
        return res.status(404).json({message: "Lead not found"})
    }
}

export const deleteLead = async (req, res ) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id)
        if(!lead) return res.status(404).json({message: "Lead not found"})
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({message: "Lead not found"})        
    }
}

export const updateLead = async (req, res ) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        if(!lead) return res.status(404).json({message: "Lead not found"})
        res.json(lead)
    } catch (error) {
        return res.status(404).json({message: "Lead not found"})        
    }
}

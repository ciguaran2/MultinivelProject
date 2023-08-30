import axios from "./axios";

export const getLeadsRequest = () => axios.get('/leads');

export const getLeadRequest = (id) => axios.get(`/leads/${id}`);

export const createLeadRequest = (lead) => axios.post('/leads', lead);

export const updateLeadRequest = (id, lead) => axios.put(`/leads/${id}`, lead);

export const deleteLeadRequest = (id) => axios.delete(`/leads/${id}`);

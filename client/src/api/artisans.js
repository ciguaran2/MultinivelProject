import axios from "./axios";

export const getArtisansRequest = () => axios.get('/artisans');

export const getArtisanRequest = (id) => axios.get(`/artisans/${id}`);

export const createArtisanRequest = (artisan) => axios.post('/artisans', artisan);

export const updateArtisanRequest = (id, artisan) => axios.put(`/artisans/${id}`, artisan);

export const deleteArtisanRequest = (id) => axios.delete(`/artisans/${id}`);
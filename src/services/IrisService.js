import axios from "axios";
import { GET_IRISES, GET_IRISES_BY_ID, GET_ALL_SPECIES, GET_IRISES_BY_SPECIES } from "../components/definitions";

const API_URL = 'http://localhost:8080';

export const getIrisById = (id) => async dispatch => {
	const res = await axios.get(`${API_URL}/irises/${id}`);
	dispatch({
		type: GET_IRISES_BY_ID,
		payload: res.data
	});
}

export const getAllIris = () => async dispatch => {
	const res = await axios.get(`${API_URL}/irises`);
	dispatch({
		type: GET_IRISES,
		payload: res.data
	});
}

export const getAllSpecies = () => async dispatch => {
	const res = await axios.get(`${API_URL}/irises/species`);
	dispatch({
		type: GET_ALL_SPECIES,
		payload: res.data
	});
}

export const getIrisBySpecies = (species) => async dispatch => {
	const res = await axios.get(`${API_URL}/irises/species/${species}`);
	dispatch({
		type: GET_IRISES_BY_SPECIES,
		payload: res.data
	});
}
import axios from "axios";

const url = 'http://localhost:1234';

const exerciseService = {
    createExercise: (exercise) => {
        return axios.post(`${url}/exercises`, exercise)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },

    getExercises: () => {
        return axios.get(`${url}/exercises`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
};

export default exerciseService;
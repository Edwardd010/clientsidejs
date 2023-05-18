import axios from "axios";

const exerciseService = {
    createExercise: (exercise) => {

        return axios.post('http://localhost:1234/exercises', exercise)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },

    getExercises: () => {

        return axios.get('http://localhost:1234/exercises')
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },

    deleteExercise: (index) => {
        return axios.delete(`http://localhost:1234/exercises/${index}`)
            .then(response => {
                window.location.reload();
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
};

export default exerciseService;
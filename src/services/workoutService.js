import axios from "axios";

const workoutService = {
    createWorkout: (workout) => {

        return axios.post('http://localhost:1234/workouts', workout)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },

    getWorkouts: () => {

        return axios.get('http://localhost:1234/workouts')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
}

export default workoutService;
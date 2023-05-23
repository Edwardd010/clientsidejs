import axios from "axios";

const userService = {
    getUser: () => {
        return axios.get('http://localhost:1234/users/1')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            })
    }
}

export default userService;
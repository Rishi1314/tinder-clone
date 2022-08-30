import axios from "axios";

const instance=axios.create({
    baseURL:"https://tinder-backendbyrishi.herokuapp.com/"
})

export default instance;
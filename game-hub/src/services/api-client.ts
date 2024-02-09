import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bd6ef61ff56743bba857dac9aa92ea35"
    }
});
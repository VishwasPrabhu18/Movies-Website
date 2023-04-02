// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = import.meta.env.VITE_MOVIX_API_KEY;

// export const fetchDataFromAPI = (url) => {
//     return result(url);
// }

// async function result(url) {
//     try {
//         const {data} = await axios.get(BASE_URL + url + "?api_key=" + API_KEY);
//         return data;
//     } catch (error) {
//         console.log("Error is : " +error);
//         return error;
//     }
// }
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
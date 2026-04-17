import axios from "axios";

const snapiAPI: string = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroAPI: string = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"
const nasaAPI: string = "https://api.nasa.gov/planetary/apod"
const webbAPI: string = "https://api.jwstapi.com/all/type/jpg"
const spacexAPI: string = "https://api.spacexdata.com/v3/"

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
});

export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI,
});

export const nasaCustomFetch = axios.create({
    baseURL: nasaAPI,
    params: {api_key: import.meta.env.VITE_API_KEY_NASA},
});

export const webbCustomFetch = axios.create({
    baseURL: webbAPI,
    headers: {"X-API-KEY": import.meta.env.VITE_API_KEY_JWST},
})

export const spacexCustomFetch = axios.create({
    baseURL: spacexAPI,
});
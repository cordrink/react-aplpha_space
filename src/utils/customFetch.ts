import axios from "axios";

const snapiAPI : string = "https://api.spaceflightnewsapi.net/v4/articles/"

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
})
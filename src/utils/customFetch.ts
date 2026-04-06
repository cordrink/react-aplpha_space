import axios from "axios";

const snapiAPI: string = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroAPI: string = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
});

export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI,
})
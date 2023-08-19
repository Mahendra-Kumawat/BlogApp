import axios from "axios";
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export async function getDataFromApi(url) {
    let response = await axios.get(`${baseUrl}?page=${url}`);
    return response;
}

import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

    const params = {
        key: "42789020-c2dc414543595960212044fc8",
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page: currentPage,
    };

export async function getData(query, page) {
    try {
        const resp = await axios.get('', { params: params });
        return resp;
    } catch (error) {
        console.error(error);
    }
}
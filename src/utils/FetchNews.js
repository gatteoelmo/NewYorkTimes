import axios from "axios";

const apiKey = String(import.meta.env.VITE_API_KEY);

export const fetchTopNewsByName = async ({section}) => {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
    return response.data.results;
};

export const fetchTopNews = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${apiKey}`);
    return response.data.results;
}

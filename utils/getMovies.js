import axios from 'axios';


export default async function getMovies(title) {

    const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/find',
        params: {q: title},
        headers: {
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e54b8aeaf8msh35fa7620e9f6f67p1289dajsn91dc5d3f3afc'
        }
    };

    try {
        const response = await axios.request(options);
        if (response.status === 200) {
            const data = response.data;
            return data;
        }
    } catch (error) {
        console.error(error);
    }    
}
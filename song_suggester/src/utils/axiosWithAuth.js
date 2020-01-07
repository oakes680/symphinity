import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`
    
    return axios.create({
        baseUrl: '  https://spotify-song-suggester-be.herokuapp.com/api/auth',
        headers: {
            "Authorization" : token
        }
    })

}
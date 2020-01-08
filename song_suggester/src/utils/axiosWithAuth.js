import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`
    
    return axios.create({
<<<<<<< HEAD
        baseUrl: '  https://spotify-song-suggester-be.herokuapp.com/api/auth',
=======
        baseUrl: ' https://spotify-song-suggester-be.herokuapp.com/api/auth/',
>>>>>>> testing
        headers: {
            "Authorization" : token
        }
    })

}
import axios from 'axios';

export const fetchVideos = () => dispatch => {
    dispatch({type: "initial"})
    axios.get('https://www.scorebat.com/video-api/v1/')
    .then(res => {
        console.log(res.data)
        dispatch({type: "Success", payload: res.data})
    })
    .catch(err => dispatch({type:"Failure", payload: err}))
}


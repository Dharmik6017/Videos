import axios from "axios";


const KEY='AIzaSyCL0z79Kk-PzbbFAzq-s3V4y-LHq3Yllo4'

export default axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

// youtube.get()
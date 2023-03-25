import axios from 'axios';
import {BASE_URL,clefApi} from '../config.js'

export class TVShowAPI {
    static async fetchPopulars(){
        try{
        const response = await axios.get(`${BASE_URL}tv/popular?api_key=${clefApi}&language=fr-fr`)
            return response.data.results;
        } catch (error) {
           alert('Pas de série populaire')
        }
    }
    static async fetchRecommendation(tvShowID){
        const response = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations?api_key=${clefApi}&language=fr-fr`)
            return response.data.results;
    }
    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/tv?api_key=${clefApi}&query=${title}&language=fr-fr`)
            return response.data.results;
    }
    
}


// export class TVShowAPI {
//     static async fetchPopulars(){
//        await axios.get(`${BASE_URL}tv/popular?api_key=${clefApi}&language=fr-fr`).then(result =>{
//            return result.data.results;
//          })
//        }
   
// }

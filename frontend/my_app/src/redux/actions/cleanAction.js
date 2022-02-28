import {GET_USERS, USERS_ERROR,GET_TAMIR,GET_TADILAT} from '../reducers/type'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:5000/elma/category/gettemizlik`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
export const getTamir = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:5000/elma/category/gettamir`)
        dispatch( {
            type: GET_TAMIR,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
export const getTadilat = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:5000/elma/category/gettadilat`)
        dispatch( {
            type: GET_TADILAT,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
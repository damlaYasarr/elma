import { GET_TAMIR  } from '../reducers/type'

const initialState = {
    tamirs: [],
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_TAMIR:
            return {
                ...state,
                tamirs: action.payload,
                loading: false

            }
       
        default: return state
    }

}
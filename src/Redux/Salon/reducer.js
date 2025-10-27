import { FETCH_SALON_REQUEST, FETCH_SALON_SUCCESS, FETCH_SALON_FAILURE, FETCH_SALON_BY_ID_REQUEST, FETCH_SALON_BY_ID_SUCCESS, FETCH_SALON_BY_ID_FAILURE, FETCH_SALON_BY_OWNER_REQUEST, FETCH_SALON_BY_OWNER_SUCCESS, FETCH_SALON_BY_OWNER_FAILURE, CREATE_SALON_REQUEST, CREATE_SALON_SUCCESS, CREATE_SALON_FAILURE, UPDATE_SALON_REQUEST, UPDATE_SALON_SUCCESS, UPDATE_SALON_FAILURE, SEARCH_SALON_REQUEST, SEARCH_SALON_SUCCESS, SEARCH_SALON_FAILURE } from "./actionTypes";


const initialState={
    salons:[],
    salon:null,
    searchSalons:[],
    loading:false,
    error:null,


}

export const salonReducer=(state=initialState , action)=>{

    switch(action.type){
        case FETCH_SALON_REQUEST:
        case FETCH_SALON_BY_ID_REQUEST:
        case FETCH_SALON_BY_OWNER_REQUEST:
        case CREATE_SALON_REQUEST:
        case UPDATE_SALON_REQUEST:
        case SEARCH_SALON_REQUEST:

            return {
                ...state,
                loading:true,
                
            }


        case FETCH_SALON_SUCCESS:
            return {
                ...state,
                loading:false,
                salons:action.payload,
            }
        case FETCH_SALON_BY_ID_SUCCESS:
            return {
                ...state,
                loading:false,
                salon:action.payload,
            }
        case FETCH_SALON_BY_OWNER_SUCCESS:
            return {
                ...state,
                loading:false,
                salons:action.payload,
            }
        case UPDATE_SALON_SUCCESS:
            return {
                ...state,
                loading:false,
                salon:action.payload,
            }
        case CREATE_SALON_SUCCESS:
            return {
                ...state,
                loading:false,
                salons:action.payload,
            }
        case SEARCH_SALON_SUCCESS:
            return {
                ...state,
                loading:false,
                searchSalons:action.payload,
            }
        

        case FETCH_SALON_FAILURE:
        case FETCH_SALON_BY_ID_FAILURE:
        case FETCH_SALON_BY_OWNER_FAILURE:
        case CREATE_SALON_FAILURE:
        case UPDATE_SALON_FAILURE:
        case SEARCH_SALON_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}
import {
    FETCH_SUMMONER,
    FETCH_SUMMONER_ERROR,
    FETCH_SUMMONER_SUCCEESS,
    FETCH_MATCH,
    FETCH_MATCH_SUCCESS,
    FETCH_MATCH_ERROR,
    FETCH_MATCH_DETAILS,
    FETCH_MATCH_DETAILS_SUCCESS,
    FETCH_MATCH_DETAILS_ERROR,
    REMOVE_MATCH_DETAILS,
    CLEAN_UP,
    FETCH_SUMMONER_DETAILS,
    FETCH_SUMMONER_DETAILS_ERROR,
    FETCH_SUMMONER_DETAILS_SUCCEESS,
    FETCH_TOP_SUMMONER,
    FETCH_TOP_SUMMONER_SUCCEESS,
    FETCH_TOP_SUMMONER_ERROR
} from '../actions';
const initialState = {   
    summoner: {}, 
    summonerDetails: [],
    matches: [],
    topSummoner: {},
    matchDetails: [],
    loading: false,   
    error: '',
    matchLoading: false,
    matchDetailsLoading: false,
    summonerDetailsLoading: false,
    topSummonerLoading: false,
};
export default function reduxSagaReducer(state = initialState, action) {   
    switch (action.type) {       
        case FETCH_SUMMONER: {       
            return {
                ...state,               
                loading: true,               
                error:''           
            };       
        }       
        case FETCH_SUMMONER_SUCCEESS: {       
            return {               
                ...state,               
                summoner: action.data,               
                loading: false        
            }       
        }       
        case FETCH_SUMMONER_ERROR: { 
            return {               
                ...state,               
                loading: false,               
                error: action.error           
            };       
        }
        case FETCH_SUMMONER_DETAILS: {       
            return {
                ...state,               
                summonerDetailsloading: true,               
                error:''           
            };       
        }       
        case FETCH_SUMMONER_DETAILS_SUCCEESS: {       
            return {               
                ...state,               
                summonerDetails: action.data,               
                summonerDetailsloading: false, 
            }       
        }       
        case FETCH_SUMMONER_DETAILS_ERROR: { 
            return {               
                ...state,               
                summonerDetailsloading: false,               
                error: action.error           
            };       
        }
        case FETCH_TOP_SUMMONER: {       
            return {
                ...state,               
                topSummonerLoading: true,               
                error:''           
            };       
        }       
        case FETCH_TOP_SUMMONER_SUCCEESS: {    
            return {               
                ...state,               
                topSummoner: action.data,               
                topSummonerLoading: false, 
            }       
        }       
        case FETCH_TOP_SUMMONER_ERROR: { 
            return {               
                ...state,               
                loading: false,               
                summonerDetailsLoading: action.error           
            };       
        }
        case FETCH_MATCH: {       
            return {
                ...state,               
                matchLoading: true,             
            };       
        }       
        case FETCH_MATCH_SUCCESS: {      
            return {               
                ...state,               
                matches: action.data,               
                matchLoading: false,
                isCleanedUp: false,           
            }       
        }       
        case FETCH_MATCH_ERROR: { 
            return {               
                ...state,               
                matchLoading: false,               
            };       
        }          
        case FETCH_MATCH_DETAILS: {       
            return {
                ...state,               
                matchDetailsLoading: true,             
            };       
        }       
        case FETCH_MATCH_DETAILS_SUCCESS: {      
            var details = [...state.matchDetails];
            var index = null;
            index = details.map((val,index)=>{
                if(val.gameId === action.data.gameId){
                    return index
                }else return -1
            })
            if(index[0] === -1 || index[0] === undefined){
                details.push(action.data)
             
            }else{
                  details.splice(index,1)
            }
            
            return {
                   
                ...state,               
                matchDetails: details,               
                matchDetailsLoading: false,
            }       
        }       
        case FETCH_MATCH_DETAILS_ERROR: { 
            return {               
                ...state,               
                matchDetailsLoading: false,               
               
            };       
        }
        case REMOVE_MATCH_DETAILS: { 
            var details = [...state.matchDetails];
            var index = null;
            console.log(action)
            index = details.map((val,index)=>{
                if(val.gameId === action.data){
                    return index
                }else return -1
            })
            details.splice(index,1)
            return {               
                ...state,               
                matchDetails: details,               
               
            };       
        }
        case CLEAN_UP: { 
            return {               
                ...state,               
                matchDetails: [],
                summoner: {},
                matches: [],    
                summonerDetails: [],       
                topSummoner: {}
            };       
        }                   
        default: {           
            return state;       
        }   
    }
}

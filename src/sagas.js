import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';
import {
    FETCH_MATCH_DETAILS,
    FETCH_MATCH_DETAILS_SUCCESS,
    FETCH_MATCH_DETAILS_ERROR,
    FETCH_SUMMONER_DETAILS_SUCCEESS,
    FETCH_SUMMONER_DETAILS_ERROR,
    FETCH_SUMMONER_DETAILS,
    FETCH_MATCH,
    FETCH_MATCH_SUCCESS,
    FETCH_MATCH_ERROR,
} from './actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
async function fetchAsyncMatchDetails(matchId) {
    const response = await axios.get(`http://127.0.0.1:8081/match/${matchId}`)
    if (response.status === 200) {return await response.data;   }


    throw new Error("Unexpected error!!!");}

    function* fetchMatchDetails({payload}) {
        try {       
            const details = yield fetchAsyncMatchDetails(payload);
            yield put({type: FETCH_MATCH_DETAILS_SUCCESS, data: details});   
        } catch (e) {       
            yield put({type: FETCH_MATCH_DETAILS_ERROR, error: e.message});   
        }
    }

    async function fetchAsyncSummonerDetails(userName) { 
        const response = await axios.get(`http://127.0.0.1:8081/summoner/${userName}`);
        
        if (response.status === 200) {return await response.data; }
    
        throw new Error("Unexpected error!!!");}
    
    function* fetchSummonerDetails({payload}) {
        try {       
            const summoner = yield fetchAsyncSummonerDetails(payload);
            yield put({type: FETCH_SUMMONER_DETAILS_SUCCEESS, data: summoner});   
        } catch (e) {       
            yield put({type: FETCH_SUMMONER_DETAILS_ERROR, error: e.message});   
        }
    }

    async function fetchAsyncMatch(summonerName) { 
        const response = await axios.get(`http://127.0.0.1:8081/matches/${summonerName}`);
        
        if (response.status === 200) {return await response.data;   }
    
    
        throw new Error("Unexpected error!!!");}
    
    function* fetchMatch({payload}) {
        try {       
            const matches = yield fetchAsyncMatch(payload);
            yield put({type: FETCH_MATCH_SUCCESS, data: matches});   
        } catch (e) {       
            yield put({type: FETCH_MATCH_ERROR, error: e.message});   
        }
    }




/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* rootSaga() {
  yield all([
      takeEvery(FETCH_MATCH_DETAILS, fetchMatchDetails),
      takeEvery(FETCH_SUMMONER_DETAILS, fetchSummonerDetails),
      takeEvery(FETCH_MATCH, fetchMatch)
  ]);
}


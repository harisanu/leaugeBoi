import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import detailsReducer from './Details';


export default combineReducers({
    form: formReducer,
    details: detailsReducer,
});
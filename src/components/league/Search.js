import React, { useState } from "react";
import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { FETCH_SUMMONER_DETAILS, FETCH_MATCH, CLEAN_UP} from "../../actions";
import styles from './search.module.css';
const Search = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const summonerDetails = useSelector(state => state.details.summonerDetails);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type:FETCH_SUMMONER_DETAILS,
      payload: userInput,
   });
   dispatch({
    type:FETCH_MATCH,
    payload: userInput,
   })
   
  };

  

  const onChange = e => {
    setUserInput(e.target.value);
  };

  
  return (
    <div className={styles.container}>
    <div className="card card-body mb-4 p4">
      <h1 className="display-4 text-center">
        <i className="fa fa-search">Search for a Summoner</i>
      </h1>
      

      <p className="lead text-center">Get the latest match details </p>
      <form onSubmit={onSubmit}>
        <div className="form-group">

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Summonername"
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Search Summoner 
        </button>
      </form>
    </div>
    </div>
  );
};

export default React.memo(Search);



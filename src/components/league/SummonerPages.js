import React from 'react'
import SummonerPage from './SummonerPage'
import { useSelector } from 'react-redux'
function SummonerPages () {
    const summonerDetails = useSelector(state => state.details.summonerDetails);
    console.log("Summoner Details: ", summonerDetails);
    return (
<div>
        {summonerDetails.map(result => (
                <SummonerPage result={result} />
            ))}
</div>
            
            
    )
}
export default React.memo(SummonerPages)
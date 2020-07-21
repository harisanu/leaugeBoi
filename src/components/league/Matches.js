import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Match from '../league/Match'

class Matches extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { match_list, heading } = value;
                    if (match_list === undefined || match_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {match_list.map(item =>(
                                        <Match key={item.gameId} match={item}/>
                                    ))}
                                </div>
                            </React.Fragment>

                        );


                    }
                }}
            </Consumer>
        )
    }
}

export default Matches;
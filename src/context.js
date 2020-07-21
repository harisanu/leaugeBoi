import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

export class Provider extends Component {

    state = {
        match_list: [],
        heading: 'Match list'
    };
    componentDidMount(){
        axios.get(`http://127.0.0.1:8081/matches/SalatblandingLux`)
            .then(res => {
                this.setState({match_list: res.data.matches});  
            })
            .catch(err=>console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
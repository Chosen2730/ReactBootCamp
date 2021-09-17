import React, {Component} from 'react';
import CardList from './cardlist';
import {robots} from './robots';
import SearchBox from './searchbox';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            Searchfield: ""
        }
    }
    
    render() {
        return(
            <>
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox/>
                <CardList robots={this.state.robots}/>
            </div>
            </>
        );
    }
   
};

export default App;
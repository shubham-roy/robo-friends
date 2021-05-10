import React from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList';
import { robots } from './robots'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            robotsList: robots
        }
    }

    onSearchCahnge = (event) => {
        this.setState({searchValue: event.target.value});
    };

    render() {
        const filteredRobots = this.state.robotsList.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className="f-6">Robo-Friends</h1>
                <SearchBox searchChange={this.onSearchCahnge}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
};

export default App;
import React from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList';
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            robotsList: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => {
                return response.json();
            }
        ).then(
            (users) => {
                this.setState({robotsList: users});
            }
        )
        console.log("mount");
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
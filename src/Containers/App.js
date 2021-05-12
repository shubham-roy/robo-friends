import React from 'react';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll'
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
    }

    onSearchCahnge = (event) => {
        this.setState({searchValue: event.target.value});
    };

    render() {
        const {searchValue, robotsList} = this.state;
        const filteredRobots = robotsList.filter((robot) => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className="f-6">Robo-Friends</h1>
                <SearchBox searchChange={this.onSearchCahnge}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
};

export default App;
import React, {Component} from 'react';
import {userService} from "./services/userService";

class App extends Component {
    render() {
        userService.getUserInfo();
        return (
            <div></div>
        );
    }
}

export default App;

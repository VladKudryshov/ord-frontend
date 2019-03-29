import {Component} from "react";
import React from "react";
import {userService} from "../../services/userService";

class LoginComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const {login, password} = this.state;

        // stop here if form is invalid
        if (!(login && password)) {
            return;
        }

        userService.login(login, password)

        alert("da")
    }

    render() {
        const {login, password} = this.state;
        return <div>
            <form className="form login" onSubmit={this.handleSubmit}>
                <input type="text" name="login" className="input-100" placeholder="Login" value={login}
                       onChange={this.handleChange} autoComplete="true"/>
                <input type="password" className="input-100" placeholder="Password" name="password" value={password}
                       onChange={this.handleChange} autoComplete="true"/>
                <div>
                    <button className="btn sign-in">Sign in</button>
                </div>
            </form>
        </div>
    }
}

export default LoginComponent
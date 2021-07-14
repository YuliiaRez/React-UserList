import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginValue: '',
            passValue: '',
        };
    };
    /*handleLoginChange = ({ target: { value } }) => {
        this.setState({ loginValue: value });
    };
    handlePassChange = ({ target: { value } }) => {
        this.setState({ passValue: value });
    };*/
    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    submitHandler = e => {
        e.preventDefault();
    };
    render() {
        const { loginValue, passValue } = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    login
                    <input type="text" placeholder='login'
                        name='loginValue'
                        value={loginValue}
                        onChange={this.handleChange} />
                </label>
                <label > Password
                    <input type="password" name="passValue" placeholder='password' value={passValue}
                        onChange={this.handleChange} />
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        )
    }
}
export default LoginForm;

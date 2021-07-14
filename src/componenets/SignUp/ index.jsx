import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUp.module.css'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameValue: '',
            passValue: '',
            emailValue: '',
            isNameValid: false,
        };
    };
    handleNameChange = ({ target: { value } }) => {
        this.setState({
            nameValue: value, isNameValid: /^\S+$/.test(value),
        });
    };
    handleEmailChange = ({ target: { value } }) => {
        this.setState({
            emailValue: value, isEmailValid: /^\S+$/.test(value),
        });
    };
    handlePassChange = ({ target: { value } }) => {
        this.setState({ passValue: value });
    };

    submitHandler = e => {
        e.preventDefault();
    };
    render() {
        const { nameValue, passValue, emailValue, isNameValid } = this.state;
        const nameClassName = classNames(styles.input, {
            [isNameValid ? styles.valid : styles.invalid]: nameValue,
        });
        return (
            <form className={styles.container} onSubmit={this.submitHandler}>
                <label>
                    Name
                    <input
                        className={nameClassName}
                        type="text" placeholder='name'
                        name='nameValue'
                        value={nameValue}
                        onChange={this.handleNameChange} />
                </label>
                <label>
                    Email
                    <input
                        className={styles.input}
                        type="email" placeholder='email'
                        name='emailValue'
                        value={emailValue}
                        onChange={this.handleEmailChange} />
                </label>
                <label className={styles.InputLabel}> Enter
                    <input
                        className={styles.input}
                        type="password" name="passValue" placeholder='password' value={passValue}
                        onChange={this.handlePassChange} />
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        )
    }
}
export default SignUp;

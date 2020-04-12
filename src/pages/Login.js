import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin, signinWithGoogle, signinWithGithub } from '../helpers/auth';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signinWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
            await signinWithGithub();
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <h1>Entre no <Link to="/">Rataum Chat Bot</Link></h1>
                    <p>Preencha os campos abaixo para logar em sua conta.</p>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div>
                        {this.state.error ? (<p>{this.state.error}</p>) : null}
                        <button type="submit">Logar</button>
                    </div>
                    <p>Ou entre através das opções abaixo:</p>
                    <button onClick={this.googleSignIn} type="button">Google</button>
                    <button onClick={this.githubSignIn} type="button">Github</button>
                    <hr/>
                    <p>Não possui uma conta? <Link to="/signup">Cadastre-se</Link></p>
                </form>
            </div>
        )
    }
}
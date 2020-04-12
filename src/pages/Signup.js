import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signinWithGoogle, signinWithGithub } from '../helpers/auth';

export default class SignUp extends Component {

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
            await signup(this.state.email, this.state.password);
        } catch(error) {
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
                <form onSubmit={this.handleSubmit}>
                    <h1>Cadastre-se no <Link to="/">Rataum Chat Bot</Link></h1>
                    <p>Preencha o formulário abaixo para se cadastrar.</p>
                    <div>
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.paswword}/>
                    </div>
                    <div>
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button type="submit">Cadastre-se</button>
                    </div>
                    <p>Ou entre através das opções abaixo:</p>
                    <button onClick={this.googleSignIn} type="button">Google</button>
                    <button onClick={this.githubSignIn} type="button">Github</button>
                    <hr/>
                    <p>Já é cadastrado? <Link to="/login">Logar</Link></p>
                </form>
            </div>
        )
    }
}
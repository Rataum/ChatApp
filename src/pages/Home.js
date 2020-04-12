import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Bem vindo ao <Link to="/">Rataum Chat Bot</Link></h2>
                <p>Para criar sua conta, clique <Link to="/signup">aqui</Link></p>
                <p>ou, clique <Link to="/login">aqui</Link> para logar em sua conta.</p>                
            </div>
        )
    }
}
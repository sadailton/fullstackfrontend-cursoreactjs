import React, { Component } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './index.css';

export default class Detail extends Component {

    state = {
        dados: {}
    }

    async loadData() {
        const {id} = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({dados : response.data});
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <Header />
                    <div className='detail-container'>
                        {console.log(this.state.dados)}
                        <div className='card'>
                            <img id='avatar' src='' alt='' />
                            <div id='info'>
                                <span>Nome: {this.state.dados.name}</span>
                                <p>Empresa: {this.state.dados.company}</p>
                                <p>Biografia: </p>
                                <p>Repos</p>
                                <p>Seguidores</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
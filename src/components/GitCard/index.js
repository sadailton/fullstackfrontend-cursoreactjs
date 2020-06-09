import React, { Component } from 'react';
import api from '../../services/api'
import './index.css';

export default class GitCard extends Component {

    state = {
        dados: []
    }

    async loadData() {
        const response = await api.get('/users');
        this.setState({ dados: response.data })
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className='main-container'>
                {
                    this.state.dados.map(d => (
                        <a href={`/detail/${d._id}`}>
                            <div className='card' key={d._id}>
                                <img src={d.avatar_url} id='avatar' alt='' />
                                <div login='info'>
                                    <span>{d.login}</span>
                                    <p>{d.company}</p>
                                    <p>{d.bio}</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        )
    }
}
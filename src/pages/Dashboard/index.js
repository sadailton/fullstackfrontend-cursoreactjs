import React,{Component} from 'react';
import GitCard from '../../components/GitCard';
import Header from '../../components/Header';
import AddUSerBar from '../../components/AddUSerBar'
import JobsCard from '../../components/JobsCard';

import './index.css';

export default class Dashboard extends Component{

    render() {
        return(
            <div>
                <Header />
                <div className='dashboard-container'>
                    <AddUSerBar/>
                    <GitCard/>
                    <JobsCard/>
                </div>            
            </div>
        )
    }
}
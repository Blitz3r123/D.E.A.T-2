import React, { Component } from 'react';

import './CreateContent.css';

import ExistingRow from './ExistingRow/ExistingRow';
import NewTestRow from './NewTestRow/NewTestRow';

export default class CreateContent extends Component{
    render(){
        return(
            <div className="create-content-container">
                
                <ExistingRow />
                <NewTestRow />

            </div>
        );
    }
}
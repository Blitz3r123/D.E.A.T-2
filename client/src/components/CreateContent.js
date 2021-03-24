import React, { Component } from 'react';

import './../css/CreateContent.css';

import ExistingRow from './../components/CreateContent/ExistingRow';
import NewTestRow from './../components/CreateContent/NewTestRow';

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
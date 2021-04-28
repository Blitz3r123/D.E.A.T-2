import React, { Component } from 'react';

import './MainContent.css';
import AnalyseRow from './AnalyseRow/AnalyseRow';

// import CreateRow from './CreateRow/CreateRow';
import ExecuteRow from './ExecuteRow/ExecuteRow';

export default class MainContent extends Component{
    render(){
        return(
            <div style={{padding: 10, paddingRight: 0, maxWidth: '84vw'}}>

                {/* Create Row */}
                {/* <CreateRow /> */}

                {/* Execute Row */}
                <ExecuteRow />

                {/* Analyse Row */}
                <AnalyseRow />
                

            </div>
        );
    }
}
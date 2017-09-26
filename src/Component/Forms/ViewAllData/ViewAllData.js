import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class ViewAllData extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div >                
                {this.props.currentTable}
            </div>
        );
    }
}

export default ViewAllData;
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Table } from 'semantic-ui-react';

const headerRow = ['GlobalId', 'ForestName', 'ForestArea', 'Ownership', 'Size', 'Comment', 'IfHasEndangered', 'ID']

class BugTable extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    async componentDidMount() {        
        await this.reterieveAjaxData();          
    }
       
    async reterieveAjaxData() {       
        let fetchResult = await fetch('http://localhost:63388/api/DemoWebCollector/GetAllForest');
        let ajaxData = await fetchResult.json();
        this.setState({ tableData: ajaxData });      
    }

    renderBodyRow = ({ GlobalId, ForestName, ForestArea, Ownership, Size, Comment, IfHasEndangered, ID }, i) => ({
        key: GlobalId,
        // warning: !!( status&& status.match('Requires Action')),
        cells: [
            GlobalId, ForestName, ForestArea, Ownership, Size, Comment, IfHasEndangered, ID
        ],
    })

    render() {
        return (
            <Table celled sortable
                basic='true'
                headerRow={headerRow}
                renderBodyRow={this.renderBodyRow}
                tableData={this.state.tableData}>
            </Table>
        );
    }
}

export default BugTable;
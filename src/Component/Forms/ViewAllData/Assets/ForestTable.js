import React from 'react';
import { Button, Table, Loader, Segment, Icon, Popup } from 'semantic-ui-react';
import ConstantHelper from '../../../../Helper/ConstantHelper';
// import { CSVLink, CSVDownload } from 'react-csv';

const headerRow = ['ID', 'ForestName', 'ForestArea', 'Ownership', 'Size', 'Comment', 'IfHasEndangered', 'GlobalId']

class ForestTable extends React.Component {

    constructor() {
        super();
        this.state = { tableData: [], isLoaderVisible: true };
    }

    async componentDidMount() {
        await this.reterieveAjaxData();
    }

    async reterieveAjaxData() {
        let fetchResult = await fetch(ConstantHelper.websiteUrlBase+'GetAllForest');
        let ajaxData = await fetchResult.json();
        let ajaxDataWithoutNullValString = JSON.stringify(ajaxData).replace(/null|\"\"/g, "\" \"");
        let ajaxDataWithoutNullValJson = JSON.parse(ajaxDataWithoutNullValString);
        this.setState({ tableData: ajaxDataWithoutNullValJson, isLoaderVisible: false });
    }

    renderBodyRow = ({ ID, ForestName, ForestArea, Ownership, Size, Comment, IfHasEndangered, GlobalId }, i) => ({
        key: GlobalId,
        // warning: !!( status&& status.match('Requires Action')),
        cells: [ID ? { content: ID } : 'No Data', ForestName ? { content: ForestName } : 'No Data', ForestArea ? { content: ForestArea } : 'No Data', Ownership ? { content: Ownership } : 'No Data', Size ? { content: Size } : 'No Data', Comment ? { content: Comment } : 'No Data', IfHasEndangered ? 'true' : 'false', GlobalId],
    })

    downloadButtonClicked() {
        var file_path = ConstantHelper.websiteUrlBase+'DownloadAllForestCsv';
        var a = document.createElement('A');
        a.href = file_path;
        a.download = "ForestData.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    tableCliked(evt) {
        //TODO:.....        
    }
  

    render() {

        return (           
            <Segment raised>
                <Loader active={this.state.isLoaderVisible} size='large'>Loading data...</Loader>
                <div style={{ marginBottom: 15 }}>
                    <Popup trigger={
                        <Button color='green' style={{ display: 'inline' }} onClick={this.downloadButtonClicked}><Icon name='download' />Download</Button>}>
                        <Popup.Content>Download the following table data to a local csv file.</Popup.Content>
                    </Popup>                  
                </div>
                
                <div style={{ overflowY: 'scroll', height: '70vh' }}>
                    <Table sortable celled selectable striped
                        headerRow={headerRow}
                        renderBodyRow={this.renderBodyRow}
                        tableData={this.state.tableData} onClick={this.tableCliked.bind(this)} >
                    </Table>
                </div>
            </Segment>
            // </div>
        );
    }
}

export default ForestTable;
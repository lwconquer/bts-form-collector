import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/index.css';
import FormManager from './FormManager';
import { Button } from 'semantic-ui-react';

class MainRegion extends React.Component {

    constructor() {
        super();       
    }
 
    render() {
        var threeLineIconStyle = { fontSize: 30, cursor: 'pointer' , marginRight:30 };

        return (
            <div ref={this.props.mainDivRef} className="main container-fluid">
                <div className="flex-container" >
                    <div className="flex-item-title"  >
                        <span style={threeLineIconStyle} onClick={(e)=>this.props.onThreeLineIconClick(e)}>&#9776; </span>                        
                    </div>
                    <div className="flex-item-title2" >
                        <h3> {this.props.titleText}</h3>
                    </div>
                </div>
                {/*style={{ overflowY: 'scroll', height: '72vh' }}*/}
                <div className="row" style={{ marginTop: 15, marginRight: 150 }}>
                    <FormManager style={{}} widgetName={this.props.currentSelectedWidget} titleText={this.props.titleText} onShowResultTable={(e) => this.props.onShowResultTable(e)}/>
                </div>
            </div>
        );
    }
}

export default MainRegion;
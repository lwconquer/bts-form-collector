import React from 'react';
import ReactDOM from 'react-dom';
import Forest from "./Forms/Forest";
import Bug from "./Forms/BugForm/Bug";
import Plant from "./Forms/Plant";
import ViewAllData from "./Forms/ViewAllData/ViewAllData";
import ForestTable from "./Forms/ViewAllData/Assets/ForestTable";
import BugTable from "./Forms/ViewAllData/Assets/BugTable";
import PlantTable from "./Forms/ViewAllData/Assets/PlantTable";

class FormManager extends React.Component {
    constructor() {
        super();
        this.state = { currentViewTable: null };
    }

    render() {
        const widgetName = this.props.widgetName;
        if (widgetName === "Forest") {
            return <Forest onShowResultTable={(e) => this.props.onShowResultTable(e)} />;
        }
        else if (widgetName === "Bug") {
            return <Bug onShowResultTable={(e) => this.props.onShowResultTable(e)} />;
        }
        else if (widgetName === "Plant") {
            return <Plant onShowResultTable={(e) => this.props.onShowResultTable(e)} />;
        }
        else if (widgetName === "ViewAllData") {
            if (this.props.titleText.toLowerCase().indexOf("forest")>=0)
                return <ViewAllData currentTable={<ForestTable />}  />;
            else if (this.props.titleText.toLowerCase().indexOf("bug")>=0) {
                return <ViewAllData currentTable={<BugTable />}  />;
            }
            else if (this.props.titleText.toLowerCase().indexOf("plant")>=0) {
                return <ViewAllData currentTable={<PlantTable />}  />;
            }

        }
        else if (widgetName === "") {
            return <Forest />;
        }
        else if (widgetName === "") {
            return <Forest />;
        }
        else if (widgetName === "") {
            return <Forest />;
        }
        return <Forest />
    }
}

export default FormManager;
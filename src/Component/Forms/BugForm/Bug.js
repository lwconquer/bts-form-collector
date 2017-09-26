import React from 'react';
import ReactDOM from 'react-dom';
import '../../../Css/index.css';
import { Tab, Form, Button, Icon } from 'semantic-ui-react';
import BugTab1 from './BugTab1';
import BugTab2 from './BugTab2';
import 'whatwg-fetch';

class Bug extends React.Component {

    constructor() {
        super();
        this.state = { isFormLoading: false, bugTypeValue: "", bugNameValue: "" };
    }
    componentDidMount() {
    }


    handleSubmit(e) {
        this.bugTab2State = this.bugTab2Input;
        //this.setState({isFormLoading:true});
        //feafa.setState({"bugTypeTest":44});
    }



    tabChangedEventHandler(e) {
        // if (this.bugTab1Input !== null) {
        //     this.bugTab1TempState = this.bugTab1Input.state;
        // }
        // if (this.bugTab1Input !== null && this.bugTab1TempState !== null) {
        //     this.bugTab1Input.setState({ "bugTypeValue": this.bugTab1TempState.bugTypeValue });
        //     this.bugTab1Input.setState({ "bugNameValue": this.bugTab1TempState.bugNameValue });
        // }
    }

    onBugTypeInputChanged = (e) => this.setState({ "bugTypeValue": e });
    onBugNameInputChanged = (e) => this.setState({ "bugNameValue": e });
    onGenderSelectInputChanged = (e) => this.setState({ "genderValue": e });
    onRadioButtonClicked = (e) => this.setState({ "radioButtonValue": e });
    onCommentInputClicked = (e) => this.setState({ "commentValue": e });
    onIfPoisonousChangedHandler = (e) => this.setState({ "ifPoisonousValue": e });


    onBugSizeInputChangedHandler = (e) => this.setState({ "bugSizeValue": e });
    onLifeSpanInputChangedHandler = (e) => this.setState({ "lifeSpanValue": e });
    onFoodTypeInputChangedHandler = (e) => this.setState({ "foodTypeValue": e })
    onHandleRadioButtonChangedEventHandler = (e) => this.setState({ "radioButtonValue2": e })

    //onShowResultTable = (e) => this.props.onShowResultTable(e);

    render() {
        let asdfaf = this.bugTab1Input;
        let feaf = this.bugTab2Input;
        const panes = [
            {
                menuItem: 'Bug General Info', render: () =>
                    <Tab.Pane><BugTab1
                        bugTypeValue={this.state.bugTypeValue} onBugTypeInputChanged={this.onBugTypeInputChanged.bind(this)}
                        bugNameValue={this.state.bugNameValue} onBugNameInputChanged={this.onBugNameInputChanged.bind(this)}
                        genderValue={this.state.genderValue} onGenderSelectInputChanged={this.onGenderSelectInputChanged.bind(this)}
                        radioButtonValue={this.state.radioButtonValue} onRadioButtonClicked={this.onRadioButtonClicked.bind(this)}
                        commentValue={this.state.commentValue} onCommentInputClicked={this.onCommentInputClicked.bind(this)}
                        ifPoisonousValue={this.state.ifPoisonousValue} onIfPoisonousChangedHandler={this.onIfPoisonousChangedHandler.bind(this)}
                        ref={(input) => { this.bugTab1Input = input; }}
                    /></Tab.Pane>
            },
            {
                menuItem: 'Bug Habitate', render: () =>
                    <Tab.Pane><BugTab2
                        bugSizeValue={this.state.bugSizeValue} onBugSizeInputChangedHandler={this.onBugSizeInputChangedHandler.bind(this)}
                        lifeSpanValue={this.state.lifeSpanValue} onLifeSpanInputChangedHandler={this.onLifeSpanInputChangedHandler.bind(this)}
                        foodTypeValue={this.state.foodTypeValue} onFoodTypeInputChangedHandler={this.onFoodTypeInputChangedHandler.bind(this)}
                        radioButtonValue2={this.state.radioButtonValue2} onHandleRadioButtonChangedEventHandler={this.onHandleRadioButtonChangedEventHandler.bind(this)}
                        ref={(input2) => { this.bugTab2Input = input2; }}
                    /></Tab.Pane>
            },
            { menuItem: 'Bug Photo Info', render: () => <Tab.Pane>Hasn't implemented yet.</Tab.Pane> }
        ]
        return (
            <Form loading={this.state.isFormLoading} onSubmit={this.handleSubmit.bind(this)} className='forms'>
                <Tab onTabChange={this.tabChangedEventHandler.bind(this)} panes={panes} />
                <div className="flex-container">
                    <div className="flex-item">
                        <Form.Button color={'green'}>
                            <Icon name='upload' />Submit
                        </Form.Button>
                    </div>
                    <div className="flex-item">
                        <Button color={'green'} onClick={(e) => this.props.onShowResultTable("Bug")}>
                            <Icon name='list layout' />Check All Bug Data
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default Bug;
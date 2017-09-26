import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import { Form, Button, Icon, Message, Confirm,Modal } from 'semantic-ui-react';
import 'whatwg-fetch';
import GeneralHelper from '../../Helper/GeneralHelper';
import ConstantHelper from '../../Helper/ConstantHelper';

const options = [
    { key: 'p', text: 'private', value: 'private' },
    { key: 'g', text: 'federal', value: 'federal' },
]
const initialState = { IdValue: "", ForestName: '', ForestArea: '', Ownership: "", Size: "", Comment: "", IfHasEndangered: true, isFormLoading: false, ifForestAreaMessageBoxVisible: true, ifMessageBoxOpen: false };

class Forest extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    handleChange = (e, { value }) => this.setState({ Size: value });

    async  handleSubmit(e) {
        this.setState({ isFormLoading: true });
        let guid = GeneralHelper.createNewGuid();
        let post = await fetch(ConstantHelper.websiteUrlBase + 'InsertForestRecord', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                GlobalId: guid,
                ID: this.state.IdValue,
                ForestName: this.state.ForestName,
                ForestArea: this.state.ForestArea,
                Ownership: this.state.Ownership,
                Size: this.state.Size,
                Comment: this.state.Comment,
                IfHasEndangered: this.state.IfHasEndangered
            })
        });
        if (post.status === 200)
            this.setState({ isFormLoading: false, ifMessageBoxOpen: true });
        else
            this.setState({ isFormLoading: false });

        // let postResult = post.json();

        // let fetchResult = await fetch('http://localhost:63388/api/DemoWebCollector/InsertRecord');
        // let resultJson = await fetchResult.json();
        // let adsf = 4;
        // let afd = 43;

        // fetch('http://localhost:63388/api/DemoWebCollector/GetRecordTest')
        //     .then(function (response) {
        //         return response.json();
        //     }).then(function (json) {
        //         console.log('parsed json', json);
        //     }).catch(function (ex) {
        //         console.log('parsing failed', ex)
        //     });


        // fetch('http://localhost:63388/api/DemoWebCollector/GetRecordTest')
        //     .then(function (response) {              
        //        return response.json();
        //     }).then(function (json) {
        //         console.log('parsed json', json);
        //     }).catch(function (ex) {
        //         console.log('parsing failed', ex)
        //     });
    }

    //validate the value to be float.
    ForestAreaOnChanged(e, { value }) {
        this.setState({ ForestArea: value });
        if (value === "")
            this.setState({ ifForestAreaMessageBoxVisible: true });
        else if (isNaN(parseFloat(value)) || isNaN(GeneralHelper.filterFloat(value)))
            this.setState({ ifForestAreaMessageBoxVisible: false });
        else
            this.setState({ ifForestAreaMessageBoxVisible: true });
    }

    inputNewRecordHandler(e) {
        this.setState(initialState);
        this.setState({ ifMessageBoxOpen: false });
    }

    checkAllDataHandler(e) {

    }

    render() {
        const { Size } = this.state;
        return (
            <Form loading={this.state.isFormLoading} onSubmit={this.handleSubmit.bind(this)} className='forms' >
                <Form.Input label='Forest ID' value={this.state.IdValue} onChange={(e, { value }) => this.setState({ IdValue: value })} placeholder='ID' required={true} />
                <Form.Group widths='equal'>
                    <Form.Input label='Forest Name' value={this.state.ForestName} onChange={(e, { value }) => this.setState({ ForestName: value })} placeholder='Forest Name' />
                    <Form.Select label='Ownership' value={this.state.Ownership} onChange={(e, { value }) => this.setState({ Ownership: value })} options={options} placeholder='Ownership' />
                </Form.Group>
                <Form.Input label='Forest Area' value={this.state.ForestArea} onChange={this.ForestAreaOnChanged.bind(this)} placeholder='Acres' />
                <Message hidden={this.state.ifForestAreaMessageBoxVisible} negative header='Action Forbidden' content='You can only sign up for an account once with a given e-mail address.' />

                <Form.Group inline>
                    <label>Size</label>
                    <Form.Radio label='Small' value='sm' checked={Size === 'sm'} onChange={this.handleChange.bind(this)} />
                    <Form.Radio label='Medium' value='md' checked={Size === 'md'} onChange={this.handleChange.bind(this)} />
                    <Form.Radio label='Large' value='lg' checked={Size === 'lg'} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.TextArea label='Comment' value={this.state.Comment} onChange={(e, { value }) => this.setState({ Comment: value })} placeholder='Comment...' />
                <Form.Checkbox label='If has endangered species' checked={this.state.IfHasEndangered} onChange={(e, { checked }) => this.setState({ IfHasEndangered: checked })} />
                <div className="flex-container">
                    <div className="flex-item">
                        <Form.Button color={'green'}>
                            <Icon name='upload' />Submit
                        </Form.Button>
                    </div>
                    <div className="flex-item">
                        <Button color={'green'} onClick={(e) => this.props.onShowResultTable("Forest")}>
                            <Icon name='list layout' />Check All Forest Data
                        </Button>
                    </div>
                </div>
                <Confirm style={{ height: 150 }}
                    content="The data has been submitted successfully!"
                    cancelButton="Input another record"
                    confirmButton="Check all submitted data"
                    open={this.state.ifMessageBoxOpen}
                    onCancel={this.inputNewRecordHandler.bind(this)}
                    onConfirm={(e) => this.props.onShowResultTable("Forest")}
                />
                <Modal
                    trigger={<Button>Show Modal</Button>}
                    header='Delete Your Account'
                    content='Are you sure you want to delete your account'
                    actions={[
                        { key: 'no', content: 'No', color: 'red', triggerClose: true },
                        { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
                    ]}
                />
            </Form>
        );
    }
}

export default Forest;
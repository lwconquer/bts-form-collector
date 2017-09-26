import React from 'react';
import ReactDOM from 'react-dom';
import '../../Css/index.css';
import { Form, Button, Icon } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'whatwg-fetch';

const options = [
    { key: 'k', text: 'Chemical Plant', value: 'Chemical' },
    { key: 'r', text: 'Refinery Plant', value: 'Refinery' },
]

class Plant extends React.Component {

    constructor() {
        super();
        this.state = { startDate: moment() };
    }

    handleChange = (e, { value }) => this.setState({ value });
    // onShowResultTable = (e) => this.props.onShowResultTable(e);
    datePickerChanged = ((date) => this.setState({ startDate: date }))

    render() {
        const { value } = this.state;
        return (
            <Form className='forms'>
                <Form.Group widths='equal'>
                    <Form.Input label='Plant name' placeholder='First name' />
                    <Form.Select label='Plant type' options={options} placeholder='Plant type' />
                </Form.Group>

                <Form.Input label='Acerage' placeholder='Acerage' />
                <Form.Input label='Revenue' placeholder='Revenue' />
                {/*<Form.Input label='Build year' placeholder='Build year' />*/}
                <label>Build year</label>
                <DatePicker selected={this.state.startDate} onChange={this.datePickerChanged.bind(this)} placeholderText="Click to select a date" />

                <Form.Checkbox label='If produce poisonous chemical?' />
                <Form.TextArea label='Comment' placeholder='Comment...' />
                <div className="flex-container">
                    <div className="flex-item">
                        <Form.Button color={'green'}>
                            <Icon name='upload' />Submit
                        </Form.Button>
                    </div>
                    <div className="flex-item">
                        <Button color={'green'} onClick={(e) => this.props.onShowResultTable("Plant")}>
                            <Icon name='list layout' />Check All Plant Data
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default Plant;
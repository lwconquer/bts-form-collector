import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';


const options = [
    { key: 't', text: 'Tree leaf', value: 'tree' },
    { key: 'G', text: 'Grass', value: 'Grass' },
]

class BugTab2 extends Component {

    constructor() {
        super();
        this.state = {};
    }


    BugSizeInputChangedHandler = (e, { value, placeholder }) => this.props.onBugSizeInputChangedHandler(value);
    LifeSpanInputChangedHandler = (e, { value, placeholder }) => this.props.onLifeSpanInputChangedHandler(value);
    FoodTypeInputChangedHandler = (e, { value, placeholder }) => this.props.onFoodTypeInputChangedHandler(value);
    handleRadioButtonChangedEventHandler = (e, { value }) => this.props.onHandleRadioButtonChangedEventHandler(value);



    render() {
        //const { radioButtonValue } = this.state;
        return (
            <div>
                <Form.Input label='Bug Size' value={this.props.bugSizeValue} onChange={this.BugSizeInputChangedHandler.bind(this)} placeholder='2 inches' />
                <Form.Input label='Life span' value={this.props.lifeSpanValue} onChange={this.LifeSpanInputChangedHandler.bind(this)} placeholder='1 year' />
                <Form.Select label='Food type' value={this.props.foodTypeValue} onChange={this.FoodTypeInputChangedHandler.bind(this)} options={options} placeholder='Food type' />
                <Form.Group inline>
                    <label>Can it fly? </label>
                    <Form.Radio label='Yes' value='yes' checked={this.props.radioButtonValue2 === 'yes'} onChange={this.handleRadioButtonChangedEventHandler} />
                    <Form.Radio label='No' value='no' checked={this.props.radioButtonValue2 === 'no'} onChange={this.handleRadioButtonChangedEventHandler} />
                </Form.Group>
            </div>
        )
    }
}


export default BugTab2;
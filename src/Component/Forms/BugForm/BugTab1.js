import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class BugTab1 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // radioButtonClickEventHanler = (e, { value }) => this.setState({ radioButtonValue: value });
  // BugTypeInputChangedHandler = (e, { value, placeholder }) => this.setState({ bugTypeValue: value });
  // BugNameInputChangedHandler = (e, { value }) => this.setState({ bugNameValue: value });
  // GenderSelectChangedHandler = (e, { value }) => this.setState({ genderValue: value });
  // CommentChangedHandler = (e, { value }) => this.setState({ commentValue: value });
  // IfPoisonousChangedHandler = (e, { checked }) => this.setState({ ifPoisonousValue: checked });

  BugTypeInputChangedHandler = (e, { value }) => this.props.onBugTypeInputChanged(value);
  BugNameInputChangedHandler = (e, { value }) => this.props.onBugNameInputChanged(value);
  GenderSelectChangedHandler = (e, { value }) => this.props.onGenderSelectInputChanged(value);
  radioButtonClickEventHanler = (e, { value }) => this.props.onRadioButtonClicked(value);
  CommentChangedHandler = (e, { value }) => this.props.onCommentInputClicked(value);  
  IfPoisonousChangedHandler = (e, { checked }) => this.props.onIfPoisonousChangedHandler(checked);

  render() {   
    return (
      <div >
        <Form.Group widths='equal' >
          <Form.Input label='Bug Type' value={this.props.bugTypeValue} onChange={this.BugTypeInputChangedHandler.bind(this)} placeholder='Bug Type' required />         
          <Form.Input label='Bug Name' value={this.props.bugNameValue} onChange={this.BugNameInputChangedHandler.bind(this)} placeholder='Bug Name' required />         
          <Form.Select label='Gender' value={this.props.genderValue} onChange={this.GenderSelectChangedHandler.bind(this)} options={options} placeholder='Gender' />       
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label='Small' value='sm' checked={this.props.radioButtonValue === 'sm'} onChange={this.radioButtonClickEventHanler.bind(this)} />
          <Form.Radio label='Medium' value='md' checked={this.props.radioButtonValue === 'md'} onChange={this.radioButtonClickEventHanler.bind(this)} />
          <Form.Radio label='Large' value='lg' checked={this.props.radioButtonValue === 'lg'} onChange={this.radioButtonClickEventHanler.bind(this)} />
        </Form.Group>
        <Form.TextArea label='Comment' value={this.props.commentValue} onChange={this.CommentChangedHandler.bind(this)} placeholder='Comment...' />       
        <Form.Checkbox label='If poisonous' checked={this.props.ifPoisonousValue}  onChange={this.IfPoisonousChangedHandler.bind(this)} />      
      </div>
    )
  }
}


export default BugTab1;
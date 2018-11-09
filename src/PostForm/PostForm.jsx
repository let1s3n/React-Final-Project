import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

const options = [
  { value: 'Perú', label: 'Perú' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Brasil', label: 'Brasil' },
  { value: 'Chile', label: 'Chile' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Venezuela', label: 'Venezuela' }
];

class PostForm extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const first = this.getFirst.value;
    const last = this.getLast.value;
    
    const opt = this.state.selectedOption.value;
    const data = {
      id: new Date(),
      first,
      last,
      opt,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })
    this.getFirst.value = '';
    this.getLast.value = '';
    this.setState({ selectedOption:null });
    
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="post-container">
        <h1 className="post_heading">Create User</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getFirst = input}
            placeholder="Enter First Name" /><br /><br />
          <input required type="text" ref={(input) => this.getLast = input}
             placeholder="Enter Last Name" /><br /><br />
          <label htmlFor="">Select Country</label>
          <Select
            className='react-select-container'
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          /><br /><br />
          <button>Save</button>
        </form>

      </div>
    );
  }
}
export default connect()(PostForm);
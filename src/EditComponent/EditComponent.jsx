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


class EditComponent extends Component {
  
  state = {
    selectedOption : {value: this.props.post.opt, label:this.props.post.opt},
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption);
  }
  handleEdit = (e) => {
    e.preventDefault();
    const newFirst = this.getFirst.value;
    const newLast = this.getLast.value;
    const newOpt = this.state.selectedOption.value;
    const data = {
      newFirst,
      newLast,
      newOpt
    }
    
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    const { selectedOption } = this.state;
   
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={(input) => this.getFirst = input}
            defaultValue={this.props.post.first} placeholder="Enter First Name" /><br /><br />
          <input required type="text" ref={(input) => this.getLast = input}
            defaultValue={this.props.post.last} placeholder="Enter Last Name" /><br /><br />
            <Select
            className='react-select-container'
            
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
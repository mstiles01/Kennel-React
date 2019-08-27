import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      title: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("EmployeeDetail:", this.props.employeeID);
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeID)
    .then((employee) => {
      this.setState({
        name: employee.name,
        title: employee.title,
        loadingStatus: false,

      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeID)
    .then(() => this.props.history.push("/employees"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Title: {this.state.title}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
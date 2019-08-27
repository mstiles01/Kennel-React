import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <b>{this.props.employee.name}</b></h3>
          <p>Title: {this.props.employee.title}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
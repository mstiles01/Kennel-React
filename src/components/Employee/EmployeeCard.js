import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
          
            <h2>Name: <span className="card-petname">{this.props.employee.name}</span></h2>
            <p>Breed: {this.props.employee.title}</p>
          </div>
      </div>
    );
  }

}
export default EmployeeCard;
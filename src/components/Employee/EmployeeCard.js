import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <b>{this.props.employee.name}</b></h3>
          <p>Title: {this.props.employee.title}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
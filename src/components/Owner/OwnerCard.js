import React, { Component } from 'react';
class owenerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <b>{this.props.owner.name}</b></h3>
            <p>Title: {this.props.owner.title}</p>
            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge</button>
          </div>
        </div>
      );
    }
  }

export default owenerCard;
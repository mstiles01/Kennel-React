import React, { Component } from 'react';
class owenerCard extends Component {
    render() {
      return (
        <div className="card">
            <div className="card-content">
              <h2>Name: <span className="card-petname">{this.props.owner.name}</span></h2>
              <p>Title: {this.props.owner.title}</p>
            </div>
        </div>
      );
    }
  }

export default owenerCard;
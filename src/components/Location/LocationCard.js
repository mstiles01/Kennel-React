import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Place: <span className="card-petname">{this.props.location.name}</span></h2>
            <p>Id: {this.props.location.id}</p>
          </div>
      </div>
    );
  }

}
export default LocationCard;
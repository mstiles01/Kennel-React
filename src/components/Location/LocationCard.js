import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Name: <b>{this.props.location.name}</b></h3>
          <p>Title: {this.props.location.id}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
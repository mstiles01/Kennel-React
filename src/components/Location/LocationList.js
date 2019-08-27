import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
        console.log("AnimalList: Render");

        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard
              key={location.name}
              location={location}
              />
            )}
          </div>
        )
      }

      deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => {
          LocationManager.getAll()
          .then((newLocations) => {
            this.setState({
                locations: newLocations
            })
          })
        })
      }

      render(){
        console.log("AnimalList: Render");

        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard
                key={location.id}
                location={location}
                deleteLocation={this.deleteLocation}
              />
            )}
          </div>
        )

    }
  }
export default LocationList

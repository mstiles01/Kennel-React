import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/locations/" render={(props) => {
          return <LocationList />
        }} />
  <Route path="/employees/" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owner/" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>

    )
  }
}

export default ApplicationViews
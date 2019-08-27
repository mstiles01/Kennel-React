import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owner: [],
    }

componentDidMount(){
    console.log("Employee LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    OwnerManager.getAll()
    .then((owner) => {
        this.setState({
            owner: owner
        })
    })
}


render(){
    console.log("AnimalList: Render");

    return(
      <div className="container-cards">
        {this.state.owner.map(owner =>
          <OwnerCard key={owner.id} owner={owner} />
        )}
      </div>
    )
        }
     deleteOwner= id => {
      OwnerManager.delete(id)
      .then(() => {
        OwnerManager.getAll()
        .then((newOwner) => {
          this.setState({
              owner: newOwner
          })
        })
      })
    }
    render(){
      console.log("AnimalList: Render");

      return(
        <div className="container-cards">
          {this.state.owner.map(owner =>
            <OwnerCard
              key={owner.id}
              owner={owner}
              deleteOwner={this.deleteOwner}
            />
          )}
        </div>
      )
    }

  }







export default OwnerList

import React from "react";
import Animals from './Animals.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [],
      loading: false
    }
    this.getData = this.getData.bind(this);

  }

//   componentDidMount() {
//     axios.get('/bunnies')
//     .then((results) => {
//       console.log(results);
//       this.setState({
//         animals: results.data,
//         loading: true
//         // bunny: this.state.bunnies[0].image
//       })
//     })
//  }


  getData() {
      axios.get('/bunnies')
      .then((results) => {
        console.log(results);
        this.setState({
          animals: results.data,
          loading: true
          // bunny: this.state.bunnies[0].image
        })
      })
  }
  
  render() {
    if(this.state.loading) {
      return (
        <div>
            <h1>Displaying the animal</h1>
            <div>
              <table>
                <tbody>
                  {this.state.animals.map((animal, i) => {
                    return(
                      <Animals animal={animal}/>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <br/>
        </div>
      )
    } else {
      return (
        <div> Loading.....

          <div>
            <button type="button" onClick={this.getData}>Click me to login</button>
          </div>
        </div>
      )
    }
  }
}

export default App


  // componentDidMount() {
  //   axios.get('/bunnies')
  //   .then((results) => {
  //     console.log(results);
  //     this.setState({
  //       animals: results.data,
  //       loading: true
  //       // bunny: this.state.bunnies[0].image
  //     })
  //   })
  // }

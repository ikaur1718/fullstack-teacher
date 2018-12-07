import React from 'react'

class Animals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showName: false
    }
  }

  // {this.state.showDescription ? <td className="fish-description">{this.props.fish.description}</td> : null}


  render() {
    return (
      <tr onClick={() => this.setState({showName: !this.state.showName})}>
        <td>
          <img src={this.props.animal.image} height="90" width="90" />
        </td>
        {this.state.showName ? <td className="animal">{this.props.animal.name}</td> : null}
      </tr>

    )
  }
}

export default Animals
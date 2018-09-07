import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInput: '',
            lastToDo: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleInputChange(e) {
        e.preventDefault()
        this.setState({currentInput: e.target.value})
    }

    handleClick() {
        this.setState({lastToDo: this.state.currentInput, currentInput: ''})
    }

    render() {
        return (
            <div>
                Basic CRUD To Do
                <br/><br/>
                To Do: <input type="text" value = {this.state.currentInput} onChange = {this.handleInputChange}></input> <br/><br/>
                <button onClick = {this.handleClick} >Save this ToDo</button>
                
                {this.state.lastToDo === '' ? null : <div> {this.state.lastToDo} </div>}
            </div>
        )
    }
}

export default App
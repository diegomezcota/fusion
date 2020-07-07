import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div>
                <form>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={this.state.firstName}
                        placeholder="FirstName" 
                        onChange={this.handleChange}
                    />
                </form>
                <form>
                    <input 
                        type='text' 
                        name='lastName' 
                        value={this.state.lastName}
                        placeholder="LastName" 
                        onChange={this.handleChange}
                    />
                </form>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }
}

export default App
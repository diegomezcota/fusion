import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loading : false,
            data : {}
        }
    }

    componentDidMount() {
        this.setState({loading : true})
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({
                data : data,
                loading : false
            }))
    }

    render(){
        let message = this.state.loading ? 'Loading...' : this.state.data.name
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default App
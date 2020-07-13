import React from 'react'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data 
                this.setState({
                    allMemeImgs : memes
                })
            })
    }

    handleChange(){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const index = Math.floor(Math.random() * 100)
        const newUrl = this.state.allMemeImgs[index].url
        this.setState({
            randomImg : newUrl
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}                    
                    />
                    <button>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg}/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
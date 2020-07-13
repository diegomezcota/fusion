import React from 'react'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : [],
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(this.setState({
                allMemeImgs : data
            }))
    }

    render() {
        return (
            <h2>Generated Memes</h2>
        )
    }
}

export default MemeGenerator
import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName : "",
            Age : "",
            gender : "",
            location : "",
            dietaryRestrictions : [],
            isVegetarian : false,
            isLactoseIntolerant : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {value, name, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }

    render() {
        let restrictions = []
        if (this.state.isVegetarian) restrictions.push('vegetarian')
        if (this.state.isLactoseIntolerant) restrictions.push('lactose intolerant')
        return (
            <main>
                <form>
                    <input 
                        name = "firstName" 
                        value = {this.state.firstName} 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name = "lastName" 
                        value = {this.state.lastName} 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name = "Age"
                        value = {this.state.Age}
                        placeholder="Age" 
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    />Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    />Female
                    <br />
                    
                    {/* Create select box for location here */}
                    <select
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                    >
                        <option value="Hawaii">Hawaii</option>
                        <option value="Los Mochis">Los Mochis</option>
                        <option value="Monterrey">Monterrey</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <input
                        type="checkbox"
                        name="isVegetarian"
                        checked={this.state.isVegetarian}
                        onChange={this.handleChange}
                    />Vegetarian
                    <br />
                    <input
                        type="checkbox"
                        name="isLactoseIntolerant"
                        checked={this.state.isLactoseIntolerant}
                        onChange={this.handleChange}
                    />Lactose Intolerant
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.Age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                    {for (let i = 0; i < restrictions.length; i++){
                        restrictions[i]
                    }} 
                </p>
            </main>
        )
    }
}

export default App

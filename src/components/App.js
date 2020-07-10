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
            age : "",
            gender : "",
            location : "",
            dietaryRestrictions : {
                isVegetarian : false,
                isLactoseIntolerant : false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {value, name, type, checked} = event.target
        type === 'checkbox' ? 
            this.setState(prevState => {
                return {
                    dietaryRestrictions : {
                        ...prevState.dietaryRestrictions,
                        [name] : checked
                    }
                }
            }) 
            : this.setState({[name] : value})
    }

    render() {
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
                        name = "age"
                        value = {this.state.age}
                        placeholder="Age" 
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === 'female'}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <select
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Los Mochis">Los Mochis</option>
                        <option value="Monterrey">Monterrey</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>
                        <input
                            type="checkbox"
                            name="isVegetarian"
                            checked={this.state.dietaryRestrictions.isVegetarian}
                            onChange={this.handleChange}
                        />Vegetarian
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseIntolerant"
                            checked={this.state.dietaryRestrictions.isLactoseIntolerant}
                            onChange={this.handleChange}
                        />Lactose Intolerant
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary restrictions: </p>
                    {/* Dietary restrictions here, comma separated */}
                {this.state.dietaryRestrictions.isVegetarian && <p>Vegetarian</p>}
                {this.state.dietaryRestrictions.isLactoseIntolerant && <p>Lactose Intolerant</p>}
            </main>
        )
    }
}

export default App

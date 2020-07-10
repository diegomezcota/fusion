import React from 'react'

export default function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name = "firstName" 
                    value = {props.firstName} 
                    placeholder="First Name" 
                    onChange={props.handleChange}
                />
                <br />
                <input 
                    name = "lastName" 
                    value = {props.lastName} 
                    placeholder="Last Name" 
                    onChange={props.handleChange}
                />
                <br />
                <input 
                    name = "age"
                    value = {props.age}
                    placeholder="Age" 
                    onChange={props.handleChange}
                />
                <br />
                
                {/* Create radio buttons for gender here */}
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === 'male'}
                        onChange={props.handleChange}
                    />Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === 'female'}
                        onChange={props.handleChange}
                    />Female
                </label>
                <br />
                
                {/* Create select box for location here */}
                <select
                    value={props.location}
                    onChange={props.handleChange}
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
                        checked={props.dietaryRestrictions.isVegetarian}
                        onChange={props.handleChange}
                    />Vegetarian
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseIntolerant"
                        checked={props.dietaryRestrictions.isLactoseIntolerant}
                        onChange={props.handleChange}
                    />Lactose Intolerant
                </label>
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.location}</p>
            <p>Your dietary restrictions: </p>
                {/* Dietary restrictions here, comma separated */}
            {props.dietaryRestrictions.isVegetarian && <p>Vegetarian</p>}
            {props.dietaryRestrictions.isLactoseIntolerant && <p>Lactose Intolerant</p>}
        </main>
    )
}
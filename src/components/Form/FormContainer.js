import React from 'react'
import FormComponent from './FormComponent'

export default class FormContainer extends React.Component {
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

    render(){
        return (
            <FormComponent 
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}
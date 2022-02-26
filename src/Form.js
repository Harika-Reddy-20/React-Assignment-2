import React, { Component } from 'react'
import './Form.css'

class Form extends React.Component {
    state = {
        name: "",
        dept: "",
        rating: "",
        user: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("state",this.state);

        const tempObj = {
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
        }
        const tempArr = this.state.user;
        tempArr.push(tempObj);
        this.setState({ user: tempArr });
    }
    render() {
        console.log(this.state.user, "USER");
        return (
            <div className='container'>
                <h1 className='head'>Employee Feedback Form</h1>

                <form className='form'>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} /><br />
                    <label for="name">Department:</label>
                    <input type="text" id="dept" name="dept" onChange={this.handleChange} value={this.state.dept} /> <br />
                    <label for="name">Rating:</label>
                    <input type="text" id="rating" name="rating" onChange={this.handleChange} value={this.state.rating} /><br />
                    <button onClick={this.handleSubmit}>Submit</button>

                </form>
                {this.state.user.map((value, index) => {
                    return (
                        <div className='box'>
                            {value.name}||{value.dept}||{value.rating}
                        </div>
                    )
                })}
            </div>

        );
    }
}

export default Form
import React, { Component } from "react";


class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "FIRST NAME",
            lastName: "LAST NAME",
            tempFirst: " ",
            tempLast: " ",
            isClicked: false
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);



    }
    handleSave(event) {
        this.setState({
            firstName: this.state.tempFirst,
            lastName: this.state.tempLast,
            isClicked: true
        })
    }
    handleEdit() {
        this.setState({
            isClicked: false
        })
    }
    handleCancel() {
        this.setState({
            isClicked: true


        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        if (!this.state.isClicked) {
            return (

                <div>

                    <input type="text"
                        name="tempFirst"
                        defaultValue={this.state.firstName}
                        onChange={(event) => this.handleChange(event)}
                    >
                    </input>


                    <input type="text"
                        name="tempLast"
                        defaultValue={this.state.lastName}
                        onChange={(event) => this.handleChange(event)}

                    >

                    </input>

                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handleSave}>Save</button>
                </div>

            )
        } else {
            return (

                <div>
                    <div>
                        First Name: {this.state.firstName}
                        <br />
                            Last Name: {this.state.lastName}
                        <br />
                        <button onClick={this.handleEdit}>Edit</button>

                    </div>

                </div>
            )

        }
    }


}





export default EditForm;

import React, { Component } from 'react';

export class FormContainer extends Component {
    constructor(props) {
        super(props)

        this.id = props.id;
    }


    render() {
        return(
            <div className = "container" id = {this.id}>
                <div>
                    {this.props.Ticket.wo.id}
                </div>
            </div>
        );
    }
}
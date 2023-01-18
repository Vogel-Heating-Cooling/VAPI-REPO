import React, { Component } from 'react';
import { ActionButton } from './ActionButton';

export class TestTriggerFromComponent extends Component {
    constructor(props) {
        super(props)

        this.DropTicketModify = this.DropTicketModify.bind(this);
    }

    /**
     * On click, trigger drop note based on input
     */
    DropTicketModify() {
        if (document.getElementById('in-text').value == "yellow"){
            this.props.UpdateDropNote('yellow', 'Yellow!')
        } else if (document.getElementById('in-text').value == "green") {
            this.props.UpdateDropNote('green', 'Green!')
        } else {
            this.props.UpdateDropNote('red', 'Bad input!!', 1000)
        }
    }

    render() {
        return(
            <div>
                <input id = "in-text"placeholder='Type here'></input>
                <ActionButton ClickFunction = {this.DropTicketModify} text = "Trigger DropNote"></ActionButton>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { DropNote} from './DropNote'
import { TestTriggerFromComponent } from './TestTriggerFromComponent';
import { ActionButton } from './ActionButton';
import { FormContainer } from './FormContainer';

let GlobalTicketNumber = 1;

/*
* Ticket Container contains:
* div which updates to the wo ID prop in the Ticket object
* Test Trigger Component which contains an input box and an Action Button which triggers the DropNote in the Ticket Container
* Action Button which triggers the change of the wo ID prop in the Ticket object
    * Action Buttons take text, an id, a ClickFunction, and optional data to pass into the Click Function
* Form Container which contains a div which prints out the ticket wo ID
*/

export class TicketContainer extends Component {
    constructor(props) {
        super(props);
        /**
         * Declare global state variables for access across components here.
         */
        this.state = {
            DropNoteProps:{
                showNote: false,
                text: '',
                level: 'yellow',
                timeout: 0
            },
            Ticket:props.Ticket
        }
        /**
         * Bind functions here for access in child components.
         */
        this.UpdateDropNote = this.UpdateDropNote.bind(this)
        this.CloseNote = this.CloseNote.bind(this);
        this.UpdateTicket = this.UpdateTicket.bind(this);
    };

    ////////////TICKET FUNCTIONS/////////////////
    /**
     * Updates the ticket state by mapping the provided object
     * This function would take a ticket object and map it to the current tickets state
     * Once the ticket is updated, any forms which have the ticket object passed as a prop will automatically update.
     */
    UpdateTicket(newticket={}) {
        console.log("Updating Ticket", newticket)
        GlobalTicketNumber = GlobalTicketNumber + 1;
        this.setState({
            Ticket:{
                wo:{
                    id:GlobalTicketNumber
                }
            }
        });
    }
    /////////////END FUNCTIONS///////////////////

    /////////DROP NOTE FUNCTIONS/////////////////
    /**
     * Closes a note by modifying its showNote and timeout state.
     */
    CloseNote(){
        this.setState(state => ({
            DropNoteProps:{
                showNote:false,
                timeout:0
            }
        }));
    }

    /**
     * Updates a notes state using the provided values
     */
    UpdateDropNote(level="yellow", text, timer=null) {
        this.setState({
            DropNoteProps:{
                showNote:true,
                text:text,
                timeout:timer,
                level:level
            }
        });
    }
    /////////////END FUNCTIONS///////////////////

    ////////////////RENDER///////////////////////
    render() {
        return(
            <div className = "container" id = "ticket-container">
                <div>{this.state.Ticket.wo.id}</div>
                <TestTriggerFromComponent UpdateDropNote = {this.UpdateDropNote}></TestTriggerFromComponent>
                <ActionButton 
                    id = "Update-Ticket"
                    text = "Update Count"
                    ClickFunction = {this.UpdateTicket}
                    data = {{}}
                />
                <FormContainer 
                    Ticket = {this.state.Ticket}
                    id = "form-example"
                />
                <DropNote 
                    text = {this.state.DropNoteProps.text}
                    level = {this.state.DropNoteProps.level}
                    timeout = {this.state.DropNoteProps.timeout}
                    showNote = {this.state.DropNoteProps.showNote}
                    CloseNote = {this.CloseNote}
                />
            </div>
        )
    }
}
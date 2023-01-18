import React, { Component } from 'react';

export class ActionButton extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * Click event handler
     */
    handleClick(e){
        console.log("Clicking!")
        this.props.ClickFunction(this.props.data)
    }

    render() {
        return(
            <div>
                <button 
                    onClick = {this.handleClick} 
                    className = "Action-Button" 
                    id = {this.props.id}>
                        {this.props.text}
                </button>
            </div>
        );
    }
}
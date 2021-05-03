import React, {Component} from 'react'
import { DetailsContainer, Header, InnerContainer, SubHeader__one, SubHeader__two } from './FriendCardElements'
import {Button} from 'react-bootstrap';

import './details.css';

class Details extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggle: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //change state
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    };
    
    render() {
        return (
            <div>
                <DetailsContainer>
                    <InnerContainer>
                        <Header>@trex</Header>
                        <button onClick={this.handleClick}  class="btn" style={{
                            width: 150, 
                            height: 35, 
                            marginLeft: 150, 
                            marginTop: 25,
                        }} >{this.state.isToggle ? "Remove Friend" : "Add Friend"}</button>
                        <SubHeader__one>19, United States</SubHeader__one>
                        <SubHeader__two>About Me: Hello I'm trex! Let's play! </SubHeader__two>
                    </InnerContainer>
                </DetailsContainer>
            </div>
        )
    }
}

export default Details

import React from 'react'
import { DetailsContainer, Header, InnerContainer, SubHeader__one, SubHeader__two } from './ProfileCardElements'

const Details = () => {
    return (
        <div>
            <DetailsContainer>
                <InnerContainer>
                    <Header>@trex</Header>
                    <SubHeader__one>20, United States</SubHeader__one>
                    <SubHeader__two>About Me: hello i am trex, i like frogs </SubHeader__two>
                </InnerContainer>
            </DetailsContainer>
        </div>
    )
}

export default Details

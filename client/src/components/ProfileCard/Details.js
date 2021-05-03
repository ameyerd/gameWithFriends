import React from 'react'
import { DetailsContainer, Header, InnerContainer, SubHeader__one, SubHeader__two } from './ProfileCardElements'

const Details = () => {
    return (
        <div>
            <DetailsContainer>
                <InnerContainer>
                    <Header>@seagull</Header>
                    <SubHeader__one>20, United States</SubHeader__one>
                    <SubHeader__two>About Me: Hi! I love gaming! </SubHeader__two>
                </InnerContainer>
            </DetailsContainer>
        </div>
    )
}

export default Details

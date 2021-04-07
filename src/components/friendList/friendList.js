
import React from 'react';
import Icon1 from '../../images/img1.jpg';
import Icon2 from '../../images/img2.jpg';
import Icon3 from '../../images/img3.jpg';
import {friendListContainer, friendListH1, friendListWrapper, friendListCard, friendListIcon, friendListP , friendListH2} from './friendListElements';

const friendList = () => {
    return (
        <>
            <friendListContainer id='friendList'>
                <friendListH1>Friends</friendListH1>
                <friendListWrapper>
                    <friendListCard>
                        <friendListIcon src={Icon1}/>
                        <friendListH2>Friend 1</friendListH2>
                        <friendListP>@gamer101</friendListP>
                    </friendListCard>
                    <friendListCard>
                        <friendListIcon src={Icon2}/>
                        <friendListH2>Friend 2</friendListH2>
                        <friendListP>@xXsniperXx</friendListP>
                    </friendListCard>
                    <friendListCard>
                        <friendListIcon src={Icon3}/>
                        <friendListH2>Friend 3</friendListH2>
                        <friendListP>@chickens</friendListP>
                    </friendListCard>
                </friendListWrapper>
            </friendListContainer>
        </>
    )
}

export default friendList

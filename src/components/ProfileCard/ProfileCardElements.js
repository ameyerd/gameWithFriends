import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    width: 1100px;
    height: 500px;
    display: flex;
    border-radius: 26px;
    position: relative;
    border: 2px solid #DA4264;
    background-color: rbga(246, 39, 39, 0.2);
    backdrop-filter: blur(10px);
`;

export const SideImageContainer = styled.div`
    display: flex;
    flex: 1;
    left: 70px;
    top: 80px;
    position: relative;
`;

export const Hname = styled.h3`
    display: flex;
    left: -170px;
    top: 260px;
    position: relative;
    color: #DA4264;
`;

export const DetailsContainer = styled.div`
    height: 100%
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%
`;

export const Header = styled.h1`
    margin: 10px 0;
    color: #DA4264;
    font-weight: 700;
    font-size: 45px;
`;

export const SubHeader = styled.h1`
    margin: 10px 0;
    color: #000;
    font-weight: 500;
    font-size: 20px;
`;
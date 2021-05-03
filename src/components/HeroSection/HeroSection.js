import React, {useState} from 'react';
import Video from '../../videos/valoranttrailer.mp4';
import {SUButton} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
// import Alert from 'react-popup-alert';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
      
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [alert, setAlert] = useState({
    //     type: 'error',
    //     text: 'This is a alert message',
    //     show: false
    //   })
    
    //   function onCloseAlert() {
    //     setAlert({
    //       type: '',
    //       text: '',
    //       show: false
    //     })
    //   }
    
    //   function onShowAlert(type) {
    //     setAlert({
    //       type: type,
    //       text: 'Demo alert',
    //       show: true
    //     })
    //   }

    return (
      <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' blurRadius={100}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Valorant</HeroH1>
                <HeroP>
                    A 5v5 Fast-Paced Tactical Shooter
                </HeroP>
                <HeroBtnWrapper>
                    <Button href="https://playvalorant.com/en-us/">Official Website</Button>
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                   <Button>Add Game To List</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
      </>
    )
}

export default HeroSection

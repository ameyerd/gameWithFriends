import React, {useState} from 'react';
import Video from '../../videos/4K_247.mp4';
import {SUButton} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
      
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>

        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' blurRadius={100}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Title Text Here</HeroH1>
                <HeroP>
                    Caption Text Here
                </HeroP>
                <HeroBtnWrapper>
                    <SUButton to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true' onClick={handleShow}>
                        Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
                    </SUButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

        <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title><div class="header"><h1>Create an Account</h1></div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>What's your username?</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>What's your email?</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Create a password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Form.Group controlId="formBasicBday">
                    <Form.Label>Select your date of birth</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Form.Group controlId="formBasicGender">
                    <Form.Label>What's your gender?</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="formGender"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="formGender"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Non-Binary"
                            name="formGender"
                            id="formHorizontalRadios3"
                        />
                </Form.Group>
                <div class="pad"><p>       </p></div>
                <Button size="lg" block variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Modal.Body>
        </Modal>

      </>
    )
}

export default HeroSection

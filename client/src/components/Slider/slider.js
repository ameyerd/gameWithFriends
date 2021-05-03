import React, { Component } from 'react'
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import './slider.css'

class Vertical extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 60,
      OneValue: 65,
      TwoValue: 95,
      ThreeValue: 60,
      FourValue: 80,
      reverseValue: 8
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeOne = (value) => {
    this.setState({
      OneValue: value
    })
  }

  handleChangeTwo = (value) => {
    this.setState({
      TwoValue: value
    })
  }

  handleChangeThree = (value) => {
    this.setState({
      ThreeValue: value
    })
  }

  handleChangeFour = (value) => {
    this.setState({
      FourValue: value
    })
  }

  render () {
    const { value, OneValue, TwoValue, ThreeValue, FourValue } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
            <h6>Extroversion</h6>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='horizontal'
              labels={{0:'Introverted', 100: 'Extroverted'}}
              onChange={this.handleChange}
            />
            <h6>Openness</h6>
            <Slider
                min={0}
                max={100}
                value={OneValue}
                orientation='horizontal'
                labels={{0:'Closed', 100: 'Open'}}
                onChange={this.handleChangeOne}
            />
            <h6>Agreeableness</h6>
            <Slider
                min={0}
                max={100}
                value={TwoValue}
                orientation='horizontal'
                labels={{0:'Critical', 100: 'Empathetic'}}
                onChange={this.handleChangeTwo}
            />
            <h6>Conscientiousness</h6>
            <Slider
                min={0}
                max={100}
                value={ThreeValue}
                orientation='horizontal'
                labels={{0:'Careful', 100: 'Implusive'}}
                onChange={this.handleChangeThree}
            />
            <h6>Neuroticism</h6>
            <Slider
                min={0}
                max={100}
                value={FourValue}
                orientation='horizontal'
                labels={{0:'Sensitive', 100: 'Confident'}}
                onChange={this.handleChangeFour}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Vertical
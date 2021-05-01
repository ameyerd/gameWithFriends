import React, { Component } from 'react'
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

import './slider.css'

class Vertical extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 50,
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

  render () {
    const { value, OneValue, TwoValue, ThreeValue } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
          <h6>---</h6>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='horizontal'
              labels={{0:'Introvert', 50: 'Ambivert', 100: 'Extrovert'}}
              onChange={this.handleChange}
            />
            <h6>---</h6>
            <Slider
                min={0}
                max={100}
                value={OneValue}
                orientation='horizontal'
                labels={{0:'low', 50: 'medium', 100: 'high'}}
                onChange={this.handleChangeOne}
            />
            <h6>---</h6>
            <Slider
                min={0}
                max={100}
                value={TwoValue}
                orientation='horizontal'
                labels={{0:'low', 50: 'medium', 100: 'high'}}
                onChange={this.handleChangeTwo}
            />
            <h6>---</h6>
            <Slider
                min={0}
                max={100}
                value={ThreeValue}
                orientation='horizontal'
                labels={{0:'low', 50: 'medium', 100: 'high'}}
                onChange={this.handleChangeThree}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Vertical
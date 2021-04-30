import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardItem from '../friendCardItem/CardItem';
import '../friendCardItem/Cards.css';
import valorant from '../../images/valorantlogo.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>

        <Slider {...settings}>
            <div className='cards__wrapper'>
                <CardItem src={valorant}
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
            <div className='cards__wrapper'>
                <CardItem src='img'
                text='test'
                label='@test'
                path='/games/valorant'
                />
            </div>
          
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 5000px;
}

.slick-next:before, .slick-prev:before {
    color: #DA4264;
}
`
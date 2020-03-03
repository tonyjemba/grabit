import React, { Component } from 'react';
import {Carousel,Col,Icon} from 'antd';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import styled from 'styled-components';
import '../css/componentScroll.css';
import '../media/homeproduct_media.css';

  
export default class HomeProductScroll extends Component{

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }
    render(){

   const inScrollItems= ['jacket',"colarless","bikini","socks","pants","sweaters"]

   const settings = {
     slidesToShow:4,
     slidesToScroll:1,
     autoplay:true,
     className:' leftright',
     dots:false,
     swipeToSlide: true,
  autoplaySpeed: 5000,
     responsive: [
       {
         breakpoint: 950,
         settings:{
          slidesToShow:3,
          slidesToScroll:1,
          autoplay:true,
          className:' leftright'
         }
       },
       {
        breakpoint: 745,
        settings:{
         slidesToShow:2,
         slidesToScroll:1,
         autoplay:true,
         className:' leftright'
        }
      },
      {
        breakpoint: 545,
        settings:{
         slidesToShow:1,
         slidesToScroll:1,
         autoplay:true,
         className:' leftright'
        }
      },
      {
        breakpoint: 414,
        settings:{
         slidesToShow:2,
         slidesToScroll:1,
         autoplay:true,
         className:"pa0"
        }
      }
     ]
     
     
   }
     const inScrollItem = inScrollItems.map((itemname,index)=>(
         <Col className="wids" key={index} span={8} >
        <ProductImage classname="imgc relative overflow-hidden pointer  " />
        <ProductDescription itemName={itemname}/>
         </Col>
     ))
      return(
      <div >
        <div className="bg-yellow w-100 flex flex-column justify-around absolute">
        <ArrowsAnimations className="black  z-2 tc wadth ">
        <div className="animated faster fadeOutLeft  fadeInLeft pointer" onClick={this.previous}><Icon type="left"/></div>
        </ArrowsAnimations>
        <ArrowsAnimations className="black  z-2 tc wadth2  ">
        <div className="animated faster fadeOutRight  fadeInRight pointer" onClick={this.next}><Icon type="right"/></div>
        </ArrowsAnimations>
        </div>
        <Carousel ref={node => (this.carousel = node)} {...settings}>{inScrollItem}</Carousel>
      </div>
      )
    }
  }
  
  const ArrowsAnimations = styled.div`
  .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .animated.faster {
      -webkit-animation-duration: 500ms;
      animation-duration: 500ms;
    }
   
  @-webkit-keyframes fadeOutUp {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }
    
    @keyframes fadeOutUp {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    }
    
    .fadeOutUp {
      -webkit-animation-name: fadeOutUp;
      animation-name: fadeOutUp;
    }
  
    
  @keyframes fadeOutRight {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }
    
    .fadeOutRight {
      -webkit-animation-name: fadeOutRight;
      animation-name: fadeOutRight;
    }
  
    
  @-webkit-keyframes fadeOutLeft {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }
    
    @keyframes fadeOutLeft {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }
    
    .fadeOutLeft {
      -webkit-animation-name: fadeOutLeft;
      animation-name: fadeOutLeft;
    }
  
    :hover{
        
  @keyframes fadeInDown {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    .fadeInDown {
      -webkit-animation-name: fadeInDown;
      animation-name: fadeInDown;
    }
    @-webkit-keyframes bounceInLeft {
      from,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    
      0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
      }
    
      60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
      }
    
      75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }
    
      90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
      }
    
      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
  @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    .fadeInLeft {
      -webkit-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
    }
    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    .fadeInRight {
      -webkit-animation-name: fadeInRight;
      animation-name: fadeInRight;
    }
    }
  `;
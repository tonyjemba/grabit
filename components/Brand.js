import React, { Component } from 'react';
import {Carousel,Icon} from 'antd';
import styled from 'styled-components';
import '../css/brand.css';
import '../media/brand_medis.css';
 
 
export default class Brand extends Component {
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
  render() {
  
    
   const brands= ['versaci',"champion","prada","puma","Lambogini","flower","coco","winter","zara","clarks","windse"];

   const brand = brands.map((brandname,index)=>(
    <div key={index}>
      <div>{brandname}</div>
    </div>
))

const settings ={
  slidesToShow:7,
  slidesToScroll:1,
  autoplay:true,
  dots:false,
  speed:2000,
  autoplaySpeed: 10000,
  responsive: [
    {
     breakpoint: 745,
     settings:{
      slidesToShow:5,
      slidesToScroll:1,
      autoplay:true,
      dots:false,
     speed:2000,
     autoplaySpeed: 10000
    
     }
   },
   {
     breakpoint: 545,
     settings:{
      slidesToShow:4,
      slidesToScroll:1,
      autoplay:true,
      dots:false,
     speed:2000,
      autoplaySpeed: 10000
    
     }
   }
  ]
}
 
    return (
     <LabelArrow className="flex flex-row justify-center w-100 space-around">
       <div className="black tc wath  z-1">
        <div className="animated faster fadeOutLeft  fadeInLeft pointer" onClick={this.previous}><Icon type="left"/></div>
        </div>
        <div className="tc lefrig  pointer w-80">
      
        <Carousel ref={node => (this.carousel = node)} {...settings}>{brand}</Carousel>
        
      </div>
      <div className="black tc  wath2 ">
        <div className="animated faster fadeOutRight  fadeInRight pointer" onClick={this.next}><Icon type="right"/></div>
        </div>
     </LabelArrow>
    );
  }
}

const LabelArrow = styled.div`
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
import dynamic from "next/dynamic";
import React, { Component } from "react";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});



export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=9000"> <img src="/images/10k.jpg" alt="1" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=2000"> <img src="/images/6k.jpeg" alt="2" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=8000"><img src="/images/8k.jpg" alt="3" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/13k.jpeg" alt="4" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/4k.jpeg" alt="5" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/gym.jpeg" alt="6" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/14k.jpg" alt="7" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/3k.jpeg" alt="8" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/2k.jpg" alt="9" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/11k.jpeg" alt="10" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/7k.jpeg" alt="11" /></a>
    },
    {
        key: uuidv4(),
        content: <a href="/9000?edificio=7000"><img src="/images/9k.jpg" alt="12" /></a>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
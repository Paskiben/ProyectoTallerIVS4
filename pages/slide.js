import dynamic from "next/dynamic";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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
      content: <div><a href="/9000?edificio=10000"> <img id="fotos" src="/images/10k.jpg" alt="1" /></a>
        <h1 className="Nombres">Edificio 10000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=2000"> <img id="fotos" src="/images/6k.jpg" alt="2" /></a>
        <h1 className="Nombres">Edificio 6000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=8000"><img id="fotos" src="/images/8k.jpg" alt="3" /></a>
        <h1 className="Nombres">Edificio 8000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=13000"><img id="fotos" src="/images/13k.png" alt="4" /></a>
        <h1 className="Nombres">Edificio 13000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=4000"><img id="fotos" src="/images/4k.jpg" alt="5" /></a>
        <h1 className="Nombres">Edificio 4000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=Gimnasio"><img id="fotos" src="/images/gym.jpg" alt="6" /></a>
        <h1 className="Nombres">Gimnasio</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=14000"><img id="fotos" src="/images/14k.jpg" alt="7" /></a>
        <h1 className="Nombres">Edificio 14000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=3000"><img id="fotos" src="/images/3k.jpg" alt="8" /></a>
        <h1 className="Nombres">Edificio 3000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=2000"><img id="fotos" src="/images/2k.jpg" alt="9" /></a>
        <h1 className="Nombres">Edificio 2000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=11000"><img id="fotos" src="/images/11k.png" alt="10" /></a>
        <h1 className="Nombres">Edificio 11000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=7000"><img id="fotos" src="/images/7k.jpg" alt="11" /></a>
        <h1 className="Nombres">Edificio 7000</h1>
      </div>
    },
    {
      key: uuidv4(),
      content: <div><a href="/9000?edificio=9000"><img id="fotos" src="/images/9k.jpg" alt="12" /></a>
        <h1 className="Nombres">Edificio 9000</h1>
      </div>
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
      <div className="edificios">
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
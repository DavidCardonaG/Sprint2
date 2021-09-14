import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const items = [
  {
    src: 'https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631525477/mulan_ldwd3c.png',
    button: "Ver Ahora",
    button2: 'Ver Despues'
  },
  {
    src: 'https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631525290/raya_qjg65s.png',
    button: "Ver Ahora",
    button2: 'Ver Despues'
  },
  {
    src: 'https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631525474/unidos_crvzvm.png',
    button: "Ver Ahora",
    button2: 'Ver Despues'
  }
];

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  width="100%" height="430px"
        />
        <button id="btn1"><i id="fas2" class="fas fa-play"></i>VER AHORA</button>
        <button id="btn2"><i class="fas fa-plus"></i>VER DESPUES</button>
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrusel;
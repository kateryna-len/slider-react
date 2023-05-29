import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import React from 'react';
import { list } from '../data';
import { FaQuoteRight } from 'react-icons/fa';

export default function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person, personId) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} className="person-img" alt={name} />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}

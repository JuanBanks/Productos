import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = (props) => {
  const settings = ({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });

  return (
  
    <Slider  {...settings} >
      {props.image && props.image.length > 0 ? (
        props.image.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                margin: '0 auto' // Centra la imagen
              }}
            />
          </div>
        ))
      ) : (
        <p>No hay imágenes para mostrar</p>
      )}
    </Slider>
  
  );
}

export default Carrusel

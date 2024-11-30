import React, { useEffect, useRef } from 'react';
import Flickity from "react-flickity-component";
import imagesLoaded from 'imagesloaded';
import 'flickity/css/flickity.css';
import Image from './carousel_foto';
import Google from '../img/Google.png';
import star_wars from '../img/Star_wars.png';
import X from '../img/X.webp';
import Apple from '../img/apple.jpg';
import Index from '../img/Index.jpg';
import Microsoft from '../img/microsoft.jpg';

const flickityOptions = {
  cellAlign: "left",
  wrapAround: true,
  pageDots: false,
  prevNextButtons: true,
  groupCells: 1,
  contain: false,
};

const Slider = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Используем imagesLoaded для инициализации Flickity после загрузки всех изображений
    imagesLoaded('.carousel', () => {
      flickityRef.current?.reloadCells();
    });
  }, []);

  return (
    <Flickity
      className="carousel"
      flickityRef={(ref) => (flickityRef.current = ref)}
      options={flickityOptions}
    >
      <div className="carousel_item">
        <Image image={Google}/>
      </div>
      <div className="carousel_item">
        <Image image={star_wars}/>
      </div>
      <div className="carousel_item">
        <Image image={X}/>
      </div>
      <div className="carousel_item">
        <Image image={Apple}/>
      </div>
      <div className="carousel_item">
        <Image image={Index}/>
      </div>
      <div className="carousel_item">
        <Image image={Microsoft}/>
      </div>
    </Flickity>
  );
};

export default Slider;

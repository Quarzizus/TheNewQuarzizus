import concert from "../images/Concert.webp";
import lazy from "../images/Lazy.webp";
import ecommerce from "../images/E-commerce.webp";
import weather from "../images/Weather.webp";

export const initialState = [
  {
    id: 1,
    title: "E-Commerce",
    image: ecommerce,
    description: `This project is set in Platzi,
     (they are a start-up of e-learning) in which you will be able
      to buy merchandising and pay with Paypal. 
      Also, it has geolocalización for getting easier the address. 
      It is built with React and leaflet for the maps.`,
    repo: "https://github.com/Quarzizus/Tyni-e-commerce",
    page: "https://e-platzicommerce.web.app/",
  },
  {
    id: 2,
    title: "Radiohead Concert",
    image: concert,
    description: `Radiohead concert is a platform where you can 
    reserve your ticket and look who more have reserved too. 
    This project is built with React and JSON placeholder as fake API.`,
    repo: "https://github.com/Quarzizus/Radiohead",
    page: "https://radiohead-da064.web.app/",
  },
  {
    id: 3,
    title: "Lazy Loading",
    image: lazy,
    description: `Lazy loading is a performance technique that seeks
     to render only the elements that are in the viewport. 
     It uses the foxes API and is built with JavaScript.`,
    repo: "https://github.com/Quarzizus/Lazy",
    page: "https://quarzizus.github.io/Lazy/",
  },
  {
    id: 4,
    title: "Sweet Weather",
    image: weather,
    description: `Sweet Weather is a Weather App built with React,
     deployed with Firebase. It uses the API: openweather.`,
    repo: "https://github.com/Quarzizus/Quarzizus-Weather",
    page: "https://quarzizus-weather.web.app/",
  },
];

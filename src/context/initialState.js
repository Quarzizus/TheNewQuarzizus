import ecommerce from "../images/E-commerce.webp";
import weather from "../images/Weather.webp";
import chat from "../images/Quarshichat.webp";
import RPS from "../images/RPS.webp";
import Petgram from "../images/Petgram.webp";
import DevUnited from "../images/DevUnited.png";

export const initialState = [
  {
    id: 0,
    title: "Quarzizus DevUnited",
    image: DevUnited,
    description: `This project has two inspirations: pixel art and twitter.
    We will be able to connect and express all that we want through tweets.`,
    repo: "https://github.com/Quarzizus/Acamica-Sprint-4",
    page: "https://quarzizusdevsunited.web.app",
  },
  {
    id: 1,
    title: "PetGram",
    image: Petgram,
    description: `PetGram is a replica of Instagram based on domestic animals. 
      It is built in React and React Apollo like graphql client. Also, is a PWA.`,
    repo: "https://github.com/Quarzizus/PetGram",
    page: "https://petgram-d7d78.web.app",
  },
  {
    id: 2,
    title: "Sweet Weather",
    image: weather,
    description: `Sweet Weather is a Weather App built with React,
      deployed with Firebase. It uses the API: openweather.`,
    repo: "https://github.com/Quarzizus/Quarzizus-Weather",
    page: "https://quarzizus-weather.web.app/",
  },
  {
    id: 3,
    title: "QuarShiChat",
    image: chat,
    description: `You can create channels for talk with your friends.
      QuarShitChat is a chat realtime made with firebase (Database, Authentication, Hosting) and React.`,
    repo: "https://github.com/Quarzizus/QuarShiChat",
    page: "https://quarshichat.web.app/",
  },
  {
    id: 4,
    title: "RPS-Quargame",
    image: RPS,
    description: `Try your luck with this game and leave your score at the top.
    It was built with React and deployed with Firebase.`,
    repo: "https://github.com/Quarzizus/Rock-Paper-Scissors",
    page: "https://rps-quargame.web.app/",
  },
  {
    id: 5,
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
];

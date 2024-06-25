import ecommerce from "../images/projects/E-commerce.webp";
import weather from "../images/projects/Weather.webp";
import chat from "../images/projects/Quarshichat.webp";
import RPS from "../images/projects/RPS.webp";
import Petgram from "../images/projects/Petgram.webp";
import DevUnited from "../images/projects/DevUnited.png";
import Keep from "../images/projects/Keep.png";
import Memory from "../images/projects/Memory.png";

export const initialState = [
  {
    id: 7,
    title: "Quarzizus Memory",
    image: Memory,
    description: `
    Quarzizus Memory es un juego enfocado en la memoria con temática de animales.
    Está construido con React + TypeScript.`,
    repo: "https://github.com/Quarzizus/QuarzizusMemory",
    page: "https://quarzizusmemory.web.app/",
  },
  {
    id: 5,
    title: "RPS-Game",
    image: RPS,
    description: `El juego de piedra papel o tijera llevado a la web.
    Está construido con React.`,
    repo: "https://github.com/Quarzizus/Rock-Paper-Scissors",
    page: "https://rps-quargame.web.app/",
  },
  {
    id: 1,
    title: "DevUnited",
    image: DevUnited,
    description: `Un foro cuyo diseño está inspirado en el pixel art.
    Está construido en React utilizando los servicios de firebase.`,
    repo: "https://github.com/Quarzizus/Acamica-Sprint-4",
    page: "https://quarzizusdevsunited.firebaseapp.com",
  },
  {
    id: 3,
    title: "Sweet Weather",
    image: weather,
    description: `Sweet Weather es una aplicación para consultar con detalle
    el clima de cualquier parte del mundo. Está construida en React y utiliza la API de
    openweather.`,
    repo: "https://github.com/Quarzizus/Quarzizus-Weather",
    page: "https://quarzizus-weather.web.app/",
  },
  // {
  //   id: 2,
  //   title: "PetGram",
  //   image: Petgram,
  //   description: `PetGram is a replica of Instagram based on domestic animals.
  //     It is built in React and React Apollo like graphql client. Also, is a PWA.`,
  //   repo: "https://github.com/Quarzizus/PetGram",
  //   page: "https://petgram-d7d78.web.app",
  // },
  // {
  //   id: 0,
  //   title: "Quarzizus Keep",
  //   image: Keep,
  //   description: `This project is a to-do app inspired by google keep.
  //   With it's we can create notes and sort in of draggable way.
  //   Also, it has a Mansory design.`,
  //   repo: "https://github.com/Quarzizus/QuarzizusKeep",
  //   page: "https://quarzizuskeep.web.app",
  // },
  // {
  //   id: 4,
  //   title: "QuarShiChat",
  //   image: chat,
  //   description: `You can create channels for talk with your friends.
  //     QuarShitChat is a chat realtime made with firebase (Database, Authentication, Hosting) and React.`,
  //   repo: "https://github.com/Quarzizus/QuarShiChat",
  //   page: "https://quarshichat.web.app/",
  // },
];

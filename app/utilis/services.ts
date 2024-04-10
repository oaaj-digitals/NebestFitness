import { StaticImageData } from "next/image";

import personalTrainingImg from "../assets/images/personal-training.png";
import nutritionImg from "../assets/images/brooke-lark-nTZOILVZuOg-unsplash (2).jpg";
import martialArtImg from "../assets/images/mark-adriane-FH6JcaCrYJ0-unsplash (2).jpg";
import selfDefenseImg from "../assets/images/samuel-castro-cwScwJy5HQE-unsplash (2).jpg";

export interface Service {
  id?:number;
  title: string;
  image: string | StaticImageData;
}

const services : Service[] = [
  {
    id:1,
    title: "Personal Training",
    image: personalTrainingImg,
  },
  {
    id:2,
    title: "Nutrition",
    image: nutritionImg,
  },
  {
    id:3,
    title: "Marial Art",
    image: martialArtImg,
  },
  {
    id:4,
    title: "Self Defense",
    image: selfDefenseImg,
  },
  {
    id:5,
    title: "Online Training",
    image: selfDefenseImg,
  },
]

export default services;
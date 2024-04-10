import { StaticImageData } from "next/image";

import personalTrainingImg from "../assets/images/personal-training.png";
import nutritionImg from "../assets/images/brooke-lark-nTZOILVZuOg-unsplash (2).jpg";
import martialArtImg from "../assets/images/mark-adriane-FH6JcaCrYJ0-unsplash (2).jpg";
import selfDefenseImg from "../assets/images/samuel-castro-cwScwJy5HQE-unsplash (2).jpg";

export interface Service {
  title: string;
  image: string | StaticImageData;
}

const services : Service[] = [
  {
    title: "Personal Training",
    image: personalTrainingImg,
  },
  {
    title: "Nutrition",
    image: nutritionImg,
  },
  {
    title: "Marial Art",
    image: martialArtImg,
  },
  {
    title: "Self Defense",
    image: selfDefenseImg,
  },
  {
    title: "Online Training",
    image: selfDefenseImg,
  },
]

export default services;
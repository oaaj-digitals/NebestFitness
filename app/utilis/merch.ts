import { StaticImageData } from "next/image";
import premiumHoodieFront from "../assets/images/merchs/Nebestfitness_Premium_Hoodie_Front.png";
import premiumHoodieBack from "../assets/images/merchs/Nebestfitness_Premium_Hoodie_Back.png";

import lightweightShirtFront from "../assets/images/merchs/Nebestfitness_LightWeight_Shirt_Front.png";
import lightweightShirtBack from "../assets/images/merchs/Nebestfitness_LightWeight_Shirt_Back.png";

import BeTheBestShirtFront from "../assets/images/merchs/NebestFitness_Be_the_best_Shirt_Front.png"
import BeTheBestShirtBack from "../assets/images/merchs/NebestFitness_Be_the_best_Shirt_Back.png"

import LegacyShirtFront from "../assets/images/merchs/NebestFitness_Legacy_Shirt_Front.png"
// import LegacyShirtBack from "../assets/images/merchs/"

import FaceCapFront from "../assets/images/merchs/NebestFitness_Face_Cap_Front.png"
import FaceCapBack from "../assets/images/merchs/NebestFitness_Face_Cap_Back.png"
import FaceCapSide from "../assets/images/merchs/NebestFitness_Face_Cap_Side.png"

export interface Merch {
  displayimg: string | StaticImageData;
  imgs?: string[] | StaticImageData[];
  price?: number;
  gender?: string;
  title?: string;
  description?:string;
  availableSizes?:string | string[];
}

const merchs : Merch[]=[
  {
    title: "Premium Hoodie",
    displayimg: premiumHoodieFront,
    imgs:[premiumHoodieBack],
    price: 45.00,
    gender: "Unisex",
    description:"Perfect for warm-ups, post-workout comfort, or casual wear, our unisex hoodie keeps you cozy while maintaining a sleek alethic look.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    title: "Lightweight Shirt",
    displayimg: lightweightShirtFront,
    imgs:[lightweightShirtBack],
    price: 35.00,
    gender: "Unisex",
    description:"Designed for movement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
    {
    title: "NebestFitness Face Cap",
    displayimg: FaceCapFront,
    imgs:[FaceCapSide,FaceCapBack],
    price: 30.00,
    gender: "Unisex",
    description:"A stylish and functional accessory, our face caps provide shade ad a sporty look for any fitness enthusiast.",
    availableSizes:'One size fits all (adjustable strap)',
  },
  {
    title: "NebestFitness Legacy Shirt",
    displayimg: LegacyShirtFront,
    imgs:[lightweightShirtBack],
    price: 35.00,
    gender: "Unisex",
    description:"Designed for movement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    title: "NebestFitness Be the Best Shirt",
    displayimg: BeTheBestShirtFront,
    imgs:[BeTheBestShirtBack],
    price: 35.00,
    gender: "Unisex",
    description:"Designed for movement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
]

export default merchs;
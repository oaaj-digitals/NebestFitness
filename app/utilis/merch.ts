import { StaticImageData } from "next/image";
import premiumHoodie from "../assets/images/Nebestfitness Premium Hoodie.png"
import shirt1 from "../assets/images/Nebestfitness Shirt 1.png"

export interface Merch {
  displayimg: string | StaticImageData;
  imgs?: string[] | StaticImageData[];
  price: number;
  gender?: string;
  title: string;
  description?:string;
  availableSizes?:string[];
}

const merchs : Merch[]=[
  {
    displayimg: premiumHoodie,
    imgs:[premiumHoodie, shirt1],
    price: 45.00,
    gender: "Unisex",
    title: "Premium Hoodie",
    description:"Perfect for warm-ups, post-workout comfort, or casual wear, our unisex hoodie keeps you cozy while maintaining a sleek alethic look.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
  {
    displayimg: shirt1,
    price: 35.00,
    gender: "Unisex",
    title: "Lightweight Shirt",
    description:"Designed for mevement, our fitness t-shirt are lightweight, breathable and sweat-wicking, ensuring you stay cool and comfortable during workouts.",
    availableSizes:["s","m", "l", 'xl'],
  },
]

export default merchs;
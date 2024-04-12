import { StaticImageData } from "next/image";

import personalTrainingImg from "../assets/images/personal-training.png";
import personalTrainingImg2 from "../assets/images/rinke-dohmen-dKN_i-opwVw-unsplash (1).jpg";

import nutritionImg from "../assets/images/brooke-lark-nTZOILVZuOg-unsplash (2).jpg";
import nutritionImg2 from "../assets/images/eugene-Xk0jQPZseMk-unsplash.jpg";
import nutritionImg3 from "../assets/images/nadine-primeau-l5Mjl9qH8VU-unsplash.jpg";

import martialArtImg from "../assets/images/mark-adriane-FH6JcaCrYJ0-unsplash (2).jpg";
import martialArtImg2 from "../assets/images/jonathan-borba-Yf1SegAI84o-unsplash.jpg";
import martialArtImg3 from "../assets/images/jesse-van-vliet-hFrHNE-VbFs-unsplash.jpg";

import selfDefenseImg from "../assets/images/samuel-castro-cwScwJy5HQE-unsplash (2).jpg";
import selfDefenseImg2 from "../assets/images/gold-bjj-vQnlu9EUBDo-unsplash (1).jpg";
import selfDefenseImg3 from "../assets/images/nathan-dumlao-QMhc3D_zwJ0-unsplash.jpg";

import onlineTrainingImg from "../assets/images/online-fitness.jpg";
import onlineTrainingImg2 from "../assets/images/full-shot-man-doing-plank.jpg";
import onlineTrainingImg3 from "../assets/images/full-shot-woman-working-out.jpg";

import thumbnail1 from "../assets/images/vThumb (7).png";
import thumbnail2 from "../assets/images/vThumb (3).png";
import { title } from "process";

export type Media = {
  src: string | StaticImageData;
  type: "image" | "video"
  thumbnail?: string ;
}

export type Packages = {
  title: string;
  benefits?: string;
  amount: number | string;
}

export interface Service {
  id?:number;
  title: string;
  image: string | StaticImageData;
  description?: string | string[];
  media?: Media[];
  packages?: Packages[];
}

const services : Service[] = [
  {
    id:1,
    title: "Personal Training",
    image: personalTrainingImg,
    description:[
      "Our personalized training sessions are designed to help you achieve your fitness goals effectively and efficiently. Whether you’re looking to lose weight, build muscle tone, increase strength and conditioning, or improve cardiovascular endurance, we’ve got you covered. We will work closely with you to develop a customized workout plan tailored to your specific needs and fitness level. With a focus on proper form, technique, and progression, we’ll help you reach your goals safely and sustainably.",
      "Our personal training packages are designed to provide you with the flexibility and support you need to succeed. We offer competitive rates and various package options to fit your budget and schedule. Please contact us for detailed pricing information and to schedule your complimentary consultation."
    ],
    media: [
      {
        src: personalTrainingImg,
        type: "image"
      },
      {
        src: '/assets/videos/GVTS-2.mp4',
        type: "video",
        thumbnail: thumbnail2.src,
      },
      {
        src: personalTrainingImg2,
        type: "image"
      },
    ]
  },

  {
    id:2,
    title: "Nutrition Plan",
    image: nutritionImg,
    description:[
      "At NebestFitness, we’re here to support you on your journey to better health through personalized nutrition guidance. Whether you’re vegan, vegetarian, or have specific food allergies, we can help you meet your nutritional needs.",
      "Our customized meal plans are designed to assist you in achieving your goals, whether it’s weight loss, muscle growth, or simply improving your overall well-being. Let us take the guesswork out of meal planning and provide you with the support you need.",
    ],
    media: [
      {
        src: nutritionImg2,
        type: "image"
      },
      {
        src: nutritionImg3,
        type: "image"
      },
      {
        src: nutritionImg,
        type: "image"
      },
    ]
  },

  {
    id:3,
    title: "Marial Art Training",
    image: martialArtImg,
    description:[
      "We're passionate about martial arts and dedicated to helping you master various disciplines including boxing, kickboxing, Muay Thai, judo, and taekwondo. Whether you're a beginner or an experienced practitioner, our experienced instructors will guide you every step of the way.",
      "In addition to learning self-defense techniques and mastering an art form, martial arts training can also contribute to weight loss and overall conditioning, providing a holistic approach to fitness.",
    ],
    media: [
      {
        src: "/assets/videos/video-4.mp4",
        type: "video",
        thumbnail: thumbnail1.src,
      },
      {
        src: martialArtImg2,
        type: "image"
      },
      {
        src: martialArtImg3,
        type: "image"
      },
    ]
  },

  {
    id:4,
    title: "Self Defense Training",
    image: selfDefenseImg,
    description:[
      "At NebestFitness, we specialize in self-defense training for all individuals, with a focus on empowering women to feel confident and secure in any situation. Our instructors have practical military experience in hand to hand combat and are dedicated to providing practical techniques and strategies that can be applied in real-life scenarios.",
      "Ready to start your journey to self-empowerment? View our pricing options below and choose the plan that fits your goals.",
    ],
    media: [
      {
        src: selfDefenseImg,
        type: "image"
      },
      {
        src: selfDefenseImg2,
        type: "image"
      },
      {
        src: selfDefenseImg3,
        type: "image"
      },
    ]
  },
  
  {
    id:5,
    title: "Online Training",
    image: onlineTrainingImg,
    description:"We offer three comprehensive packages to support you on your fitness journey:",
    media: [
      {
        src: onlineTrainingImg3,
        type: "image"
      },
      {
        src: onlineTrainingImg2,
        type: "image"
      },
      {
        src: onlineTrainingImg,
        type: "image"
      },
    ],
    packages: [
      {
        title: "Bronze Package",
        benefits: "A Personalized workout plan tailored to your goals",
        amount: "£100<span>/month</span>"
      },
      {
        title: "Silver Package",
        benefits: "<ul><li>Personalized workout plan</li><li>Customized nutrition plan</li> <li>24-hour response time to any questions or inquiries</li></ul>",
        amount: "£150<span>/month</span>"
      },
      {
        title: "Gold Package",
        benefits: "<ul><li>Personalized workout plan</li><li>Customized nutrition plan</li> <li>Minimum of 4-hour response time to any questions or inquiries</li><li>Weekly or bi-weekly Zoom calls for personalized coaching and goal refinement</li></ul>",
        amount: "£200<span>/month</span>"
      },
    ]
  },
]

export default services;
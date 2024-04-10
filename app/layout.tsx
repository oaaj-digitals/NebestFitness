import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-oxanium",
  display: "fallback",
});

export const metadata: Metadata = {
  title: {
    template: 'NebestFitness | %s ',
    default: 'NebestFitness', // a default is required when creating a template
  },
  description: "At NebestFitness, we believe in the power of personalized fitness. We are passionate and dedicated to guiding you towards your fitness goals with a tailored approach that considers your unique needs and aspirations. We are not just a fitness organization, we are your partner in health.",
  keywords: "Nebest, Nebest fitness, NebestFitness, fitness, workout, exercise, gym, health, nutrition, weight loss, muscle building, home gym, personal trainer, fitness tips, heatlthy receipes, motivation,  personal training, weight loss program, nutrition plans, wellness program, martial art training, self-defense training, kick-boxing, boxing, judo, karate, cardio, strength training, HIIT, CrossFit, bodyweight exercise, exercise, weights, dumbbells, treadmills, resistance bands, flexibility, squats, pushups, biceps, triceps, triceps extension, biceps curls, portion control, overcoming challenges,setting goals, staying commited, personal training for weight loss, affordable personal training near me, certified personal trainers, personal boxing classes, group fitness classes for all level, best personal trainer in UK, affordable workout trainer in UK"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${oxanium.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Oswald, Bebas_Neue, Anton } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", 
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
})

import { useState } from "react";
import data from "../data/data.json";
import { rng } from "./assets/js/main.js";

let i = rng(0, data.backgrounds.static.length - 1);

const useBackground = () => {
  const [background, setBackground] = useState({
    all: data.backgrounds.static,
    total: data.backgrounds.static.length,
    current: data.backgrounds.static[i],
    index: i,
  });
  return [background, setBackground];
};

export default useBackground;

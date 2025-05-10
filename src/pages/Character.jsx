import { useState } from "react";
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle } from "react-icons/hi2";

import loidImg from "../assets/loid-forger.png";
import yorImg from "../assets/yor-forger.png";
import anyaImg from "../assets/anya-forger.png";
import bondImg from "../assets/bond-forger.png";

const characters = [
  {
    name: "Loid Forger",
    image: loidImg,
    description:
      "Loid Forger (ロイド・フォージャー, Roido Fōjā?) is one of the main characters of the SPY x FAMILY series. His true name is currently unknown, as he has discarded everything about his past to work for his home country, Westalis, as an undercover spy who acts under the codename 'Twilight' (〈黄昏たそがれ〉, <Tasogare>?).",
  },
  {
    name: "Yor Forger",
    image: yorImg,
    description:
      "Yor Forger (ヨル・フォージャー, Yor Fōjā?) is another key member of the Forger family in SPY x FAMILY. She is an assassin known as 'Thorn Princess.' Despite her deadly occupation, she is caring and protective of her family.",
  },
  {
    name: "Anya Forger",
    image: anyaImg,
    description:
      "Anya Forger (アーニャ・フォージャー, Ānya Fōjā?) is a main character in the SPY x FAMILY series. She is an adopted daughter of Loid and Yor. Anya has the ability to read minds, a result of her being a test subject of a secret experiment. Her mischievous nature adds charm to the family.",
  },
  {
    name: "Bond Forger",
    image: bondImg,
    description:
      "Bond Forger (ボンド・フォージャー, Bondo Fōjā?) is one of the main characters of the SPY x FAMILY series. He is the pet dog of the Forger Family. Formerly known as Subject 8 (実験体8号, Jikkentai Hachi-gō?, lit. Experimental Subject No. 8) with the ability to see into the future. He is loyal and deeply attached to Anya.",
  },
];

export default function Character() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % characters.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <div className="character-frame">
      <div className="character-nav side left">
        <HiOutlineArrowLeftCircle className="nav-icon" onClick={handlePrevious} />
      </div>

      <div className="character-content">
        <div className="character-left">
          <h2 className="character-name">{characters[current].name}</h2>
          <p className="character-description">
            {characters[current].description}
          </p>
        </div>

        <div className="character-right">
          <img
            src={characters[current].image}
            alt={characters[current].name}
            className="character-image"
          />
        </div>
      </div>

      <div className="character-nav side right">
        <HiOutlineArrowRightCircle className="nav-icon" onClick={handleNext} />
      </div>
    </div>
  );
}

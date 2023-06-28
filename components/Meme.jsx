import React from "react";
import memesData from "../public/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleOnClick() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage:
        allMemeImages.data.memes[Math.floor(Math.random() * 101)].url,
    }));
  }

  return (
    <main>
      <div className="meme--form">
        <div className="meme--inputs">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
        </div>
        <button className="meme--button" onClick={handleOnClick}>
          Get new meme image 🖼️
        </button>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}

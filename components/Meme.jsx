import React from "react";
import memesData from "../public/memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function handOnClick() {
    setMemeImage(
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ].url
    );
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
        <button className="meme--button" onClick={handOnClick}>
          Get new meme image 🖼️
        </button>
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  );
}

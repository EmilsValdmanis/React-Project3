import React from "react";

export default function Meme() {
  const [allMemeImages, setallMemeImages] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setallMemeImages(data.data.memes));
  }, []);

  function handleOnClick() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage:
        allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="meme--form">
        <div className="meme--inputs">
          <input
            type="text"
            name="topText"
            className="meme--input"
            placeholder="Top Text"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            name="bottomText"
            className="meme--input"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button className="meme--button" onClick={handleOnClick}>
          Get new meme image 🖼️
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}

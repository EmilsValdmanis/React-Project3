export default function Meme() {
  return (
    <main>
      <form action="" className="meme--form">
        <div className="meme--inputs">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
        </div>
        <button className="meme--button">Get new meme image 🖼️</button>
      </form>
    </main>
  );
}

import logo from "../src/assets/logo.png";

export default function Header() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
      <p className="nav--title">Meme Generator</p>
    </nav>
  );
}

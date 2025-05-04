import profielPic from "./assets/react.svg";
function Card() {
  return (
    <div className="card">
      <img className="cardImage" src={profielPic} alt="profile picture"></img>
      <h2 className="cardTitle">Bro Code</h2>
      <p className="card-text">I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card;

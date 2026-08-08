import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ overflow: "hidden" }}>
        <img
          src="https://medicarepro.domartian.com/assets/sideimage-CO3SZXfq.png"
          alt="image"
          width={400}
          height={200}
          style={{ border: "1px solid black" }}
        />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;

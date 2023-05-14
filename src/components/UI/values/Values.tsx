import "../../../styles/sass/values.scss";
import img from "../../../assets/images/service.png";
import choice from "../../../assets/images/icon-1.png";
import guide from "../../../assets/images/icon-2.png";
import booking from "../../../assets/images/icon-3.png";

interface Box {
  id: number;
  img: string;
  heading: string;
  text: string;
}

const Values = (): JSX.Element => {
  const boxArr: Box[] = [
    {
      id: 6,
      img: choice,
      heading: "Lots of Choice",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porr  voluptates doloremque modi veniam eaque culpa illum? Illum aspernatur vel! Magnam.",
    },
    {
      id: 3,
      img: guide,
      heading: "Best tour guide",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porr  voluptates doloremque modi veniam eaque culpa illum? Illum aspernatur vel! Magnam.",
    },
    {
      id: 0,
      img: booking,
      heading: "Easy Bookings",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porr  voluptates doloremque modi veniam eaque culpa illum? Illum aspernatur vel! Magnam.",
    },
  ];
  return (
    <section className="values">
      <div className="values__container">
        <div className="values__heading">
          <h3>WHAT WE SERVE</h3>
          <div className="values__heading--head">
            <h1>TOP VALUES FOR YOU!</h1>
            <img alt="values" src={img} />
          </div>
        </div>
        <div className="values__boxes">
          {boxArr.map((box: Box) => (
            <div
              className="values__boxes--box"
              key={box.id}
              style={{ transform: `translateY(-${box.id}rem)` }}
            >
              <img src={box.img} alt="choice" />
              <h4>{box.heading}</h4>
              <div>{box.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

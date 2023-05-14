import "./testimony.scss";
import img from "../../../assets/images/Testimonial-girl1.png";
const Testimonies = (): JSX.Element => {
  return (
    <section className="testimony">
      <div className="testimony__container">
        <div className="testimony__heading">
          <h3>Testimonies</h3>
          <h1>What Our Customers says about us</h1>
        </div>
        <main className="testimony__content">
          <img src={img} alt="testimonial" />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            adipisci temporibus asperiores, atque et, laudantium officiis,
            fugiat in quam numquam saepe sint cupiditate ut vitae? Non sint
            optio cupiditate, porro natus ipsam corporis velit reiciendis,
            tenetur sit ut quasi consequuntur!
          </div>
          <h2>Kieran Wallace</h2>
          <div>Ummrah && hajj 2012</div>
        </main>
      </div>
    </section>
  );
};

export default Testimonies;

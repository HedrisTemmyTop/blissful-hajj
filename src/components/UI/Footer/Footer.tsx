
import "../../../styles/sass/footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__about">
          <h1>LOGO</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            neque eius dolorem similique, architecto illo minima voluptates?
            Sapiente quisquam velit ea? Veritatis quaerat eaque hic explicabo
            obcaecati iusto, error inventore delectus magnam repellat facilis
            perspiciatis, dolore ut quidem illo illum!
          </div>
        </section>
        <main className="footer__main">
          <ul>
            <h1>Quick as</h1>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Latest News</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
          <ul>
            <h1>Support</h1>

            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Knowledge Base</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>

            <li>
              <a href="/">Patnership</a>
            </li>
          </ul>
        </main>
        <section>
          <h1>Get in Touch</h1>
          <ul>
            <li>
              <span>Enail:</span>
              <span>info@blissfulhaj.com</span>
            </li>
            <li>
              <span>Phone:</span>
              <span>+234 816 112 6466</span>
            </li>
            <li>
              <span>FAX:</span>
              <span>+234 816 112 6466</span>
            </li>
            <li>socials</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

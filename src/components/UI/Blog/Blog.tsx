import "./blog.scss";
// import "/src/styles/sass/blog.scss";
import img from "../../../assets/images/img-blog.jpg";
import img2 from "../../../assets/images/img2-blog.jpg";
import img3 from "../../../assets/images/img3-blog.jpg";
const Blog = (): JSX.Element => {
  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__heading">
          <h2>News & Articles</h2>
          <h1>Stay Updated with Blissful Hajj</h1>
        </div>
        <main className="blog__main">
          <div className="blog__main--box">
            <img src={img} alt="blog" />
            <div className="blog__main--box-text-small">
              June 6, 2016 . Aljazeera
            </div>
            <div className="blog__main--box-text-normal">
              Change your place and get the fresh air
            </div>
          </div>
          <div className="blog__main--box">
            <img src={img2} alt="blog" />
            <div className="blog__main--box-text-small">
              June 6, 2016 . Aljazeera
            </div>
            <div className="blog__main--box-text-normal">
              Change your place and get the fresh air
            </div>
          </div>
          <div className="blog__main--box">
            <img src={img3} alt="blog" />
            <div className="blog__main--box-text-small">
              June 6, 2016 . Aljazeera
            </div>
            <div className="blog__main--box-text-normal">
              Change your place and get the fresh air
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Blog;

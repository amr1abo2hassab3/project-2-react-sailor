import { Link } from "react-router-dom";
import "./SecBlog.css";

import Blog1 from "../../media/blog-1.jpg";
import Blog2 from "../../media/blog-2.jpg";
import Blog3 from "../../media/blog-3.jpg";
import Blog4 from "../../media/blog-4.jpg";
import Blogr1 from "../../media/blog-recent-1.jpg";
import Blogr2 from "../../media/blog-recent-2.jpg";
import Blogr3 from "../../media/blog-recent-3.jpg";
import Blogr4 from "../../media/blog-recent-4.jpg";
import Blogr5 from "../../media/blog-recent-5.jpg";

const BlogSection = () => {
  return (
    <section className="blog_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="all_blog_sec">
              <div className="img_blog">
                <img src={Blog1} alt="" />
              </div>
              <div className="text_blog ">
                <h2>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </h2>
                <div className="meta_blog">
                  <ul>
                    <li className="d-flex align-items-center ">
                      <i className="fa-regular fa-user"></i>
                      <Link to="#">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-clock"></i>
                      <Link to="#">Jan 1, 2020</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-comment-dots"></i>
                      <Link to="#">Comments</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>
                <div className="btn_blog d-flex justify-content-end">
                  <button className="btn_main "> read more</button>
                </div>
              </div>
            </div>

            <div className="all_blog_sec">
              <div className="img_blog">
                <img src={Blog2} alt="" />
              </div>
              <div className="text_blog ">
                <h2>Nisi magni odit consequatur autem nulla dolorem</h2>
                <div className="meta_blog">
                  <ul>
                    <li className="d-flex align-items-center ">
                      <i className="fa-regular fa-user"></i>
                      <Link to="#">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-clock"></i>
                      <Link to="#">Jan 1, 2020</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-comment-dots"></i>
                      <Link to="#">Comments</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint
                  ullam quis illum voluptatum et. Quo libero rerum voluptatem
                  pariatur nam. Ad impedit qui officiis est in non aliquid
                  veniam laborum. Id ipsum qui aut. Sit aliquam et quia
                  molestias laboriosam. Tempora nam odit omnis eum corrupti qui
                  aliquid excepturi molestiae. Facilis et sint quos sed
                  voluptas. Maxime sed tempore enim omnis non alias odio quos
                  distinctio.
                </p>
                <div className="btn_blog d-flex justify-content-end">
                  <button className="btn_main "> read more</button>
                </div>
              </div>
            </div>

            <div className="all_blog_sec">
              <div className="img_blog">
                <img src={Blog3} alt="" />
              </div>
              <div className="text_blog ">
                <h2>
                  Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                  libero sit sint.
                </h2>
                <div className="meta_blog">
                  <ul>
                    <li className="d-flex align-items-center ">
                      <i className="fa-regular fa-user"></i>
                      <Link to="#">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-clock"></i>
                      <Link to="#">Jan 1, 2020</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-comment-dots"></i>
                      <Link to="#">Comments</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Aut iste neque ut illum qui perspiciatis similique recusandae
                  non. Fugit autem dolorem labore omnis et. Eum temporibus
                  fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe
                  laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt.
                  Ut dolores velit.
                </p>
                <div className="btn_blog d-flex justify-content-end">
                  <button className="btn_main "> read more</button>
                </div>
              </div>
            </div>

            <div className="all_blog_sec">
              <div className="img_blog">
                <img src={Blog4} alt="" />
              </div>
              <div className="text_blog ">
                <h2>
                  Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                  explicabo eius exercitationem.
                </h2>
                <div className="meta_blog">
                  <ul>
                    <li className="d-flex align-items-center ">
                      <i className="fa-regular fa-user"></i>
                      <Link to="#">John Doe</Link>
                    </li>
                    <li clLinkssName="d-flex align-items-center">
                      <i className="fa-regular fa-clock"></i>
                      <Link to="#">Jan 1, 2020</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa-regular fa-comment-dots"></i>
                      <Link to="#">Comments</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Aspernatur rerum perferendis et sint. Voluptates cupiditate
                  voluptas atque quae. Rem veritatis rerum enim et autem. Saepe
                  atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea
                  asperiores expedita et et delectus voluptates rerum. Id saepe
                  ut itaque quod qui voluptas nobis porro rerum. Quam quia
                  nesciunt qui aut est non omnis. Inventore occaecati et quaerat
                  magni itaque nam voluptas. Voluptatem ducimus sint id earum ut
                  nesciunt sed corrupti nemo.
                </p>
                <div className="btn_blog d-flex justify-content-end">
                  <button className="btn_main "> read more</button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <ul className="d-flex justify-content-center blog_123">
                <li>1</li>
                <li className="active_blog">2</li>
                <li>3</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="all_blog_right">
              <h2>search</h2>

              <form action="">
                <input type="text" />
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>

              <h3>Categories</h3>

              <ul className="list_blog_right">
                <li>
                  <span>General</span> (25)
                </li>
                <li>
                  <span>Lifestyle </span> (12)
                </li>
                <li>
                  <span>Travel</span> (5)
                </li>
                <li>
                  <span>Design</span> (22)
                </li>
                <li>
                  <span>Creative</span> (8)
                </li>
                <li>
                  <span>Educaion</span> (14)
                </li>
              </ul>

              <h4>Recent Posts</h4>

              <div className="Recent_Posts">
                <div className="img_Recent_Posts">
                  <img src={Blogr1} alt="" />
                </div>
                <div className="text_Recent_Posts">
                  <h1>Nihil blanditiis at in nihil autem</h1>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="Recent_Posts">
                <div className="img_Recent_Posts">
                  <img src={Blogr2} alt="" />
                </div>
                <div className="text_Recent_Posts">
                  <h1>Quidem autem et impedit</h1>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="Recent_Posts">
                <div className="img_Recent_Posts">
                  <img src={Blogr3} alt="" />
                </div>
                <div className="text_Recent_Posts">
                  <h1>Id quia et et ut maxime similique occaecati ut </h1>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="Recent_Posts">
                <div className="img_Recent_Posts">
                  <img src={Blogr4} alt="" />
                </div>
                <div className="text_Recent_Posts">
                  <h1>Laborum corporis quo dara net para </h1>
                  <p>Jan 1, 2020</p>
                </div>
              </div>
              <div className="Recent_Posts">
                <div className="img_Recent_Posts">
                  <img src={Blogr5} alt="" />
                </div>
                <div className="text_Recent_Posts">
                  <h1>Et dolores corrupti quae illo quod dolor</h1>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <h3 className="tags_blogs">Tags</h3>

              <ul className="button_blog">
                <li>app</li>
                <li>IT</li>
                <li>Business</li>
                <li>mac</li>
                <li>design</li>
                <li>office</li>
                <li>Creative</li>
                <li>studio </li>
                <li>smart </li>
                <li>Tips </li>
                <li>Marketing </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

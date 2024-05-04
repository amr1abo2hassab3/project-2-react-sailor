import "./sec5.css";
import proto1 from "../../media/portfolio-1.jpg";
import proto2 from "../../media/portfolio-2.jpg";
import proto3 from "../../media/portfolio-3.jpg";
import proto4 from "../../media/portfolio-4.jpg";
import proto5 from "../../media/portfolio-5.jpg";
import proto6 from "../../media/portfolio-6.jpg";
import proto7 from "../../media/portfolio-7.jpg";
import proto8 from "../../media/portfolio-8.jpg";
import proto9 from "../../media/portfolio-9.jpg";

const Sec5 = () => {
  const imgs = [
    {
      img: proto1,
      title: "app 1",
      category: "app",
    },
    {
      img: proto4,
      title: "app 1",
      category: "app",
    },
    {
      img: proto6,
      title: "app 3",
      category: "app",
    },
    {
      img: proto8,
      title: "app 1",
      category: "app",
    },
    {
      img: proto2,
      title: "web 3",
      category: "web",
    },
    {
      img: proto3,
      title: "app 1",
      category: "app",
    },
    {
      img: proto5,
      title: "web 2",
      category: "web",
    },
    {
      img: proto7,
      title: "app 1",
      category: "app",
    },
    {
      img: proto9,
      title: "web 3",
      category: "web",
    },
    {
      img: proto3,
      title: "app 1",
      category: "app",
    },
    {
      img: proto4,
      title: "app 1",
      category: "app",
    },
    {
      img: proto7,
      title: "app 1",
      category: "app",
    },
    {
      img: proto8,
      title: "app 1",
      category: "app",
    },
  ];
  return (
    <section className="sec5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="list_sec5">
              <ul className="p-0 d-flex align-items-center ">
                <li className="active_list">all</li>
                <li>app</li>
                <li>card</li>
                <li>wep</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="all_img_sec5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto1} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 1</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5 hide_img">
                <div className="img_sec5">
                  <img src={proto4} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 1</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto6} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 3</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5 hide_img">
                <div className="img_sec5">
                  <img src={proto8} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 1</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto2} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>web 3</h4>
                    <p>web</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5 hide_img">
                <div className="img_sec5">
                  <img src={proto3} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 1</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto5} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>web 2</h4>
                    <p>web</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5 hide_img">
                <div className="img_sec5">
                  <img src={proto7} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 1</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto9} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>web 3</h4>
                    <p>web</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 img_none_sec5">
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto3} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>app 2</h4>
                    <p>app</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto4} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>card 2</h4>
                    <p>card</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto7} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>card 1</h4>
                    <p>card</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_element_sec5">
                <div className="img_sec5">
                  <img src={proto8} alt="" />
                </div>
                <div className="overlay">
                  <div className="text_sec5">
                    <h4>card 3</h4>
                    <p>card</p>
                    <div className="links_icon_sec5">
                      <i className="fa-solid fa-plus"></i>
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec5;

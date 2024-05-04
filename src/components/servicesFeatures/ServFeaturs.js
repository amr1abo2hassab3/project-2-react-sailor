import "./servFeaturs.css";
import featursImg1 from "../../media/features-1.png";
import featursImg2 from "../../media/features-2.png";
import featursImg3 from "../../media/features-3.png";
import featursImg4 from "../../media/features-4.png";
import featursImg5 from "../../media/features-5.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FeaturesServ = () => {
  const dataFeatures = [
    {
      title: "Architecto ut aperiam autem id",
      para: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      img: featursImg1,
      category: "Modi sit est",
    },
    {
      title: "Et blanditiis nemo veritatis excepturi",
      para: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
      img: featursImg2,
      category: "Unde praesentium sed",
    },
    {
      title: "Impedit facilis occaecati odio neque aperiam sit",
      para: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
      desc: "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
      img: featursImg3,
      category: "Pariatur explicabo vel",
    },
    {
      title:
        "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
      para: "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      desc: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      img: featursImg4,
      category: "Nostrum qui quasi",
    },
    {
      title: "Est eveniet ipsam sindera pad rone matrelat sando reda",
      para: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
      desc: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
      img: featursImg5,
      category: "Iusto ut expedita aut",
    },
  ];

  const [filter, setFilter] = useState([
    {
      title: "Architecto ut aperiam autem id",
      para: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      img: featursImg1,
      category: "Modi sit est",
    },
  ]);

  const filterProduct = (cat) => {
    const updataList = dataFeatures.filter((x) => x.category === cat);
    setFilter(updataList);
  };

  useEffect(() => {


    let btn_click = document.querySelectorAll(".btn_click");
    const btnActive = (e) => {
      // this loop remove active btn
      for (let i = 0; i < btn_click.length; i++) {
        if (btn_click[i].classList.contains("active_services")) {
          btn_click[i].classList.remove("active_services");
        }
      }
      // add class active btn
      e.target.classList.add("active_services");
    };

    for (let i = 0; i < btn_click.length; i++) {
      btn_click[i].addEventListener("click", btnActive);
    }

    
  }, []);

  return (
    <section className="tem_about">
      <div className="container">
        <div className="tem_header_about in_services">
          <h2 className="d-flex align-items-center features_solid">FEATURES</h2>
          <p className="">CHECK OUR FEATURES</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="all_nav_services">
              <ul>
                <li
                  className="active_services btn_click"
                  onClick={() => filterProduct("Modi sit est")}
                >
                  Modi sit est
                </li>

                <li
                  className="btn_click"
                  onClick={() => filterProduct("Unde praesentium sed")}
                >
                  Unde praesentium sed
                </li>

                <li
                  className="btn_click"
                  onClick={() => filterProduct("Pariatur explicabo vel")}
                >
                  Pariatur explicabo vel
                </li>

                <li
                  className="btn_click"
                  onClick={() => filterProduct("Nostrum qui quasi")}
                >
                  Nostrum qui quasi
                </li>

                <li
                  className="btn_click"
                  onClick={() => filterProduct("Iusto ut expedita aut")}
                >
                  Iusto ut expedita aut
                </li>
              </ul>
            </div>
          </div>

          {filter.map((i) => (
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row serveices_img_and_text ">
                <div className="col-lg-8 col-md-12 col-sm-12 ">
                  <div className="text_services_page">
                    <h2>{i.title}</h2>
                    <p className="p_italic_serv">{i.para}</p>
                    <p>{i.desc}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                  <img className="img_serv" src={i.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesServ;

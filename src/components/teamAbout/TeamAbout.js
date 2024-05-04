import { Link } from "react-router-dom";
import "./teamAbout.css";

import team1 from "../../media/team-1.jpg";
import team2 from "../../media/team-2.jpg";
import team3 from "../../media/team-3.jpg";
import team4 from "../../media/team-4.jpg";

function TeamAbout() {
  const team = [
    {
      img: team1,
      name: "Walter White",
      jop: "Chief Executive Officer",
      description: "Explicabo voluptatem mollitia et repellat",
    },
    {
      img: team2,
      name: "Sarah Jhonson",
      jop: "Product Manager",
      description: "Aut maiores voluptates amet et quis",
    },
    {
      img: team3,
      name: "William Anderson",
      jop: "CTO",
      description: "Quisquam facilis cum velit laborum corrupti",
    },
    {
      img: team4,
      name: "Amanda Jepson",
      jop: "Accountant",
      description: "Dolorum tempora officiis odit laborum officiis",
    },
  ];

  return (
    <section className="tem_about">
      <div className="container">
        <div className="tem_header_about">
          <h2 className="d-flex align-items-center ">team</h2>
          <p>OUR HARDOWRKING TEAM</p>
        </div>

        <div className="row">
          {team.map((i) => (
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="all_element_tem">
                <div className="img_tem">
                  <img src={i.img} alt="" />
                </div>
                <div className="text_tem">
                  <h2>{i.name}</h2>
                  <span>{i.jop}</span>
                  <p>{i.description}</p>

                  <div className="media_footer_links media_about_tem_links">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamAbout;

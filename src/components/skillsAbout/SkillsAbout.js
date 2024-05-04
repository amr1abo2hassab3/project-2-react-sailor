import { useEffect } from "react";
import "./skills.css";

function Skills() {
  useEffect(() => {
    let bar_skills = document.querySelectorAll(".bar_skills");
    console.log(bar_skills);
    const skillsStart = () => {
      if (window.scrollY >= 600) {
        bar_skills[0].classList.add("bar_skills_html");
        bar_skills[1].classList.add("bar_skills_php");
        bar_skills[2].classList.add("bar_skills_css");
        bar_skills[3].classList.add("bar_skills_cms");
        bar_skills[4].classList.add("bar_skills_java");
        bar_skills[5].classList.add("bar_skills_photo");
      }else{
          bar_skills[0].classList.remove("bar_skills_html");
          bar_skills[1].classList.remove("bar_skills_php");
          bar_skills[2].classList.remove("bar_skills_css");
          bar_skills[3].classList.remove("bar_skills_cms");
          bar_skills[4].classList.remove("bar_skills_java");
          bar_skills[5].classList.remove("bar_skills_photo");
      }
    };

    window.addEventListener("scroll" , skillsStart);
    
  }, []);

  return (
    <section className="sec_skills">
      <div className="container">
        <div className="tem_header_about header_skills">
          <h2 className="d-flex align-items-center ">OUR SKILLS</h2>
          <p>CHECK OUR OUR SKILLS</p>
        </div>

        <div className="all_skills">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills">
                  <p>html</p>
                  <p>100%</p>
                </div>
                <div className="bar_skills"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills">
                  <p>php</p>
                  <p>80%</p>
                </div>
                <div className=" bar_skills"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills ">
                  <p>css</p>
                  <p>90%</p>
                </div>
                <div className="bar_skills "></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills ">
                  <p>WORDPRESS/CMS</p>
                  <p>90%</p>
                </div>
                <div className="bar_skills "></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills">
                  <p>JAVASCRIPT</p>
                  <p>75%</p>
                </div>
                <div className="bar_skills"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="div_rating">
                <div className="rating_skills">
                  <p>PHOTOSHOP</p>
                  <p>55%</p>
                </div>
                <div className="bar_skills"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
